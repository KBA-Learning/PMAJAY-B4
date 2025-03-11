import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'

const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName]   = useState('');
    const [userName, setUsername]   = useState('');
    const [password, setPassword]   = useState('');
    const [userRole, setUserRole]   = useState('user');
    const [error, setError]         = useState('');
    const navigate                = useNavigate();

    const handleSignup = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch('/api/signup',{
                method:'POST',
                credentials: 'include',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    FirstName: firstName,
                    LastName: lastName,
                    UserName: userName,
                    Password: password,
                    UserRole: userRole,
                }),
            });
console.log("output",response)
            if(!response.ok) {
                const errData = await response.json();
                throw new Error(errData.msg || 'Signup failed');
            }

            navigate('/');
        } catch(err) {
            setError(err.message || 'Signup failed: Please try again!')
        }
    };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md bg-white p-8 rounded shadow">
    <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
    {error && <p className='text-red-500 mb-4'>{error}</p>}
    <form onSubmit={handleSignup}>
      <div className="mb-4">
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          
          className="w-full p-2 border rounded mt-1"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label  className="block text-gray-700">Last Name</label>
        <input
          type="text"
          value={lastName}
          
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">User Name</label>
        <input
          type="text"
          value={userName}
          className="w-full p-2 border rounded mt-1"
          onChange = {(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          value = {password}
          
          className="w-full p-2 border rounded mt-1"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Role</label>
        <select
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
          
          className="w-full p-2 border rounded mt-1"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Sign Up
      </button>
     
    </form>
    <p> Already have an account?
    <Link to='/' className='text-blue-500'>Login</Link>
    </p>
  </div>
</div>
  )
}

export default SignupPage