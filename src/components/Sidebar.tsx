import React from 'react'
import { 
  Calendar, BookOpen, Truck, MessageSquare, Stethoscope, ClipboardList, 
  Pill, Search, DollarSign, Clock, Briefcase, Building, Users, UserPlus, 
  UserCheck, UserX, UserMinus, PawPrint, Clipboard, BarChart2, Settings, 
  HelpCircle, FileText, Activity, Thermometer, Syringe, Droplet, Zap, 
  CreditCard, Receipt, PieChart, UserCog, Lock, Book, MessageCircle,
  Tag, Package, Download, Video, PhoneCall, Database, LayoutDashboard,
  Bell, Star, Heart, Check// Added Bell icon import
} from 'lucide-react'
import { useAppContext } from '../context/AppContext'

interface MenuItem {
  name: string;
  icon: React.ElementType;
}

const Sidebar = () => {
  const { users, selectedMenuItem, setSelectedMenuItem } = useAppContext()

  const getMenuItems = (): MenuItem[] => {
    switch (selectedMenuItem) {
      case 'Dashboard':
        return [
          { name: 'Calendar', icon: Calendar },
          { name: 'eBookings', icon: BookOpen },
          { name: 'Records', icon: FileText },
          { name: 'Boarding', icon: Briefcase },
          { name: 'Communication', icon: MessageSquare },
          { name: 'Hospital', icon: Check  },
          { name: 'Diagnostics', icon: Activity },
          { name: 'Work List', icon: Clipboard },
          { name: 'Medications', icon: Heart },
          { name: 'Lost And Found', icon: Star },
          { name: 'Billing Triggers', icon: FileText },
          { name: 'Time Clock', icon: Clock },
          { name: 'Jobs', icon: Briefcase },
        ];
      case 'Contacts':
        return [
          { name: 'All Contacts', icon: Users },
          { name: 'Add Contact', icon: UserPlus },
          { name: 'Groups', icon: UserCheck },
          { name: 'Blocked', icon: UserX },
        ];
      case 'Patients':
        return [
          { name: 'All Patients', icon: PawPrint },
          { name: 'Add Patient', icon: UserPlus },
          { name: 'Medical Records', icon: ClipboardList },
          { name: 'Appointments', icon: Calendar },
        ];
      case 'Clinical':
        return [
          { name: 'Examinations', icon: Stethoscope },
          { name: 'Treatments', icon: Pill },
          { name: 'Lab Results', icon: FileText },
          { name: 'Prescriptions', icon: ClipboardList },
        ];
      case 'Financial':
        return [
          { name: 'Invoices', icon: FileText },
          { name: 'Payments', icon: CreditCard },
          { name: 'Expenses', icon: DollarSign },
          { name: 'Reports', icon: BarChart2 },
        ];
      case 'Reporting':
        return [
          { name: 'Financial Reports', icon: PieChart },
          { name: 'Patient Statistics', icon: BarChart2 },
          { name: 'Inventory Reports', icon: Package },
          { name: 'Staff Performance', icon: UserCog },
        ];
      case 'Admin':
        return [
          { name: 'User Management', icon: Users },
          { name: 'Roles & Permissions', icon: Lock },
          { name: 'System Settings', icon: Settings },
          { name: 'Audit Logs', icon: FileText },
        ];
      case 'Help':
        return [
          { name: 'User Guide', icon: Book },
          { name: 'FAQs', icon: HelpCircle },
          { name: 'Support Ticket', icon: MessageCircle },
          { name: 'Contact Support', icon: PhoneCall },
        ];
      default:
        return [
          { name: 'Dashboard', icon: LayoutDashboard },
          { name: 'Contacts', icon: Users },
          { name: 'Patients', icon: PawPrint },
          { name: 'Clinical', icon: Clipboard },
          { name: 'Financial', icon: DollarSign },
          { name: 'Reporting', icon: BarChart2 },
          { name: 'Admin', icon: Settings },
          { name: 'Help', icon: HelpCircle },
        ];
    }
  }

  const menuItems = getMenuItems()

  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <h2 className="font-bold mb-4 text-primary">{selectedMenuItem}</h2>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button 
                className={`flex items-center space-x-2 w-full text-left p-2 rounded-lg transition duration-300
                            ${selectedMenuItem === item.name 
                              ? 'bg-primary text-white' 
                              : 'text-gray-700 hover:bg-neutral-background'}`}
                onClick={() => setSelectedMenuItem(item.name)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {selectedMenuItem === 'Dashboard' && (
        <div className="mt-4">
          <h3 className="font-bold mb-2 text-primary">Active Users</h3>
          <ul className="space-y-1">
            {users.map(user => (
              <li key={user.id} className="text-gray-700">{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  )
}

export default Sidebar