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

  const silentSignIn = async () => {
    try {
      // Check if we have a stored auth session
      const auth = getAuth();
      if (auth.currentUser) {
        const token = await auth.currentUser.getIdToken(true);
        localStorage.setItem('googleAccessToken', token);
        setAccessToken(token);
        return auth.currentUser;
      }

      // Try to restore the Google session
      const provider = new GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/calendar');
      provider.addScope('https://www.googleapis.com/auth/calendar.events');
      
      // Set custom parameters for silent sign-in
      provider.setCustomParameters({
        prompt: 'none' // This prevents the popup and tries silent sign-in
      });

      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      localStorage.setItem('googleAccessToken', token);
      setAccessToken(token);
      
      return result.user;
    } catch (error) {
      // Silent sign-in failed, but this is expected if user is not already authenticated
      console.log('Silent sign-in failed:', error);
      return null;
    }
  };

  const signInWithGoogle = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      
      const provider = new GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/calendar');
      provider.addScope('https://www.googleapis.com/auth/calendar.events');
      
      provider.setCustomParameters({
        access_type: 'offline',
        prompt: 'consent'
      });
  
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      // Verify token with backend using the correct endpoint
      const response = await axios.get('http://localhost:3002/calendar/verify-token', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (response.data.success) {
        localStorage.setItem('googleAccessToken', token);
        setAccessToken(token);
        return result.user;
      } else {
        throw new Error('Failed to verify token');
      }
    } catch (error) {
      console.error('Sign in error:', error);
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

  const refreshToken = async () => {
    if (!currentUser) return null;
    
    try {
      const newToken = await currentUser.getIdToken(true);
      localStorage.setItem('googleAccessToken', newToken);
      setAccessToken(newToken);
      return newToken;
    } catch (error) {
      console.error('Token refresh error:', error);
      return null;
    }
  };

  const getAccessToken = async () => {
    if (!currentUser) return null;
    
    try {
      const token = localStorage.getItem('googleAccessToken');
      if (!token) {
        return await refreshToken();
      }
      return token;
    } catch (error) {
      console.error('Error getting access token:', error);
      return null;
    }
  };

  useEffect(() => {
    let tokenRefreshInterval;

    const initializeAuth = async () => {
      try {
        // Try silent sign-in first
        await silentSignIn();
        
        // Set up auth state listener
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          setCurrentUser(user);
          if (user) {
            await getAccessToken();
            
            // Refresh token every 45 minutes
            tokenRefreshInterval = setInterval(refreshToken, 45 * 60 * 1000);
          } else {
            if (tokenRefreshInterval) {
              clearInterval(tokenRefreshInterval);
            }
          }
          setLoading(false);
        });

        return unsubscribe;
      } catch (error) {
        console.error('Auth initialization error:', error);
        setLoading(false);
      }
    };

    initializeAuth();

    return () => {
      if (tokenRefreshInterval) {
        clearInterval(tokenRefreshInterval);
      }
    };
  }, []);

  const value = {
    currentUser,
    signInWithGoogle,
    signOut,
    getAccessToken,
    accessToken,
    silentSignIn
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};