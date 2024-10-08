import React, { useState } from 'react'
import { Settings, Plus } from 'lucide-react'
import { useAppContext } from '../context/AppContext'
import AppointmentForm from './AppointmentForm'

const Calendar = () => {
  const { appointments=[], users=[], currentView, setCurrentView } = useAppContext()
  const [showAppointmentForm, setShowAppointmentForm] = useState(false)
  const currentDate = new Date(2024, 10, 2) // October 2, 2024

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex space-x-4">
          <button 
            className={`px-4 py-2 rounded-lg transition duration-300 ${currentView === 'day' ? 'bg-primary text-white' : 'bg-neutral-background text-primary hover:bg-primary hover:text-white'}`}
            onClick={() => setCurrentView('day')}
          >
            Day
          </button>
          <button 
            className={`px-4 py-2 rounded-lg transition duration-300 ${currentView === 'week' ? 'bg-primary text-white' : 'bg-neutral-background text-primary hover:bg-primary hover:text-white'}`}
            onClick={() => setCurrentView('week')}
          >
            Week
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold text-primary">
            {currentView === 'day' ? 'Wednesday, 02 October 2024' : 'Week of September 29 - October 5, 2024'}
          </h2>
          <Settings className="h-5 w-5 text-primary" />
        </div>
        <button
          onClick={() => setShowAppointmentForm(true)}
          className="btn flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Appointment
        </button>
      </div>
      <div className="grid grid-cols-5 gap-4 p-4">
        {users.map(user => (
          <div key={user.id} className="col-span-1">
            <h3 className="font-bold mb-2 text-primary">{user.name}</h3>
            {appointments
              .filter(appointment => appointment.time.startsWith(user.id))
              .map((appointment, index) => (
                <div key={appointment.id} className={`${appointment.color} p-2 mb-2 rounded-lg`}>
                  <p className="font-bold">{appointment.time.split('-')[1]}</p>
                  <p>{appointment.patient}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
      {showAppointmentForm && (
        <AppointmentForm onClose={() => setShowAppointmentForm(false)} />
      )}
    </div>
  )
}

export default Calendar