/* eslint-disable react/no-unescaped-entities */
import { Navbar } from '@components';
import React, { useState } from "react";
import axios from "../api/authApi";
import { validate } from "../../components/validation/validate"
import { useRouter } from 'next/router';
const SignIn = () => {
  const router = useRouter();
  const intialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [loginError, setLoginError] = useState();
  const [successMsg, setSuccessMsg] = useState(null)
  const REGISTER_URL = "/admin/signin"
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
      response?.data?.token && setSuccessMsg(response?.data?.user._id)
    } catch (err) {
      setLoginError(err?.response?.data?.error);
    }
  };
  React.useEffect(() => {
    if (successMsg ) {
      router.push(`/admin/Home/${successMsg}`)
    }
  }, [successMsg]);
  return (
    <div className='w-full'>
      <Navbar />

      <main className='flex flex-col items-center mt-16'>
        <h1 className='text-xl text-[#434342] italic'>Hello !</h1>
        <p className='italic'>Sign in to your Admin Account</p>

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
          <button className='text-xl italic text-[#434342]' type='submit'
          >SignIn</button>
          <p className="text-[#434342]">
          Don't have an account?
          <u onClick={() => router.push("/admin/register")}>Create</u>{" "}
        </p>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
