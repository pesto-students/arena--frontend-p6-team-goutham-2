import { useRouter } from 'next/router'
import axios from "../api/authApi";
import { Navbar } from '@components';
import { useEffect } from 'react';
import { useState } from 'react';
import Calendar from '../../components/calendar';

const Post = () => {
  const router = useRouter()
  const { owner_id } = router.query
  const [data,setData] = useState(null)
  const apiKey = 'e7537d6804384d3f9149817d235e1084';
  const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey
  const BOOKNOW_URL = `/court/booknow/${data?._id}`;
    

    // useEffect(() => {
    //     (async () => {
    //         const email = "arenahelpline@gmail.com"
    //         try {
    //             const response = await fetch(apiURL + '&email=' + email);
    //             const data = await response.json();
    //         } catch (error) {
    //             throw error;
    //         }
    //     })();

    // }, [])


    // const sendEmailValidationRequest = async (email) => {
    //     try {
    //         const response = await fetch(apiURL + '&email=' + email);
    //         const data = await response.json();
    //     } catch (error) {
    //         throw error;
    //     }
    // }
    const handleSubmit = async () => {
      try {
        delete data._id
        const response = await axios.post(
            BOOKNOW_URL,
            JSON.stringify(data),
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        console.log(response,"res.....");
        // response.data.id && setSuccessMsg(response.data.id)
    } catch (err) {
        console.log(err, "error");
    }
    }
const handleCalendar = () => {
  console.log("calendar");
}
    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
            const data =
                await axios.get(
                    `/court/${owner_id}`

                );
            data?.data && setData(data?.data.data[0])
      };

        dataFetch();
    }, [owner_id]);
    return (
        <div className="w-full">
        <Navbar />
        <main></main>
        <div>
          <div className=" text-[#434342] italic pl-5 ">
            <h1 className="text-xl font-light">
              Draw Back, serve and hit it across the net.
            </h1>
            <p className="pl-5 text-sm italic font-bold">Thambaram</p>
          </div>
          <ul className="grid gap-4 grid-cols-2 px-10 ...">
            <div className="flow-root ...">
              <li className="py-4 flow-root">
                <img
                  className="rounded-t-lg aspect-video ..."
                  src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
                  alt=""
                />
              </li>
            </div>
            <li>
              <div className="flex flex-col gap-10">
                <div class="italic rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-center flex-col">
                  <p>Timing</p>
                  <p>Mon-Sun: 5am-2am</p>
                </div>
                <div className="flex italic rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-start flex-col">
                  <p>Location</p>
                  <p>
                    { data?.address || "District Kanchupuram, Sivagami Nagar Ext Road, MunusamiNagar,Medavakam Chennai, TamilNadu 600100"}
                  </p>
                   <p> {data?.location}</p>
                </div>
              </div>
            </li>
  <Calendar from={data?.from || 9} to={data?.to ||19} handleCalendar={handleCalendar}/>           
  
            <li>
              <div className="flex flex-col gap-10">
                <div class="italic rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-center flex-col">
                  <p>Sports Available. <b>{data?.sports}</b></p>
                  
                  <p>Facility: {data?.facility}</p>
                 
  
                </div>
              </div>
            </li>
            <li className="flex items-center justify-center">
              <button
                onClick={handleSubmit}
                class="italic rounded-lg py-2.5 px-6 bg-green-500 text-white font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75"
              >
                Book Now
              </button>
            </li>
            <li>
              <div className="flex flex-col gap-10">
                <div class="italic rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-center flex-col">
                  <p>Price: ₹ {data?.price || "200"} per hour</p>
              
                </div>
              </div>
            </li>
            <li></li>
  
            <li>
              <div className="flex flex-col gap-10">
                <div class="italic rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-center flex-col">
                  <p>Related To Shasu Badminton Sports Medavakkam 
                      Sports Clybs in Medavakkam, Badminton courts in Chennai,Badminton courts in Chennai,
                  </p>
  
                </div>
              </div>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    );
}

export default Post