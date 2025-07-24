import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const SideBar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("events")) || [];

    const filtered = stored.filter((e) => {
      const eventDate = new Date(`${e.date}T${e.hour || "00:00"}`);
      const eventEnd = new Date(`${e.date}T${e.endTime || e.hour || "00:00"}`);

      return eventDate > now || (now >= eventDate && now <= eventEnd);
    });

    const sorted = filtered
      .sort((a, b) => new Date(`${b.date}T${b.hour}`) - new Date(`${a.date}T${a.hour}`))
      .reverse()
      .slice(0, 5);

    setEvents(sorted);
  }, [now]);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getCountdown = (dateString, hourString = "00:00") => {
    const [hh = "00", mm = "00"] = hourString.split(":");
    const dateTime = new Date(dateString);
    dateTime.setHours(hh, mm, 0, 0);

    const diff = dateTime.getTime() - now.getTime();

    if (diff <= 0) return "🎉 Happening Now";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <aside className="w-72 bg-blue-800 text-white h-screen sticky top-0 overflow-y-auto shadow-lg">
      <div className="p-4 space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">
          🌟 Daily Inspirations
        </h2>

        {/* Scripture Section */}
        <div className="bg-white p-4 rounded-xl shadow text-gray-800">
          <h3 className="text-xl font-semibold text-green-700 mb-4">📖 Imana Ibirimo! </h3>
          <div className="w-full h-52 rounded overflow-hidden mb-4">
            <img
              src="/images/BibleStudy.jpg"
              alt="Bible Study"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm">
            Ariko byose <strong>bikorwe neza</strong> uko bikwiye, no muri{" "}
            <strong>gahunda. -📖- 1 Abakorinto 14:40 </strong>{" "}
            <a
              href="https://sabbath-school.adventech.io/kin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline font-medium"
            >
           → Bible Study Guide
            </a>
            {" "} | Kin, Eng, Fra, ...
          </p>
        </div>
        
        {/* 📅 Upcoming Events Section */}
        <div className="bg-white p-4 rounded-xl shadow text-gray-800">
          <h3 className="text-xl font-semibold text-green-800 mb-4">📅 Upcoming Events</h3>

          {events.length === 0 ? (
            <p className="text-sm italic text-gray-500">No upcoming events.</p>
          ) : (
            <ul className="text-sm max-h-48 overflow-y-auto pr-1 space-y-3">
              {events.map((event, idx) => {
                const startTime = event.startTime || "00:00";
                const endTime = event.endTime || "00:00";
                const start = new Date(`${event.date}T${startTime}`);
                const end = new Date(`${event.date}T${endTime}`);
                const now = new Date();

                const isNow = now >= start && now <= end;
                const diff = start.getTime() - now.getTime();

                const countdown = isNow
                  ? "🎉 Happening Now"
                  : (() => {
                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                    const minutes = Math.floor((diff / (1000 * 60)) % 60);
                    const seconds = Math.floor((diff / 1000) % 60);
                    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
                  })();

                return (
                  <li key={idx} className="border-b border-gray-200 pb-2 mb-1 px-1">
                    {/* Line 1: Title */}
                    <p className="font-semibold text-sm truncate">{event.title}</p>

                    {/* Line 2: Date and Starting Time */}
                    <p className="text-xs text-gray-600">
                      📅 {event.date} &nbsp;&nbsp; 🕒 {startTime}
                    </p>

                    {/* Line 3: Countdown or Happening Now */}
                    <p
                      className={`text-xs ${countdown.includes("🎉")
                        ? "text-green-600 font-bold"
                        : "text-blue-700"
                        }`}
                    >
                      ⏱ {countdown}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="mt-3">
            <a
              href="/admin/AddEvent"
              className="text-blue-600 text-sm underline hover:text-blue-800"
            >
              ➕ Add Event (Admin)
            </a>
          </div>
        </div>

        {/* Life Tips Section */}
        <div className="bg-white p-4 rounded-xl shadow text-gray-800">
          <h3 className="text-xl font-semibold text-purple-700 mb-4">💡 CELEBRATIONS</h3>
          <div className="w-full h-auto rounded mb-4 flex justify-center items-center">
            <img
              src="/images/CELEBRATIONS.png"
              alt="CELEBRATIONS Health Principles"
              className="max-h-60 w-auto object-contain"
            />
          </div>
          <p className="text-sm">
            Apply 12 health principles starting from <strong>Choice</strong> to{" "}
            <strong>Service</strong> for your <strong>Life</strong>.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;