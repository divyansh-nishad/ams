'use client';

import React, { useState, useEffect } from 'react';
import Navbar from "@/components/navbar";

export default function Home() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setCurrentDate(formattedDate);
  }, []);

  const handleCheckIn = () => {
    const now = new Date();

    // Format the date as DD/MM/YY
    const date = now.toLocaleDateString('en-GB');  // 'en-GB' gives the DD/MM/YYYY format

    // Format the time as HH:MM:SS AM/PM
    const time = now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });

    setCheckInTime({ time, date });
    setIsCheckedIn(true);
  };

  const handleCheckOut = () => {
    alert('Checked out successfully!');
    setIsCheckedIn(false);
    setCheckInTime(null);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen text-black px-8 py-6">
        <div className="max-w-3xl mx-auto text-center mt-10">
          <h1 className="text-3xl font-bold mb-4">AMS - Connect</h1>
          <p className="text-lg font-bolder mb-6">{currentDate}</p>

          {!isCheckedIn ? (
            <button
              onClick={handleCheckIn}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-6 rounded"
            >
              Mark Attendance
            </button>
          ) : (
            <div className="space-y-4">
              <button
                disabled
                className="bg-gray-400 text-white font-semibold py-2 px-6 rounded cursor-not-allowed"
              >
                Checked In
              </button>

              {/* Check-in info box with border and centered */}
              <div className="w-1/2 bg-white mx-auto p-4 rounded-md">
                <div className="p-2">
                  Checked-In Time
                </div>
                  <div className="border border-black p-2 rounded-md">
                    <strong>{checkInTime?.date}</strong> <strong>{checkInTime?.time}</strong>
                  </div>
              </div>

              <button
                onClick={handleCheckOut}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded"
              >
                Check Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
