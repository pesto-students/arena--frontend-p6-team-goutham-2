import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Navbar } from '@components';


const inter = Inter({ subsets: ['latin'] });

export default function Confirmation() {
    return (
        <>
            <div className='w-full'>
                <Navbar />
                <Head>
                    <title>Arena | Confirm Ticket</title>
                    <meta name='description' content='Generated by create next app' />
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <main>
                    <h1>
                        confirmation ticket page
                    </h1>
                  
                </main>
            </div>
        </>
    );
}
