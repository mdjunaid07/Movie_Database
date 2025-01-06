import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';


const Signin = () => {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (e) => {

    e.preventDefault();

    try{
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Signed in successfully");
      navigate("/");
    }catch(err){
      toast.error("Email or Password worng");
    }

  }


  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
    <h1 className='text-2xl font-semibold mb-6'>Sign In</h1>

    <form onSubmit={handleSignIn}>
       <div className='mb-4'>
            <label className='block text-sm font-medium mb-2'>Email :</label>
            <input type="email" required className='w-full p-2 border border-gray-300 rounded-md' value={email} onChange={(e) => setEmail(e.target.value)}/>
       </div>

       <div className='mb-4'>
            <label className='block text-sm font-medium mb-2'>Password :</label>
            <input type="password" required className='w-full p-2 border border-gray-300 rounded-md' value={password} onChange={(e) => setPassword(e.target.value)}/>
       </div>

       <button type='submit' className='w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 mb-5'>
        Sign In
       </button>
       <Link to="/signup">Create an account</Link>
    </form>


  </div>
  )


}

export default Signin