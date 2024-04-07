"use client";
import Activity from "./components/activity";
import Image from "next/image";
import jerymy from "/public/images/image-jeremy.png"
import { useState } from "react";

export default function Home() {
  let [activeBtn, setActiveBtn] = useState(null);
  let [daily, setDaily] = useState(false);
  let [weekly, setWeekly] = useState(true);
  let [monthly, setMonthly] = useState(false);

  const handleDaily = () => {
     setDaily(true);
     setWeekly(false);
     setMonthly(false);
     setActiveBtn("daily")
  }
  const handleWeekly = () => {
    setDaily(false);
     setWeekly(true);
     setMonthly(false);
     setActiveBtn("weekly")
  }
  const handleMonthly = () => {
    setDaily(false);
     setWeekly(false);
     setMonthly(true);
     setActiveBtn("monthly")
  }

  return (
    <main className="md:h-4/6 ">
      <section id="profile" className="">
        <div id="profile-info" className="flex items-center bg-violet-800 p-6 rounded-lg ">
           <div className="mr-3 bg-white flex justify-center items-center p-1 rounded-full md:mb-3">
            <Image src={jerymy} alt="profile-pics" width={50} height={50} />
           </div>
           <div >
            <h1 className="opacity-75 md:pt-1 md:mb-4">
              <span className="opacity-60 text-sm ">Report for</span> <br /> 
              <span className=" text-lg md:text-3xl">Jeremy Robson</span>
            </h1>
           </div>
        </div>

        <ul className="md:flex md:flex-col md:items-start md:justify-start">
          <li
            className={activeBtn === "daily" ? "opacity-100" : "opacity-60"}
            onClick={handleDaily} >
            Daily
          </li>

          <li
            className={activeBtn === "weekly" ? "opacity-100" : "opacity-60"}
            onClick={handleWeekly}>
            Weekly
          </li>

          <li
            className={activeBtn === "monthly" ? "opacity-100" : "opacity-60"}
            onClick={handleMonthly}>
            Monthly
          </li>
        </ul>
      </section>

      <Activity daily={daily} weekly={weekly} monthly={monthly} />
    </main>
  );
}
