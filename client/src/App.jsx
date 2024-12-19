import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Loans from './components/Loans';
import Navbar from './components/Navbar';
// Import other components

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/loans/*" element={<Loans />} />
              {/* Add other routes */}
            </Routes>
          </main>
      </div>
    </Router>
  );
}

export default App;