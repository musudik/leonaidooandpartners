import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon,
  Briefcase,
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
  Hospital,
  LandPlot,
  CircleUserRound,
  Menu,
  Gift,
  Contact
} from 'lucide-react';
import logo from './../assets/Leo2025.png';

const MenuItem = ({ item, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const getIcon = (iconName) => {
    const icons = {
      home: <HomeIcon className="w-6 h-6 text-[#f987008c]" />,
      pension: <Clock className="w-6 h-6 text-[#f987008c]" />,
      tax: <FileText className="w-6 h-6 text-[#f987008c]" />,
      loans: <Wallet className="w-6 h-6 text-[#f987008c]" />,
      insurance: <ShieldCheck className="w-6 h-6 text-[#f987008c]" />,
      electricity: <Zap className="w-6 h-6 text-[#f987008c]" />,
      gold: <Coins className="w-6 h-6 text-[#f987008c]" />,
      realEstate: <Building2 className="w-6 h-6 text-[#f987008c]" />,
      bankAccounts: <BuildingIcon className="w-6 h-6 text-[#f987008c]" />,
      search: <Search className="w-6 h-6 text-[#f987008c]" />,
      video: <PlayCircle className="w-6 h-6 text-[#f987008c]" />,
      student: <GraduationCap className="w-6 h-6 text-[#f987008c]" />,
      car: <Car className="w-6 h-6 text-[#f987008c]" />,
      health: <Heart className="w-6 h-6 text-[#f987008c]" />,
      liability: <AlertTriangle className="w-6 h-6 text-[#f987008c]" />,
      disability: <Hospital className="w-6 h-6 text-[#f987008c]" />,
      land: <LandPlot className="w-6 h-6 text-[#f987008c]" />,
      personal: <CircleUserRound className="w-6 h-6 text-[#f987008c]" />,
      briefcase: <Briefcase className="w-6 h-6 text-[#f987008c]" />,
      gift: <Gift className="w-6 h-6 text-[#f987008c]" />,
      contact: <Contact className="w-6 h-6 text-[#f987008c]" />,
    };
    return icons[iconName] || <HomeIcon className="w-6 h-6 text-[#f987008c]" />;
  };

  return (
    <div className="relative group">
      <Link to={item.path}>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#f987008c]/5 whitespace-nowrap">
          {getIcon(item.icon)}
          <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
        </div>
      </Link>
      {item.subItems && (
        <div className="hidden group-hover:block absolute top-full left-0 w-48 bg-[#200f01] shadow-lg rounded-lg overflow-hidden z-50">
          {item.subItems.map((subItem, index) => (
            <Link to={subItem.path} key={index}>
              <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 whitespace-nowrap">
                {getIcon(subItem.icon)}
                <span className="text-sm whitespace-nowrap">{subItem.name}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const menuItems = [
    {
      name: 'Home',
      icon: 'home',
      path: '/',
    },
    {
        name: 'Insurance',
        icon: 'insurance',
        path: '/insurance',
    },
    {
      name: 'Loans',
      icon: 'loans',
      path: '/loans',      
    },
    {
        name: 'Pension & Retirement',
        icon: 'pension',
        path: '/pension-retirement',
    },
    {
        name: 'Real Estate',
        icon: 'realEstate',
        subItems: [
            { name: 'Real Estate Finance', icon: 'realEstate', path: '/realEstate/finance' },
            { name: 'Properties', icon: 'realEstate', path: '/realEstate/properties' },
          ],
    },
    {
        name: 'Other Services',
        icon: 'CircleDollarSign',
        subItems: [
          { name: 'Investments', icon: 'investments', path: '/investments' },
          { name: 'Bank Accounts', icon: 'bankAccounts', path: '/bank-accounts' },
          { name: 'Electricity', icon: 'electricity', path: '/electricity' },
          { name: 'Gold', icon: 'gold', path: '/gold' },
          { name: 'Sponsored Events', icon: 'gift', path: '/sponsored-events' },
          { name: 'Tax Services', icon: 'tax', path: '/tax-returns' },
          { name: 'Startup Solutions', icon: 'tax', path: '/startup-solutions' },
        ],
    },
    {
        name: 'About',
        icon: 'contact',
        path: '/about',
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#200f01] text-white z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Leonaidoo & Partners" className="h-24" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item, index) => (
              <MenuItem 
                key={index} 
                item={item} 
                isActive={location.pathname === item.path}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-10 h-6 text-[#b5785a]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#f987008c] border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <MenuItem 
                key={index} 
                item={item} 
                isActive={location.pathname === item.path}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;