import React from 'react';
import {
  Stethoscope,
  LayoutDashboard,
  Users,
  PawPrint,
  Clipboard,
  DollarSign,
  BarChart2,
  Settings,
  HelpCircle,
  Search,
  Bell,
  RotateCcw,
  Printer,
  Mail,
  User,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { selectedMenuItem, setSelectedMenuItem } = useAppContext();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Contacts', icon: Users },
    { name: 'Patients', icon: PawPrint },
    { name: 'Clinical', icon: Clipboard },
    { name: 'Financial', icon: DollarSign },
    { name: 'Reporting', icon: BarChart2 },
    { name: 'Admin', icon: Settings },
    { name: 'Help', icon: HelpCircle },
  ];

  const handleMenuItemClick = (name: string) => {
    setSelectedMenuItem(name);
  };

  return (
    <header className="bg-primary text-white p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Stethoscope className="h-6 w-6" />
          <span className="font-bold text-xl">Chandigarh Clinic</span>
        </div>
        <nav className="flex space-x-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`p-2 hover:bg-primary-light rounded-lg flex flex-col items-center transition duration-300 ${
                selectedMenuItem === item.name ? 'bg-primary-light' : ''
              }`}
              onClick={() => handleMenuItemClick(item.name)}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs mt-1">{item.name}</span>
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-primary-light rounded-lg transition duration-300">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-primary-light rounded-lg transition duration-300">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-primary-light rounded-lg transition duration-300">
            <RotateCcw className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-primary-light rounded-lg transition duration-300">
            <Printer className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-primary-light rounded-lg transition duration-300">
            <Mail className="h-5 w-5" />
          </button>
          <div className="flex items-center">
            <span className="bg-secondary rounded-full px-2 py-1 text-xs mr-2 text-primary font-bold">
              99+
            </span>
            <button className="p-2 hover:bg-primary-light rounded-lg transition duration-300">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;