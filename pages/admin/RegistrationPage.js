import { useRouter } from "next/router";
import { Navbar } from "@components";
import { useEffect } from "react";

const RegisterConfirm = () => {
    return (
        <div className="w-full">
            <Navbar />
            <main></main>
            <div>
                <div className=" text-[#434342] italic pl-5 ">
                  <center>  <h1 className="text-xl font-light"><b>BOOKING REQUEST</b></h1></center>
                </div>
                <ul className="grid gap-10 grid-cols-2 px-10 ...">
                    <li className="flex items-center justify-center">
                        <div className="flex flex-col gap-10">
                            <div class=" rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-center flex-col">
                                <h5>Karishma Sunitha</h5>
                                <p>karishmasunitha1997@gmail.com</p>
                                <div className="justify-between flex items-start flex-row w-100">
                                    <div>
                                        <h5 className="font-bold">Date</h5>
                                        <p>4th February</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold">Time</h5>
                                        <p>1:30pm</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold">Place</h5>
                                        <p>Thambaram</p>
                                    </div>
                                </div>

                                <div className="w-64 flex justify-between">
                                    <button
                                        onClick={() => router.push(`/owner/Slot/${owner_id}`)}
                                        class="italic rounded-lg py-2.5 px-6 bg-green-500 text-white font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75"
                                    >
                                        Accept
                                    </button>

                                    <button
                                        onClick={() => router.push(`/owner/Slot/${owner_id}`)}
                                        class="italic rounded-lg py-2.5 px-6 bg-light-500 text-black font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75"
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* <li className="flex items-center justify-center">
                        <div className="flex flex-col gap-10">
                            <div class=" rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-center flex-col">
                                <h5>Karishma Sunitha</h5>
                                <p>karishmasunitha1997@gmail.com</p>

                                <div className="justify-between flex items-start flex-row w-100">
                                    <div>
                                        <h5 className="font-bold">Date</h5>
                                        <p>4th February</p>
                                    </div>

                                    <div>
                                        <h5 className="font-bold">Time</h5>
                                        <p>1:30pm</p>
                                    </div>

                                    <div>
                                        <h5 className="font-bold">Place</h5>
                                        <p>Thambaram</p>
                                    </div>
                                </div>

                                <div className="w-64 flex justify-between">
                                    <button
                                        onClick={() => router.push(`/owner/Slot/${owner_id}`)}
                                        class="italic rounded-lg py-2.5 px-6 bg-green-500 text-white font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75"
                                    >
                                        Accept
                                    </button>

                                    <button
                                        onClick={() => router.push(`/owner/Slot/${owner_id}`)}
                                        class="italic rounded-lg py-2.5 px-6 bg-light-500 text-black font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75"
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="flex items-center justify-center">
                        <div className="flex flex-col gap-10">
                            <div class=" rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-center flex-col">
                                <h5>Karishma Sunitha</h5>
                                <p>karishmasunitha1997@gmail.com</p>

                                <div className="justify-between flex items-start flex-row w-100">
                                    <div>
                                        <h5 className="font-bold">Date</h5>
                                        <p>4th February</p>
                                    </div>

                                    <div>
                                        <h5 className="font-bold">Time</h5>
                                        <p>1:30pm</p>
                                    </div>

                                    <div>
                                        <h5 className="font-bold">Place</h5>
                                        <p>Thambaram</p>
                                    </div>
                                </div>

                                <div className="w-64 flex justify-between">
                                    <button
                                        onClick={() => router.push(`/owner/Slot/${owner_id}`)}
                                        class="italic rounded-lg py-2.5 px-6 bg-green-500 text-white font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75"
                                    >
                                        Accept
                                    </button>

                                    <button
                                        onClick={() => router.push(`/owner/Slot/${owner_id}`)}
                                        class="italic rounded-lg py-2.5 px-6 bg-light-500 text-black font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75"
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="flex items-center justify-center">
                        <div className="flex flex-col gap-10">
                            <div class=" rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-center flex-col">
                                <h5>Karishma Sunitha</h5>
                                <p>karishmasunitha1997@gmail.com</p>

                                <div className="justify-between flex items-start flex-row w-100">
                                    <div>
                                        <h5 className="font-bold">Date</h5>
                                        <p>4th February</p>
                                    </div>

                                    <div>
                                        <h5 className="font-bold">Time</h5>
                                        <p>1:30pm</p>
                                    </div>

                                    <div>
                                        <h5 className="font-bold">Place</h5>
                                        <p>Thambaram</p>
                                    </div>
                                </div>

                                <div className="w-64 flex justify-between">
                                    <button
                                        onClick={() => router.push(`/owner/Slot/${owner_id}`)}
                                        class="italic rounded-lg py-2.5 px-6 bg-green-500 text-white font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75"
                                    >
                                        Accept
                                    </button>

                                    <button
                                        onClick={() => router.push(`/owner/Slot/${owner_id}`)}
                                        class="italic rounded-lg py-2.5 px-6 bg-light-500 text-black font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75"
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};

export default RegisterConfirm;
