import { ChangeEvent, FormEvent, useState } from 'react';

export default function AppointmentForm() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        console.log('Creating new appointment:', { date, time, notes });
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        switch (id) {
            case 'date':
                setDate(value);
                break;
            case 'time':
                setTime(value);
                break;
            case 'notes':
                setNotes(value);
                break;
        }
    };

    return (
        <>
         <h1 className="text-2xl font-bold mb-4">Appointment</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
                <label htmlFor="date" className="text-lg font-semibold mb-2">Date:</label>
                <input id="date" type="date" value={date} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
                <label htmlFor="appt-time" className="text-lg font-semibold mb-2">Time:</label>
                <input id="appt-time"  min="09:00" max="18:00" type="time" value={time} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
                <label htmlFor="notes" className="text-lg font-semibold mb-2">Notes:</label>
                <textarea id="notes" value={notes} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
        </form>
        </>
    );
}
