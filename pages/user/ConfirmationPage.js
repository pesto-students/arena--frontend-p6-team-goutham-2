import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { Navbar } from '@components';


const inter = Inter({ subsets: ['latin'] });

export default function Confirmation() {
const router= useRouter()
    return (
        <>
            <div className='w-full'>
                <Navbar />
                <Head>
                    <title>Arena | Confirmation Page</title>
                    <meta name='description' content='Generated by create next app' />
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <main className='flex flex-col items-center mt-16 gap-10'>
                    <div className=' flex flex-col items-center bg-white outline-gray shadow-sm px-4 py-2 font-light text-[#434342] italic w-3/5 rounded-3xl text-center'>

                        <h1 className='text-base'>
                            Hi you booking is confirmed and thanks for choosing us. Kindly check your email for slot booking details.
                        </h1> <br />
                        <h1 className='text-base'>
                            Thank you
                        </h1>
                    </div>

                    <button type="button"    onClick={() => router.push(`/`)}className=" w-max	rounded-3xl block w-full bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Go back</button>
                </main>
            </div>
        </>
    );
}
