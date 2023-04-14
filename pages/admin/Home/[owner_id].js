import Head from "next/head";
import { Navbar } from "@components";
import axios from "../../api/authApi"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Home() {
    const router = useRouter()
    const { owner_id } = router.query;
    const [data, setData] = useState(false)
    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
            const data =
                await axios.get(
                    `/court/${owner_id}`
                );
            data?.data.data[0] && setData(true)
        };
        dataFetch();
    }, [owner_id]);
    return (
        <>
            <div className="w-full">
                <Navbar />
                <Head>
                    <title>Owner Home</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <div className="px-5 pt-4">

                        <h1 className="text-xl text-[#434342] italic">Hello</h1>
                        <p className="px-5 pt-4 italic">Owner, Welcome Back</p>
                    </div>

                    <div className=" flex flex-col items-center mt-16 gap-10">
                        <button
                            onClick={() => router.push(`/owner/AddCourt/${owner_id}`)}
                            class="max-w-prose italic rounded-full py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75"
                        >
                            Add Court
                        </button>
                        {data && (
                            <button onClick={() => router.push(`/owner/Slot/${owner_id}`)} class="italic rounded-full py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75">
                                Choose slot
                            </button>)}

                        <button onClick={() => router.push(`/owner/BookingHistory`)} class="italic rounded-full py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75">
                            Payment details
                        </button>

                    </div>

                    {/* <h3 onClick={() => router.push("/owner/AddCourt")}>Add court</h3> */}
                </main>
            </div>
        </>
    );
}
