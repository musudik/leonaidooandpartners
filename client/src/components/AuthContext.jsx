import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from './firebaseConfig';  
import { 
  signInWithPopup, 
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  setPersistence,
  browserLocalPersistence,
  getAuth,
  onAuthStateChanged
} from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(null);

  const signInWithGoogle = async () => {
    try {
      // Set persistence first
      await setPersistence(auth, browserLocalPersistence);
      
      // Create provider instance
      const provider = new GoogleAuthProvider();
      
      // Add necessary scopes
      provider.addScope('https://www.googleapis.com/auth/calendar');
      provider.addScope('https://www.googleapis.com/auth/calendar.events');
      
      // Set custom parameters
      provider.setCustomParameters({
        prompt: 'select_account'
      });

      // Clear any existing popup sessions
      const auth = getAuth();
      if (auth.currentUser) {
        await firebaseSignOut(auth);
      }

      // Attempt sign in
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      // Store token
      if (token) {
        localStorage.setItem('googleAccessToken', token);
        setAccessToken(token);
      }

      return result.user;
    } catch (error) {
      console.error('Sign in error:', error);
      // Clear any stored tokens on error
      localStorage.removeItem('googleAccessToken');
      setAccessToken(null);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      localStorage.removeItem('googleAccessToken');
      setAccessToken(null);
      setCurrentUser(null);
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  };

  const getAccessToken = async () => {
    try {
      if (!currentUser) return null;
      const token = await currentUser.getIdToken(true);
      setAccessToken(token);
      return token;
    } catch (error) {
      console.error('Error getting access token:', error);
      return null;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          setCurrentUser(user);
          const token = await user.getIdToken();
          setAccessToken(token);
        } else {
          setCurrentUser(null);
          setAccessToken(null);
          localStorage.removeItem('googleAccessToken');
        }
      } catch (error) {
        console.error('Auth state change error:', error);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signInWithGoogle,
    signOut,
    getAccessToken,
    accessToken
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;