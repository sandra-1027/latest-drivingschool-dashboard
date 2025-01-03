"use client";

import { useState } from "react";
import "./driverlist.css";

const DriverList = () => {
  const [attendanceData, setAttendanceData] = useState([
    {
      id: 1,
      date: "2024-11-01",
      checkinTime: "08:30 AM",
      checkoutTime: "10:30 AM",
      driver: "adam",
    },
    {
      id: 2,
      date: "2024-11-02",
      checkinTime: "09:00 AM",
      checkoutTime: "11:00 AM",
      driver: "john",
    },
    {
      id: 3,
      date: "2024-11-03",
      checkinTime: "08:45 AM",
      checkoutTime: "10:45 AM",
      driver: "diya",
    },
  ]);

  const handlePaymentStatusChange = (id: number, newStatus: string) => {
    setAttendanceData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, paymentStatus: newStatus } : item
      )
    );
  };

  return (
    <div className="dark:bg-[#292e37] pl-4">
      <div className="flex items-center space-x-4 py-5 lg:py-6">
        <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
          Driver List
        </h2>
        <div className="hidden h-full py-1 sm:flex">
          <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
        </div>
        <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
          <li className="flex items-center space-x-2">
            <a
              className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="#"
            >
              Driver
            </a>
            <svg
              x-ignore
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li>List</li>
        </ul>
      </div>
      <div className="max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto p-4">
        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white border border-gray-200 dark:bg-[#292e37]">
            <thead>
              <tr className="bg-gray-200 text-gray-600 text-left text-sm leading-normal dark:bg-[#292e37] dark:text-[#FFFFFFCC] border-b border-gray-400">
                <th className="py-3 px-6 font-semibold">SL No</th>
                <th className="py-3 px-6 font-semibold">Date</th>
                <th className="py-3 px-6 font-semibold">Driver</th>
                <th className="py-3 px-6 font-semibold">Check-In Time</th>
                <th className="py-3 px-6 font-semibold">Check-Out Time</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm dark:text-[#FFFFFFCC]">
              {attendanceData.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">{item.date}</td>
                  <td className="py-3 px-6">{item.driver}</td>
                  <td className="py-3 px-6">{item.checkinTime}</td>
                  <td className="py-3 px-6">{item.checkoutTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DriverList;
