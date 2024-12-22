import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Loans from './components/Loans';
import PensionRetirement from './components/PensionRetirement';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import About from './components/About';
// Import other components

function App() {
  return (
    <Router>
      <div className="layout-wrapper">
        <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/loans/*" element={<Loans />} />
              <Route path="/pension-retirement" element={<PensionRetirement />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
      </div>
    </Router>
  );
}

export default App;