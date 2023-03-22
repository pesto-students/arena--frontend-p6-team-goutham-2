/* eslint-disable react/no-unescaped-entities */
import { Navbar } from '@components';
import Image from 'next/image';
import React, { useState } from "react";
const SignIn = () => {
  const intialValues = { userName: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  console.log(formValues, "formValues...");
  return (
    <div className='w-full'>
      <Navbar />

      <main className='flex flex-col items-center mt-16'>
        <h1 className='text-xl text-[#434342] italic'>Hello !</h1>
        <p className='italic'>Sign in to your Account</p>

        <form className='flex flex-col items-center space-y-4 mt-8'>
          <div className=''>
            <input
              type='text'
              name='userName'
              placeholder='Username'
              onChange={handleChange}
              id='fullName'
              className='bg-[#d9d9d9] rounded-xl px-4 py-1.5 placeholder:text-[#434242] placeholder:opacity-90 placeholder:italic'
            />
          </div>
          <div className=''>
            <input
              type='password'
              name='password'
              placeholder='Password'
              id='password'
              onChange={handleChange}
              className='bg-[#d9d9d9] rounded-xl px-4 py-1.5 placeholder:text-[#434242] placeholder:opacity-90 placeholder:italic'
            />
          </div>
          <p className='ml-10'>Forgot Your Password ?</p>
          <button className='text-xl italic text-[#434342]'>SignIn</button>
        </form>
      </main>

      <footer className='flex flex-col items-center mt-4'>
        <p className='text-[#434342]'>Don't have an account?<u>Create</u> </p>

      </footer>
    </div>
  );
};

export default SignIn;
