import React, { useState } from "react";
import { Navbar } from '@components';
import Image from 'next/image';
import axios from "../api/authApi";
import { useRouter } from "next/router";
import { validate } from "../../components/validation/validate"
const Register = () => {
  const intialValues = { email: "", password: "", name: "", phone: "" };
  const router = useRouter();
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState(null)
  const [loginError, setLoginError] = useState(false);
  const REGISTER_URL = "/admin/signup";
  React.useEffect(() => {
    if (successMsg === "Registered") {
      router.push("/")
    }
  }, [successMsg]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
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
      setLoginError(err.response.data.error);
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
              required
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
              required
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
              required
              id='email'
              onChange={handleChange}
              placeholder='Email Address'
              className='bg-[#d9d9d9] rounded-xl px-4 py-1.5 placeholder:text-[#434242] placeholder:opacity-90 placeholder:italic'
            />
          </div>
          <div className=''>
            <input
              type='password'
              required
              name='password'
              placeholder='Password'
              id='password'
              onChange={handleChange}
              className='bg-[#d9d9d9] rounded-xl px-4 py-1.5 placeholder:text-[#434242] placeholder:opacity-90 placeholder:italic'
            />
          </div>
          {loginError && (
            <div
              type="submit"
              class="group relative flex w-full justify-center rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white  "
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 mt-1">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </span>
              {loginError}
            </div>
          )}
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
