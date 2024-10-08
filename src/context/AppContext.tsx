import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
}

interface AppContextType {
  selectedMenuItem: string;
  setSelectedMenuItem: (item: string) => void;
  users: User[];
  addPatient: (patient: { name: string; species: string }) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('Dashboard');
  const [users] = useState<User[]>([
    { id: '1', name: 'Dr. White' },
    { id: '2', name: 'Walk Ins' },
    { id: '3', name: 'Nurse' },
    { id: '4', name: 'Drop Off' },
    { id: '5', name: 'Surgery' },
  ]);

  const addPatient = (patient: { name: string; species: string }) => {
    console.log('Adding patient:', patient);
    // Implement the logic to add a patient
  };

  return (
    <AppContext.Provider
      value={{
        selectedMenuItem,
        setSelectedMenuItem,
        users,
        addPatient,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};