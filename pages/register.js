import React, { useState } from "react";
import { Navbar } from '@components';
import Image from 'next/image';
import axios from "./api/authApi";
import { useRouter } from "next/router";
import {validate} from "../components/validation/validate"
const Register = () => {
  const intialValues = { email: "", password: "", name: "", phone: "" };
  const router = useRouter();
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [successMsg,setSuccessMsg]=useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const REGISTER_URL = "/signup";

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
      response.data.id && setSuccessMsg("Registered")
    } catch (err) {
      console.log(err, "errr");
    }
  };

  return (
    <div className='w-full'>

      <Navbar />
      <main className='flex flex-col items-center mt-16'>
        <h1 className='text-xl text-[#434342] italic'>Hello</h1>
        <p className='italic'>Create Your Account</p>

        <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-4 mt-8'>
          <div className=''>
            <input
              type='text'
              name='name'
              placeholder='Full name'
              id='name'
              onChange={handleChange}
              className='bg-[#d9d9d9] rounded-xl px-4 py-1.5 placeholder:text-[#434242] placeholder:opacity-90 placeholder:italic'
            />
          </div>

          <div className=''>
            <input
              type='phone'
              name='phone'
              id='phone'
              onChange={handleChange}
              placeholder='Mobile No.'
              className='bg-[#d9d9d9] rounded-xl px-4 py-1.5 placeholder:text-[#434242] placeholder:opacity-90 placeholder:italic'
            />
          </div>

          <div className=''>
            <input
              type='text'
              name='email'
              id='email'
              onChange={handleChange}
              placeholder='Email Address'
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
          <button className='text-xl italic text-[#434342]' type='submit'>Register</button>
        </form>
      </main>

      <footer className='flex flex-col items-center mt-4'>
        <p className='text-[#434342]'>Or create account with social media</p>
        <div className='flex justify-center space-x-8 mt-4'>
          <Image
            src='/social-media/instagram.svg'
            alt='Instagram Logo'
            width={30}
            height={50}
            priority
          />
          <Image
            src='/social-media/facebook.svg'
            alt='Facebook Logo'
            width={30}
            height={50}
            priority
          />
          <Image
            src='/social-media/twitter.svg'
            alt='Twitter Logo'
            width={30}
            height={50}
            priority
          />
        </div>
      </footer>
    </div>
  );
};

export default Register;
