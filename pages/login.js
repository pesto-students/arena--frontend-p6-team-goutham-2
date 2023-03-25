/* eslint-disable react/no-unescaped-entities */
import { Navbar } from '@components';
import Image from 'next/image';
import React, { useState } from "react";
import axios from "./api/authApi";
import {validate} from "../components/validation/validate"
import { useRouter } from 'next/router';
const SignIn = () => {
  const router = useRouter();
  const intialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg,setSuccessMsg]=useState(null)
  const REGISTER_URL ="/signin"
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify(formValues),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      response.data.token && setSuccessMsg("Registered")
    } catch (err) {
      console.log(err, "error");
    }
  };
  React.useEffect (()=>{
    if(successMsg === "Registered"){
      console.log("successMsg");
      router.push("/")}
      },[successMsg]);
  return (
    <div className='w-full'>
      <Navbar />

      <main className='flex flex-col items-center mt-16'>
        <h1 className='text-xl text-[#434342] italic'>Hello !</h1>
        <p className='italic'>Sign in to your Account</p>

        <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-4 mt-8'>
          <div className=''>
            <input
              type='text'
              name='email'
              placeholder='Username'
              onChange={handleChange}
              id='userName'
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
          <button className='text-xl italic text-[#434342]' type='submit'>SignIn</button>
        </form>
      </main>

      <footer className='flex flex-col items-center mt-4'>
        <p className='text-[#434342]'>Don't have an account?<u>Create</u> </p>

      </footer>
    </div>
  );
};

export default SignIn;
