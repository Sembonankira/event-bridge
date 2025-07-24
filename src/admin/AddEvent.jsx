import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const [event, setEvent] = useState({ title: "", date: "", startTime: "", endTime: "" });
  const [events, setEvents] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [now, setNow] = useState(new Date());
  const navigate = useNavigate();

  const correctAnswers = ["Mugeni@1", "Laurent@1", "Janvier@1"];

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getStatus = (start, end) => {
    const startTime = new Date(`${start}T${end}`);
    const endTime = new Date(`${start}T${event.endTime}`);
    if (now >= startTime && now <= endTime) return "🎉 Happening Now";
    return getCountdown(start, end);
  };

  const getCountdown = (dateString, hourString = "00:00") => {
    const [hh = "00", mm = "00"] = (hourString || "00:00").split(":");
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

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("events")) || [];
    const filtered = saved.filter((e) => new Date(`${e.date}T${e.endTime}`).getTime() >= new Date().getTime());
    setEvents(filtered);
    localStorage.setItem("events", JSON.stringify(filtered));
  }, []);

  const saveEvents = (updated) => {
    localStorage.setItem("events", JSON.stringify(updated));
    setEvents(updated);
  };

  const handleAuth = () => {
    const input = securityAnswer.trim().toLowerCase();
    const isCorrect = correctAnswers.some(answer => answer.toLowerCase() === input);

    if (isCorrect) {
      setAuthenticated(true);
    } else {

      window.alert("❌ Incorrect Password. Access denied.");
      return;
    }
  };


  const handleAddEvent = () => {
    if (!event.title || !event.date || !event.startTime || !event.endTime) return alert("Fill all fields");
    const updated = [...events, event];
    saveEvents(updated);
    setEvent({ title: "", date: "", startTime: "", endTime: "" });
  };

  const handleDelete = (index) => {
    const updated = events.filter((_, i) => i !== index);
    saveEvents(updated);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEvent(events[index]);
  };

  const handleUpdate = () => {
    if (!event.title || !event.date || !event.startTime || !event.endTime) return alert("Fill all fields");
    const updated = [...events];
    updated[editingIndex] = event;
    saveEvents(updated);
    setEvent({ title: "", date: "", startTime: "", endTime: "" });
    setEditingIndex(null);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100">
        <div className="p-8 w-full max-w-md bg-white border border-gray-300 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-center text-green-700">🔐 Admin Password</h2>
          <p className="text-sm text-gray-700 mb-2">
            If you don't know it, click {" "}
            <span
              onClick={() => navigate("/")}
              className="text-blue-600 underline hover:text-blue-800 cursor-pointer font-medium"
            >
              here
            </span>
            {" "}and go back!
          </p>
          <input
            type="password"
            placeholder="Type Password Here"
            className="border w-full p-2 mb-4 rounded focus:ring-2 focus:ring-green-400"
            value={securityAnswer}
            onChange={(e) => setSecurityAnswer(e.target.value)}
          />
          <button
            className="bg-green-600 text-white px-4 py-2 w-full rounded hover:bg-green-700"
            onClick={handleAuth}
          >
            ✅ Unlock Admin Panel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-lime-100 p-6">
      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-6">
        <button
          onClick={() => navigate("/")}
          className="mb-6 inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded shadow"
        >
          🔙 Back to Bridge
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center text-emerald-800">🗓️ Add or Edit Events</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <input
            type="text"
            placeholder="Event Title"
            className="border p-2 rounded w-full"
            value={event.title}
            onChange={(e) => setEvent({ ...event, title: e.target.value })}
          />
          <input
            type="date"
            className="border p-2 rounded w-full"
            value={event.date}
            onChange={(e) => setEvent({ ...event, date: e.target.value })}
          />
          <input
            type="time"
            className="border p-2 rounded w-full"
            value={event.startTime}
            onChange={(e) => setEvent({ ...event, startTime: e.target.value })}
          />
          <input
            type="time"
            className="border p-2 rounded w-full"
            value={event.endTime}
            onChange={(e) => setEvent({ ...event, endTime: e.target.value })}
          />
        </div>

        <div className="mb-6">
          {editingIndex !== null ? (
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full"
              onClick={handleUpdate}
            >
              ✏️ Update Event
            </button>
          ) : (
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
              onClick={handleAddEvent}
            >
              ➕ Add Event
            </button>
          )}
        </div>

        <h3 className="text-xl font-semibold mb-3 text-gray-800">📋 Your Events</h3>
        {events.length === 0 ? (
          <p className="text-sm text-gray-500 italic">No events yet.</p>
        ) : (
          <ul className="space-y-3">
            {events.map((e, idx) => (
              <li
                key={idx}
                className="flex flex-col md:flex-row md:items-center justify-between border rounded p-4 bg-gray-50 hover:bg-gray-100"
              >
                <div>
                  <p className="font-semibold text-lg">{e.title}</p>
                  <p className="text-sm text-gray-600">🗓 {e.date} | ⏰ {e.startTime} - {e.endTime}</p>
                  <p className="text-sm text-blue-600">⏱ {getStatus(e.date, e.startTime)}</p>
                </div>
                <div className="space-x-2 mt-2 md:mt-0">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
                    onClick={() => handleEdit(idx)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                    onClick={() => handleDelete(idx)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddEvent;