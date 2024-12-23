import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Loans from './components/Loans';
import PensionRetirement from './components/PensionRetirement';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import About from './components/About';
import TaxReturns from './components/TaxReturns';
import Insurance from './components/Insurance';
import EnergySavings from './components/EnergySavings';
import WealthBuilding from './components/WealthBuilding';
import Banking from './components/Banking';

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
              <Route path="/tax-returns" element={<TaxReturns />} />
              <Route path="/about" element={<About />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/energy-savings" element={<EnergySavings />} />
              <Route path="/wealth-building" element={<WealthBuilding />} />
              <Route path="/banking" element={<Banking />} />
            </Routes>
          </main>
          <Footer />
      </div>
    </Router>
  );
}

export default App;