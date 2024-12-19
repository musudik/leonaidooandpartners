import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { BanknoteIcon, HomeIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react';

const LoanCard = ({ loan }) => (
  <Link to={loan.path}>
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
          {loan.icon}
        </div>
        <h3 className="font-semibold">{loan.title}</h3>
      </div>
      <p className="text-gray-600">{loan.description}</p>
    </div>
  </Link>
);

const LoansList = () => {
  const loanTypes = [
    {
      id: 1,
      title: 'Personal Loans',
      description: 'Quick personal loans with competitive interest rates',
      icon: <BanknoteIcon className="w-6 h-6" />,
      path: '/loans/personal',
    },
    {
      id: 2,
      title: 'Home Loans',
      description: 'Finance your dream home',
      icon: <HomeIcon className="w-6 h-6" />,
      path: '/loans/home',
    },
    {
      id: 3,
      title: 'Business Loans',
      description: 'Grow your business with flexible financing',
      icon: <BriefcaseIcon className="w-6 h-6" />,
      path: '/loans/business',
    },
    {
      id: 4,
      title: 'Student Loans',
      description: 'Invest in your education',
      icon: <GraduationCapIcon className="w-6 h-6" />,
      path: '/loans/student',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {loanTypes.map((loan) => (
        <LoanCard key={loan.id} loan={loan} />
      ))}
    </div>
  );
};

const PersonalLoan = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h2 className="text-2xl font-bold mb-4">Personal Loans</h2>
    {/* Add personal loan content */}
  </div>
);

const HomeLoan = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h2 className="text-2xl font-bold mb-4">Home Loans</h2>
    {/* Add home loan content */}
  </div>
);

const BusinessLoan = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h2 className="text-2xl font-bold mb-4">Business Loans</h2>
    {/* Add business loan content */}
  </div>
);

const StudentLoan = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h2 className="text-2xl font-bold mb-4">Student Loans</h2>
    {/* Add student loan content */}
  </div>
);

const Loans = () => {
  const location = useLocation();
  
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Loan Services</h2>
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