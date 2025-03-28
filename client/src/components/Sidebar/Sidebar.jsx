import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { 
  HomeIcon,
  CircleDollarSign,
  FileText,
  Wallet,
  ShieldCheck,
  Zap,
  Coins,
  Building2,
  BuildingIcon,
  Clock,
  PlayCircle,
  Search,
  GraduationCap,
  Car,
  Heart,
  AlertTriangle,
  LandPlot,
  CircleUserRound,
  Hospital,
} from 'lucide-react';
import logo from './../../assets/Leo2025.png';

const MenuItem = ({ item, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const getIcon = (iconName) => {
    const icons = {
      home: <HomeIcon className="w-8 h-8 text-[#f987004a]" />,
      pension: <Clock className="w-8 h-8 text-[#f987004a]" />,
      tax: <FileText className="w-8 h-8 text-[#f987004a]" />,
      loans: <Wallet className="w-8 h-8 text-[#f987004a]" />,
      insurance: <ShieldCheck className="w-8 h-8 text-[#f987004a]" />,
      electricity: <Zap className="w-8 h-8 text-[#f987004a]" />,
      gold: <Coins className="w-8 h-8 text-[#f987004a]" />,
      realEstate: <Building2 className="w-8 h-8 text-[#f987004a]" />,
      bankAccounts: <BuildingIcon className="w-8 h-8 text-[#f987004a]" />,
      search: <Search className="w-8 h-8 text-[#f987004a]" />,
      video: <PlayCircle className="w-8 h-8 text-[#f987004a]" />,
      student: <GraduationCap className="w-8 h-8 text-[#f987004a]" />,
      car: <Car className="w-8 h-8 text-[#f987004a]" />,
      health: <Heart className="w-8 h-8 text-[#f987004a]" />,
      liability: <AlertTriangle className="w-8 h-8 text-[#f987004a]" />,
      disability: <Hospital className="w-8 h-8 text-[#f987004a]" />,
      land: <LandPlot className="w-8 h-8 text-[#f987004a]" />,
      personal: <CircleUserRound className="w-8 h-8 text-[#f987004a]" />
    };
    return icons[iconName] || <HomeIcon className="w-8 h-8 text-[#f987004a]" />;
  };

  return (
    <div className="mb-4">
      <Link to={item.path}>
        <div
          className={`flex items-center justify-between px-6 py-3 cursor-pointer rounded-lg
            ${isActive ? 'bg-[#f987004a]/5 text-[#f987004a]' : 'hover:bg-[#f987004a]/5 text-gray-700'}`}
          onClick={(e) => {
            if (item.subItems) {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
        >
          <div className="flex items-center gap-4">
            {getIcon(item.icon)}
            <span className="text-base font-medium">{item.name}</span>
          </div>
          {item.subItems && (
            <ChevronDownIcon
              className={`w-6 h-6 transition-transform ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            />
          )}
        </div>
      </Link>
      {isOpen && item.subItems && (
        <div className="ml-6 mt-2 space-y-2">
          {item.subItems.map((subItem, index) => (
            <Link to={subItem.path} key={index}>
              <div
                className={`flex items-center gap-4 px-6 py-3 text-base rounded-lg cursor-pointer
                  ${subItem.isActive ? 'bg-[#f987004a]/5 text-[#f987004a]' : 'hover:bg-[#f987004a]/5 text-gray-600'}`}
              >
                {getIcon(subItem.icon)}
                {subItem.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      name: 'Home',
      icon: 'home',
      path: '/',
    },
    {
      name: 'Search',
      icon: 'search',
      path: '/search',
    },
    {
      name: 'Pension and Retirement Services',
      icon: 'pension',
      path: '/pension',
    },
    {
      name: 'Tax Services',
      icon: 'tax',
      path: '/tax',
    },
    {
      name: 'Loans',
      icon: 'loans',
      path: '/loans',
      subItems: [
        { name: 'Personal Loans', icon: 'personal', path: '/loans/personal' },
        { name: 'Home/Real Estate Loans', icon: 'realEstate', path: '/loans/home' },
        { name: 'Business Loans', icon: 'bankAccounts', path: '/loans/business' },
        { name: 'Student Loans', icon: 'student', path: '/loans/student' },
      ],
    },
    {
      name: 'Insurance',
      icon: 'insurance',
      path: '/insurance',
      subItems: [
        { name: 'Health Insurance', icon: 'health', path: '/insurance/health' },
        { name: 'Car Insurance', icon: 'car', path: '/insurance/car' },
        { name: 'Liability Insurance', icon: 'liability', path: '/insurance/liability' },
        { name: 'Disability Insurance', icon: 'disability', path: '/insurance/disability' },
      ],
    },
    {
      name: 'Electricity Bill Reduction',
      icon: 'electricity',
      path: '/electricity',
    },
    {
      name: 'Gold',
      icon: 'gold',
      path: '/gold',
    },
    {
      name: 'Real Estate',
      icon: 'realEstate',
      path: '/real-estate',
    },
    {
      name: 'Bank Accounts',
      icon: 'bankAccounts',
      path: '/bank-accounts',
    },
  ];

  return (
    <div className="w-80 h-screen bg-[#f987004a] text-white fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <div className="mb-10">
          <img src={logo} alt="Leonaidoo & Partners" className="w-30 h-30" />
          <h1 className="text-2xl font-bold text-[#f987004a] mt-4">Leonaidoo & Partners</h1>
        </div>
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <MenuItem 
              key={index} 
              item={item} 
              isActive={location.pathname === item.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;