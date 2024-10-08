// Dashboard.tsx
import React from 'react';
// import OverviewCards from './OverviewCards';
// import AppointmentList from './AppointmentList';
import Calendar from '../components/Calendar'; // Import the Calendar component

const Dashboard: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      {/* <OverviewCards />
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AppointmentList /> */}
        <Calendar /> {/* Add the Calendar component */}
      
    </div>
  );
};

export default Dashboard;
