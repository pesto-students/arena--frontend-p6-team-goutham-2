/* eslint-disable react/no-unescaped-entities */
import { Navbar } from '@components';
import { useEffect, useState } from 'react';
import axios from "../api/authApi";
const URL = "/court/courts";
const CourtList = () => {
    const [courts, setCourts] = useState(null)
    useEffect(() => {
        (async () => {
            const response = await axios.get(URL);
            setCourts(response.data);
        })();

    }, [])
    return (
        <div className='w-full'>
            <Navbar />
            <div >
                <ul className="grid gap-4 grid-cols-2 px-10 ...">
                    {courts?.data?.map((item) => {
                        return (

                            <li key={item?.email} className="py-4 flow-root">
                                <div className="flow-root ...">
                                    <img className="rounded-t-lg aspect-video ..." src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80" alt="" />
                                    <div className="ml-3">
                                        <div className='flex items-center justify-between	...'>
                                            <div>
                                                <p className="text-3xl italic">{item?.courtName}</p>
                                            </div>

                                            <div>
                                                <img className="... rounded-t-lg" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixlok.com%2Ficons%2Fstar-icon-svg-rating-svg-icon-free-download%2F&psig=AOvVaw2WbL8CsaPqWULc2zo4PriJ&ust=1679116712042000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCzpKub4v0CFQAAAAAdAAAAABAE" alt="" />
                                                <p className="text-sm italic font-bold">{item?.facility}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm italic font-bold">{item?.location}</p>
                                        <p className="text-sm italic font-bold">₹{item?.price}/hour</p>
                                        <p className="text-sm italic font-bold flex items-center justify-end	...">{item?.email}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
    );
};

export default CourtList;
