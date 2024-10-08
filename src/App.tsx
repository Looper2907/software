import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Calendar from './components/Calendar'
import PatientForm from './components/PatientForm'
import { useAppContext } from './context/AppContext'
import { Plus } from 'lucide-react'

function App() {
  const { selectedMenuItem, addPatient } = useAppContext()
  const [showPatientForm, setShowPatientForm] = useState(false)

  const renderContent = () => {
    console.log('Selected Menu Item:', selectedMenuItem); // Debug log
    switch (selectedMenuItem) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Contacts':
        return <div className="p-4">Contacts content goes here.</div>
      case 'Patients':
        return <div className="p-4">Patients content goes here.</div>
      case 'Clinical':
        return <div className="p-4">Clinical content goes here.</div>
      case 'Financial':
        return <div className="p-4">Financial content goes here.</div>
      case 'Reporting':
        return <div className="p-4">Reporting content goes here.</div>
      case 'Admin':
        return <div className="p-4">Admin content goes here.</div>
      case 'Help':
        return <div className="p-4">Help content goes here.</div>
      default:
        
        return <div className="p-4">Content for {selectedMenuItem} goes here.</div>
        
    }
  }

  const handleAddPatient = (patient: { name: string; species: string }) => {
    addPatient(patient)
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-background">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="flex justify-between items-center mb-4">
            <h1>{selectedMenuItem}</h1>
            {selectedMenuItem === 'Patients' && (
              <button
                onClick={() => setShowPatientForm(true)}
                className="btn flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Patient
              </button>
            )}
          </div>
          {renderContent()}
        </main>
      </div>
      {showPatientForm && (
        <PatientForm
          onClose={() => setShowPatientForm(false)}
          onAddPatient={handleAddPatient}
        />
      )}
    </div>
  )
}
export default App;