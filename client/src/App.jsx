import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Loans from './components/Loans';
import PensionRetirement from './components/pension/PensionRetirement';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import About from './components/About';
import TaxReturns from './components/services/tax/TaxReturns';

// New Components
import HealthInsurance from './components/insurance/HealthInsurance';
import CarInsurance from './components/insurance/CarInsurance';
import LiabilityInsurance from './components/insurance/LiabilityInsurance';
import DisabilityInsurance from './components/insurance/DisabilityInsurance';
import PersonalLoans from './components/loans/PersonalLoans';
import BusinessLoans from './components/loans/BusinessLoans';
import StudentLoans from './components/loans/StudentLoans';
import RealEstateProperties from './components/realestate/RealEstateProperties'; 
import RealEstateFinance from './components/realestate/RealEstateFinance';
import Gold from './components/services/Gold';
import Electricity from './components/services/Electricity';
import BankAccounts from './components/services/BankAccounts';
import SponsoredEvents from './components/services/SponsoredEvents';
import { AuthProvider } from './components/AuthContext';
import StartupSolutions from './components/services/StartupSolutions';
import Investments from './components/services/Investments';
import AllLoans from './components/loans/AllLoans';
import Insurance from './components/insurance/Insurance';
import ChatbotWidget from './components/chat/ChatbotWidget';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="layout-wrapper">
          <Navbar />
            <main className="main-content"> 
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                
                {/* Insurance Routes */}
                <Route path="/insurance" element={<Insurance />} />
                {/* <Route path="/insurance/health" element={<HealthInsurance />} />
                <Route path="/insurance/car" element={<CarInsurance />} />
                <Route path="/insurance/liability" element={<LiabilityInsurance />} />
                <Route path="/insurance/disability" element={<DisabilityInsurance />} />
                 */}
                {/* Loans Routes */}
                <Route path="/loans" element={<AllLoans />} />
                <Route path="/loans/personal" element={<PersonalLoans />} />
                <Route path="/loans/business" element={<BusinessLoans />} />
                <Route path="/loans/student" element={<StudentLoans />} />
                
                {/* Real Estate Routes */}
                <Route path="/realEstate/properties" element={<RealEstateProperties />} />
                <Route path="/realEstate/finance" element={<RealEstateFinance />} />
                
                {/* Other Services Routes */}
                <Route path="/investments" element={<Investments />} />
                <Route path="/startup-solutions" element={<StartupSolutions />} />
                <Route path="/pension-retirement" element={<PensionRetirement />} />
                <Route path="/tax-returns" element={<TaxReturns />} />
                <Route path="/gold" element={<Gold />} />
                <Route path="/electricity" element={<Electricity />} />
                <Route path="/bank-accounts" element={<BankAccounts />} />
                <Route path="/sponsored-events" element={<SponsoredEvents />} />
                {/* About */}
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            
            {/* Use only the ChatbotWidget */}
            <ChatbotWidget />
            
            <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;