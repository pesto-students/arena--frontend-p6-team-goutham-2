import { useRouter } from 'next/router'
import { Navbar } from '@components';
import { useEffect } from 'react';

const Post = () => {
    const router = useRouter()
    const { pid } = router.query
    const apiKey = 'e7537d6804384d3f9149817d235e1084';
    const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey


    useEffect(() => {
        (async () => {
            const email = "arenahelpline@gmail.com"
            try {
                const response = await fetch(apiURL + '&email=' + email);
                const data = await response.json();
            } catch (error) {
                throw error;
            }
        })();

    }, [])


    const sendEmailValidationRequest = async (email) => {
        try {
            const response = await fetch(apiURL + '&email=' + email);
            const data = await response.json();
        } catch (error) {
            throw error;
        }
    }
    return (
        <div className='w-full'>
            <Navbar />
            <div >
                <ul className="grid gap-4 grid-cols-2 px-10 ...">

                    <li className="py-4 flow-root">
                        <div className="flow-root ...">
                            <img className="rounded-t-lg aspect-video ..." src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80" alt="" />
                            <div className="ml-3">
                                <div className='flex items-center justify-between	...'>
                                    <div>
                                        <p className="text-3xl italic">{pid}</p>
                                        <p className="text-3xl italic">Court name</p>
                                    </div>
                                    <div>
                                        <img className="... rounded-t-lg" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixlok.com%2Ficons%2Fstar-icon-svg-rating-svg-icon-free-download%2F&psig=AOvVaw2WbL8CsaPqWULc2zo4PriJ&ust=1679116712042000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCzpKub4v0CFQAAAAAdAAAAABAE" alt="" />
                                        <p className="text-sm italic font-bold">facitlty</p>
                                    </div>
                                </div>
                                <p className="text-sm italic font-bold">chennai</p>
                                <p className="text-sm italic font-bold">₹450/hour</p>
                                <p className="text-sm italic font-bold flex items-center justify-end  ...">arena@gmail.com</p>
                            </div>
                            <button type="submit" onChange={() => sendEmailValidationRequest("arena@gmail.com")} className='block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'>book now</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Post