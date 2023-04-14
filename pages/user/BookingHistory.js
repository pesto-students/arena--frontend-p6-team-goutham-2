import { Navbar } from "@components";
import { useEffect } from "react";
import axios from "../api/authApi";
import { useState } from "react";

const BookingHistory = () => {
    const [data, setData] = useState(null)
    const [todayDate, setDate] = useState();
    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
            const response = await axios.get(`/payment/paymentlist`);
            setData(response.data.data)
        };
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        setDate(`${year}/${month}/${day}, ${hours}:${minutes}:${seconds}`);
        dataFetch();
    }, []);
    return (
        <div className="w-full">
            <Navbar />
            <main></main>
            <div>
                <div className="px-10 gap-y-4">
                    <div className=" text-[#434342]  py-2.5 px-4 bg-white-500 text-black shadow-md flex items-center flex-row justify-between">
                        <h1 className="text-xl italic font-light ">Booking History</h1>
                        <div>
                            <h1 className="text-xl font-light m-0">My Account</h1>
                            <p className="text-xs">Karishma Sunitha</p>
                        </div>
                    </div>
                    <div className=" text-[#434342] py-2.5 px-4 bg-orange-500 text-black shadow-md flex items-center flex-row justify-between">
                        <div>
                            <label class="relative block">
                                <span class="sr-only">Search</span>
                                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                                </span>
                                <input
                                    class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                    placeholder="Search for anything..."
                                    type="text"
                                    name="search"
                                />
                            </label>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-xl font-light m-0">Show Result</h1>
                            <h1 className="text-xl font-light m-0">10</h1>
                        </div>
                    </div>
                    <div className=" text-[#434342] py-2.5 px-4 bg-litegray-500 text-black shadow-md items-center ">
                        <div className=" flex-row justify-between flex">
                            <h1 className="text-xl font-light m-0"><b>Date</b></h1>
                            <h1 className="text-xl font-light m-0"><b>Name</b></h1>
                            <h1 className="text-xl font-light m-0"><b>Email</b></h1>
                            <h1 className="text-xl font-light m-0"><b>Account</b></h1>
                            <h1 className="text-xl font-light m-0"><b>Action</b></h1>
                        </div>
                    </div>
                    {data?.length > 0 && data?.map((item) => {
                        return (<>
                            <div className=" text-[#434342] py-2.5 px-4 bg-litegray-500 text-black shadow-md items-center ">
                                <div className=" flex-row justify-between flex">
                                    <h1 className="text-sm font-light m-0">{item.date || todayDate}</h1>
                                    <h1 className="text-sm font-light m-0">{item?.name || "test"} </h1>
                                    <h1 className="text-sm font-light m-0">
                                        {item.email || "test@gmail.com"}
                                    </h1>
                                    <h1 className="text-sm font-light m-0">{item.amount || "NIL"}</h1>
                                    <h1 className="text-sm font-light m-0">{item.razorpay_signature
                                        ? "SUCCESS" : "DENIED"}</h1>
                                </div>
                            </div>
                        </>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default BookingHistory;
