import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const AppointList = () => {
  const [appointments, setAppointments] = useState([]);
  const { currentUser, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const res = await fetch(`/api/user/getAppointments?userRef=${currentUser._id}`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // You may include additional headers as needed, such as authentication headers
            },
          });

          if (!res.ok) {
            throw new Error('Failed to fetch appointments');
          }
  
          const data = await res.json();
          setAppointments(data); // Update state with fetched appointments
  
      } catch (error) {
        console.error("Error fetching appointments:", error.message);
      }
    };
    getAppointments();
  }, [currentUser]);

  return (
    <div className="py-20">
      <h1 className="text-center text-2xl font-semibold">Your Bookings</h1>
      <div className="flex flex-wrap p-5 bg-slate-100 gap-3 justify-evenly">
        { appointments.map(appointment => (
            <Card appointment={appointment} key={appointment._id}/>
        ))}
      </div>
    </div>
  );
};

export default AppointList;
