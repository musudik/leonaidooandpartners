import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { BanknoteIcon, HomeIcon, BriefcaseIcon, GraduationCapIcon, ArrowLeft } from 'lucide-react';

const LoanCard = ({ loan }) => (
  <Link to={loan.path}>
    <div className="bg-[#200f01] text-white rounded-xl shadow-sm p-4 md:p-6 hover:bg-[#2a1403] transition-colors">
      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
        <div className="p-2 md:p-3 bg-[#f987008c]/10 rounded-lg text-[#f987008c]">
          {loan.icon}
        </div>
        <h3 className="font-semibold text-sm md:text-base">{loan.title}</h3>
      </div>
      <p className="text-gray-400 text-xs md:text-sm">{loan.description}</p>
    </div>
  </Link>
);

const LoansList = () => {
  const loanTypes = [
    {
      id: 1,
      title: 'Personal Loans',
      description: 'Quick personal loans with competitive interest rates',
      icon: <BanknoteIcon className="w-5 h-5 md:w-6 md:h-6" />,
      path: '/loans/personal',
    },
    {
      id: 2,
      title: 'Home Loans',
      description: 'Finance your dream home',
      icon: <HomeIcon className="w-5 h-5 md:w-6 md:h-6" />,
      path: '/loans/home',
    },
    {
      id: 3,
      title: 'Business Loans',
      description: 'Grow your business with flexible financing',
      icon: <BriefcaseIcon className="w-5 h-5 md:w-6 md:h-6" />,
      path: '/loans/business',
    },
    {
      id: 4,
      title: 'Student Loans',
      description: 'Invest in your education',
      icon: <GraduationCapIcon className="w-5 h-5 md:w-6 md:h-6" />,
      path: '/loans/student',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {loanTypes.map((loan) => (
        <LoanCard key={loan.id} loan={loan} />
      ))}
    </div>
  );
};

const LoanDetail = ({ title, children }) => (
  <div className="bg-[#200f01] text-white rounded-xl shadow-sm p-4 md:p-6">
    <div className="flex items-center gap-2 mb-4">
      <Link to="/loans" className="text-[#f987008c] hover:text-[#f98700]">
        <ArrowLeft className="w-5 h-5" />
      </Link>
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
    </div>
    {children}
  </div>
);

const PersonalLoan = () => (
  <LoanDetail title="Personal Loans">
    <div className="space-y-6">
      <section className="bg-[#200f01] p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Current Interest Rates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[#2a1403] rounded-lg text-center">
            <p className="text-[#f987008c] text-2xl font-bold">8.99%</p>
            <p className="text-sm text-gray-400">12 Months</p>
          </div>
          <div className="p-4 bg-[#2a1403] rounded-lg text-center">
            <p className="text-[#f987008c] text-2xl font-bold">10.99%</p>
            <p className="text-sm text-gray-400">24 Months</p>
          </div>
          <div className="p-4 bg-[#2a1403] rounded-lg text-center">
            <p className="text-[#f987008c] text-2xl font-bold">12.99%</p>
            <p className="text-sm text-gray-400">36 Months</p>
          </div>
        </div>
      </section>

      <section className="bg-[#200f01] p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Requirements</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Minimum age of 21 years</li>
          <li>Valid ID proof</li>
          <li>Latest 3 months bank statements</li>
          <li>Proof of income / salary slips</li>
          <li>Employment details</li>
        </ul>
      </section>

      <section className="bg-[#200f01] p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">How to Apply</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-[#f987008c] rounded-full flex items-center justify-center text-white font-bold">1</div>
            <div>
              <h4 className="font-semibold">Fill Application</h4>
              <p className="text-gray-400">Complete the online application form with your details</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-[#f987008c] rounded-full flex items-center justify-center text-white font-bold">2</div>
            <div>
              <h4 className="font-semibold">Submit Documents</h4>
              <p className="text-gray-400">Upload required documents for verification</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-[#f987008c] rounded-full flex items-center justify-center text-white font-bold">3</div>
            <div>
              <h4 className="font-semibold">Get Approval</h4>
              <p className="text-gray-400">Receive loan approval and disbursement</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </LoanDetail>
);

const HomeLoan = () => (
  <LoanDetail title="Home Loans">
    {/* Add home loan content */}
  </LoanDetail>
);

const BusinessLoan = () => (
  <LoanDetail title="Business Loans">
    {/* Add business loan content */}
  </LoanDetail>
);

const StudentLoan = () => (
  <LoanDetail title="Student Loans">
    {/* Add student loan content */}
  </LoanDetail>
);

const Loans = () => {
  const location = useLocation();
  
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">Loan Services</h2>
      <Routes>
        <Route path="/" element={<LoansList />} />
        <Route path="/personal" element={<PersonalLoan />} />
        <Route path="/home" element={<HomeLoan />} />
        <Route path="/business" element={<BusinessLoan />} />
        <Route path="/student" element={<StudentLoan />} />
      </Routes>
    </div>
  );
};

export default Loans;