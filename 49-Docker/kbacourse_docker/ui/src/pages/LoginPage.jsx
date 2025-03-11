import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'


const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
   
    const navigate = useNavigate();
    
    const handleLogin = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch('/api/login',{
                method:'POST',
                credentials: 'include',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({UserName:username,Password:password}),
            });

            if(!response.ok) {
                const errData = await response.json();
                throw new Error(errData.msg || 'Login failed');
            }

            navigate('/dashboard');
        } catch(err) {
            setError(err.message || 'Invalid credentials: Please try again!')
        }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      {error && <p className='text-red-500 mb-4'>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700">User Name</label>
          <input
            type="text"
            id="username"
            name="UserName"
            className="w-full p-2 border rounded mt-1"
            value={username}
            onChange={(e) => setUsername(e.target.value) }
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="Password"
            value={password}
            className="w-full p-2 border rounded mt-1"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
         <p> Don't have an account?
    <Link to='sign-up' className='text-blue-500'>Sign Up</Link>
    </p>
    </div>

  </div>
  )
}


export default LoginPage