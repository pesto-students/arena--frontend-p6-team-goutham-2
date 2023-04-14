import { useRouter } from "next/router";
import axios from "../api/authApi";
import { Navbar } from "@components";
import { useEffect } from "react";
import { useState } from "react";
import Calendar from "../../components/calendar";

const BookCourt = () => {
  const router = useRouter();
  const { owner_id } = router.query;
  const [data, setData] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  const [userData, setUserData] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null)
  const apiKey = "e7537d6804384d3f9149817d235e1084";
  const apiURL =
    "https://emailvalidation.abstractapi.com/v1/?api_key=" + apiKey;
  const USER_URL = `${router.query.user_id}`;
  const URL = "/rayzorpay";
  useEffect(() => {
    const getUsers = async () => {
      if (router.query.user_id) {
        const response = await axios.get(USER_URL);
        setUserData(response.data.data);
      }
    };
    getUsers();
  }, [router.query.user_id]);
  useEffect(() => {
    if (paymentDetails != null) {
      router.push("/user/ConfirmationPage")
    }
  }, [paymentDetails]);
  
  const handleCalendar = (date) => {
    setDateTime(date?.dateTime?.toLocaleString());
  };
  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await axios.get(`/court/${owner_id}`);
      data?.data && setData(data?.data.data[0]);
    };

    dataFetch();
  }, [owner_id]);

  const handlePayment = async () => {
    try {
      delete data._id;
      data.date = dateTime;
      const response = await axios.post(URL, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (response.data.data.id) {
        var options = {
          key: process.env.RAYZORPAY_KEY,
          amount: response?.data?.data?.amount * 100,
          currency: "INR",
          name: "Arena",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: response.data.data.id,
          handler: async function (response) {
            const userPayment = {
              name: userData.name,
              email: userData.email,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              courtName: data.courtName,
              amount: data.price,
              location: data.location,
              date: data.date,
            }
            const responses = await axios.post(`/payment/paymentdata`, JSON.stringify(userPayment), {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            });
            responses.data.id && setPaymentDetails(responses.data.signature);
          },
          notes: {
            notes_key_1: "Rayzor pay payment",
            notes_key_2: "Tea, Earl Grey… decaf.",
          },
          prefill: {
            name: "Arena badminton", //your customer's name
            email: "arenahelpline@gmail.com",
            contact: "9000090000",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
      }
    } catch (err) { 
      console.log(err);
    }
  };

  return (
    <div className="w-full">
      <Navbar />
      <div>
        <div className=" text-[#434342] italic pl-5 ">
          <h1 className="text-xl font-light">
            Draw Back, serve and hit it across the net.
          </h1>
          <p className="pl-5 text-sm italic font-bold">{data?.location}</p>
        </div>
        <ul className="grid gap-4 grid-cols-2 px-10 ...">
          <div className="flow-root ...">
            <li className="py-4 h-80 flow-root">
              <img
                className="rounded-t-lg  aspect-video ..."
                src="https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80"
                alt=""
              />
            </li>
          </div>
          <li>
            <div className="flex flex-col gap-10">
              <div className="italic rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-center flex-col">
                <p>Timing</p>
                <p>
                  Mon-Sun: {data?.from}:00 - {data?.to}:00
                </p>
              </div>
              <div className="flex italic rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-start flex-col">
                <p>Location</p>
                <p>
                  {data?.address ||
                    "District Kanchupuram, Sivagami Nagar Ext Road, MunusamiNagar,Medavakam Chennai, TamilNadu 600100"}
                </p>
                <p> {data?.location}</p>
              </div>
              <div class="italic rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-center flex-col">
                <p>
                  Sports Available. <b>{data?.sports}</b>
                </p>
                <p>Facility: {data?.facility}</p>
              </div>
            </div>
          </li>
        </ul>
        <div className="ml-16">
        <Calendar
          from={data?.from || 9}
          to={data?.to || 19}
          handleCalendar={handleCalendar}
        /></div>
         <li>
          <div className="flex flex-col gap-10">
            <div className="italic rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-center flex-col">
              <p>Price: ₹ {data?.price || "200"} per hour</p>
            </div>
          </div>
        </li>
       
        <li className="flex items-center justify-center py-12">
          <button
            onClick={() => handlePayment()}
            type="button"
            // onClick={() => router.push({ pathname: `/court/Book`, query: { user_id: userData?.data.data._id, } })}
            className="italic rounded-lg py-2.5 px-6 bg-green-500 text-white font-semibold shadow-md hover:bg-white-700 focus:outline-gray focus:ring-2 focus:ring-white-400 focus:ring-opacity-75"
          >
            Book Now
          </button>
        </li>
        <li>
          <div className="flex flex-col gap-10">
            <div className="italic rounded-lg py-2.5 px-4 bg-white-500 text-black font-semibold shadow-md flex items-center flex-col">
              <p>
                Related To Shasu Badminton Sports Medavakkam Sports Clybs in
                Medavakkam, Badminton courts in Chennai, Badminton courts in
                Chennai.
              </p>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
};

export default BookCourt;