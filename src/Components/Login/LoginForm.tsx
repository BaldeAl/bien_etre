import { FormEvent, useState } from 'react';
import '../../app/globals.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // Handle the login logic here
        console.log(`Logging in ${username} with password ${password}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="p-6 mt-6 text-center border w-72 md:w-96 rounded-xl">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className="w-full p-2 mb-6 text-center border rounded-xl"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="w-full p-2 mb-6 text-center border rounded-xl"
                    />
                    <button 
                        type="submit" 
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
