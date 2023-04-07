import { useRouter } from "next/router";
import { Navbar } from "@components";
import { useEffect } from "react";

const BookingHistory = () => {   
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

                    <div className=" text-[#434342] py-2.5 px-4 bg-litegray-500 text-black shadow-md items-center ">
                        <div className=" flex-row justify-between flex">
                            <h1 className="text-sm font-light m-0">4-02-2023</h1>
                            <h1 className="text-sm font-light m-0">karishma sunitha </h1>
                            <h1 className="text-sm font-light m-0">
                                karishmasunitha1997@gmail.com
                            </h1>
                            <h1 className="text-sm font-light m-0">250</h1>
                            <h1 className="text-sm font-light m-0">Action</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingHistory;
