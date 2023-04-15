import { useRouter } from "next/router";
import { Navbar } from "@components";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../api/authApi";
const RegisterConfirm = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
            const response = await axios.get(`/payment/paymentlist`);
            setData(response.data.data);
        };
        dataFetch();
    }, []);
    return (
        <div className="w-full">
            <Navbar />
            <main></main>
            <div>
                <div className=" text-[#434342] italic pl-5 py-6">
                    <center> <b> <h1 className="text-xl font-light"><b>BOOKING REQUEST</b></h1></b></center><br/>
                </div>
                <ul className="grid !flex justify-center gap-10 grid-cols-2 px-10 ...">
                    <li className="flex items-center justify-center">
                        <div className="flex flex-col gap-10">
                            {data?.length > 0 && data.map((item) => {
                                return (<>
                                    <div class=" rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-center flex-col">
                                        <h5>{item?.name || "test"} </h5>
                                        <p>{item?.email ||"test@gmail.com"}</p>
                                        <div className="justify-between flex items-start flex-row w-100">
                                            <div>
                                                <h5 className="font-bold">Date and Time</h5>
                                                <p>{item?.date || "14/4/2023, 4:00:00 PM"}</p>
                                            </div>
                                            {/* <div>
                                                <h5 className="font-bold">Time</h5>
                                                <p>1:30pm</p>
                                            </div> */}
                                            <div>
                                                <h5 className="font-bold">Place</h5>
                                                <p>{item?.location || "test"}</p>
                                            </div>
                                        </div>
                                        <div className="w-64 flex justify-between">
                                            <button
                                                class="italic rounded-lg py-2.5 px-6 bg-green-500 text-white font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75"
                                            >
                                                Accept
                                            </button>

                                            <button
                                                class="italic rounded-lg py-2.5 px-6 bg-light-500 text-black font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75"
                                            >
                                                Decline
                                            </button>
                                        </div>
                                    </div>
                                </>)
                            })}
                            {data?.length === 0 && (<>
                            <h1>No data available</h1></>)}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RegisterConfirm;
