import { Navbar } from "@components";
import { useEffect, useState } from "react";
import axios from "../../api/authApi";
import { useRouter } from "next/router";
const CourtList = () => {
  const router = useRouter();
  const { user_id } = router.query;
  const URL = `/${user_id}`;
  const intialValues = { location: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [userData, setUserData] = useState(null);
  const [Courts, setCourtData] = useState(null);
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    const response = await axios.get(`/court/location/${formValues.location}`);
    setCourtData(response.data.data)
  }
  useEffect(() => {
    (async () => {
      if (user_id) {
        const response = await axios.get(URL);
        response?.data?.data?._id && setUserData(response?.data?.data);
      }
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
      <div>

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
              name="location"
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {Courts?.map((item) => {
          return (
              <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/court.png" alt="badminton" />
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
                    <button onClick={() => router.push({ pathname: `/court/${item.owner_id}`, query: { user_id: userData?._id } })} class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white  mb-2 cursor-pointer">
                      Choose
                    </button>
                  </div>
                </div>
              </div>
          )
        })}
        </div>
        {Courts?.length === 0 && (
          <center>  <h1>Opening soon!!</h1></center>
        )}
      </div>
    </div >
  );
};

export default CourtList;