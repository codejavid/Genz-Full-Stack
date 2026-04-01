import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';


const Signup = () => {

  const [email, setEmail] = useState("");  
  const [passsword, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSingUp = async(e) => {
   
    e.preventDefault();

    try{

     await createUserWithEmailAndPassword(auth, email, passsword);
     navigate("/");

    }catch(err){
        console.log(err);
    }


  }


  return (
    <section className='min-h-screen pt-10'>


    <form className="max-w-sm mx-auto" onSubmit={handleSingUp}>
      <h1 className="text-3xl my-4">Sign UP</h1>
      <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-90">Your email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required value={email}
          onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-90">Your password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={passsword}
          onChange={(e) => setPassword(e.target.value)}/>
      </div>

      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      <a to={"/signin"}> 
        Already have account
      </a>
    </form>
   </section>
  )
}

export default Signup