import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants';
import { Navbar } from '@components';
import { useState } from 'react';


export default function Home() {
    const intialValues = { email: "", address: "", city: "", pincode: "", phone: "" };
    const router = useRouter();
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [successMsg, setSuccessMsg] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const REGISTER_URL = "/owner/signup";
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    return (
        <>
            <div className='w-full'>
                <Navbar />
                <Head>
                    <title>Create Next App</title>
                    <meta name='description' content='Generated by create next app' />
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <main>
                    <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                <div className="mt-2.5">
                                    <input type="email" name="email" id="email" onChange={handleChange} className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-semibold leading-6 text-gray-900">Address</label>
                                <div className="mt-2.5">
                                    <textarea name="city" id="city" onChange={handleChange} className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-semibold leading-6 text-gray-900">City</label>
                                <div className="mt-2.5">
                                    <input type="text" name="company" id="company" onChange={handleChange} className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-semibold leading-6 text-gray-900">Pincode</label>
                                <div className="mt-2.5">
                                    <input type="text" onChange={handleChange} name="company" id="company" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-semibold leading-6 text-gray-900">Mobile No</label>
                                <div className=" mt-2.5">
                                    <input type="text" onChange={handleChange} name="phone" id="phone" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="mt-10">
                                <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Select slot</button>
                            </div>
                            <br />
                            <div className="mt-10 content-center justify-center">
                                <button type="submit" className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Submit</button>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
}
