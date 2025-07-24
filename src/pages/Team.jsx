import React from "react";
import Header from "../components/Header";

const Team = () => {
  const staff = [
    {
      name: "Esperance Tumukunde",
      role: "Event Catering & Coordinator",
      address: "Musanze",
      phone: "+250 788 23 68 26",
      image: "/images/Tumukunde.jpg",
    },
    {
      name: "Antoinnette Mwiza",
      role: "Event Clothes & Decoration Services",
      address: "Kigali",
      phone: "+250 788 62 98 69",
      image: "/images/Mwiza.jpg",
    },
    {
      name: "Prestige Service Team",
      role: "Protocol and Serving Quests",
      address: "Kigali-Musanze",
      phone: "+250 788 67 40 90",
      image: "/images/P&STeamLogo.jpeg",
    },

    {
      name: "Justine Uwamahoro",
      role: "Phone Accessories & Maintenance Services",
      role1: "Event Clothes & Decoration Services",
      address: "Rubavu-Bigogwe",
      phone: "+250 788 46 37 35",
      image: "/images/Mugeni.jpg",
    },
    {
      name: "Janvier Sembonankira",
      role: "IT Support Engineer & Trainer",
      role1: "Event Bridge Founder",
      address: "Kigali",
      phone: "+250 783 888 272",
      image: "/images/Janvier.jpg",
    },
    {
      name: "Jonathan Niyonkuru",
      role: "Swift Cars Renting Director",
      address: "Kigali",
      phone: "+250 78 21 64 220",
      image: "/images/Jonathan.jpg",
    },
  ];

  return (
    <div className="space-y-12 p-6 max-w-7xl mx-auto">
      {/* Staff Section */}
      <section id="staff">
        <h2 className="text-2xl text-blue-600 font-bold mb-4 text-center">👥 Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {staff.length > 0 ? (
            staff.map((member, i) => (
              <div
                key={i}
                className="bg-white text-center p-4 rounded-lg shadow hover:shadow-md transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-3"
                />
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                {member.role1 && <p className="text-sm text-gray-600">{member.role1}</p>}
                <p className="text-sm text-blue-600">{member.address}</p>
                <p className="text-sm text-green-600">{member.phone}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No staff members available yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Team;