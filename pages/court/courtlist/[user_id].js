import { Navbar } from "@components";
import { useEffect, useState } from "react";
import axios from "../../api/authApi";
import { useRouter } from "next/router";
import {court} from "../../../public/court.png"
const CourtList = () => {
  const router = useRouter();
  const { user_id } = router.query;
  const URL = `/${user_id}`;
  const [userData, setUserData] = useState(null);
  const [Courts, setCourtData] = useState(null);
  useEffect(() => {
      (async () => {
          if(user_id){
          const response = await axios.get(URL);
         response?.data?.data?._id && setUserData(response?.data?.data);}
      })();
  }, [user_id]);
  useEffect(() => {
      (async () => {
          const response = await axios.get("/court/list");
          response?.data?.data && setCourtData(response?.data?.data)


        })();
  }, []);
  return (
    <div className="w-full">
      <Navbar />
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg mt-3 ml-3">
        
      {Courts?.map((item) => {
                        return (
    //   <li key={item?.email} className="py-4 flow-root">
                                <div className="flow-root ..." onClick={()=> router.push({ pathname: `/court/${item.owner_id}`, query: { user_id: userData?._id }})}>
        <img
          class="w-full"
          src="/court.png"
          alt="badminton court"
        />
        <div class="px-6 pt-2">
          <p class="text-gray-700 text-base"><b>{item?.courtName}</b></p>
        </div>
        <div>
          <div class="flex justify-between items-center px-6 ">
            <div class="flex items-center">
              <span class="material-icons">location_on</span>{item?.location}
            </div>
            <span className="mx-2.5 my-2.5"><b>Non-Ac</b></span>
          </div>
          <div class="flex justify-between items-center px-6  pb-2">
            <span class="ml-2">₹ {item?.price}<b>/hour</b></span>
            <button class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white  mb-2 cursor-pointer">
              Choose
            </button>
          </div>
        </div>
        </div>
        // </li>
                        )
                    })}
        {Courts?.length === 0 && (
                         <center>  <h1>Opening soon!!</h1></center>                        
                    )}
      </div>
    </div>
  );
};

export default CourtList;