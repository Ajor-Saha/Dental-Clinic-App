import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {

  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    doctorName: '',
    appointmentDate: '',
    address: '',
    diagonse: '',
    scheldule: '',
  });

  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        setloading(true);
        setError(false);
        const res = await fetch('https://dental-clinic-app.vercel.app/api/user/createAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                userRef: currentUser._id,
              }),
        })

        const data = await res.json();
        setloading (false);
        if(data.success === false) {
            setError(data.message);
        }
        setSuccess(true);
        navigate('/profile')
    } catch (error) {
        setError(error.message);
        setloading(false);
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="doctorName"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Doctor Name
          </label>
          <input
            type="text"
            id="doctorName"
            name="doctorName"
            className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="appointmentDate"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Appointment Date
          </label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="New York"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="diagonseWith"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Diagonse With
          </label>
          <input
            type="text"
            id="diagonseWith"
            name="diagonseWith"
            className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Dental Braces"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="scheldule"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Choose Your Scheldule
          </label>
          <select
            id="scheldule"
            className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            required
          >
            <option value="Choose Your Schedule" disabled>
              Choose Your Schedule
            </option>
            <option value="9 AM to 10 AM">9 AM to 10 AM</option>
            <option value="10 AM to 11 AM">10 AM to 11 AM</option>
            <option value="11 AM to 1 PM">11 AM to 1 PM</option>
            <option value="2 PM to 3 PM">2 PM to 3 PM</option>
            <option value="4 PM to 5 PM">4 PM to 5 PM</option>
          </select>
        </div>
      </div>

      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
          
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {loading ? "Loading..." : "Booking Now"}
      </button>
      { error && <p className="text-red-700 text-sm">{error}</p>}
      { success && <p className="text-red-700 text-sm">New Appointment Created</p>}

    </form>
  );
};

export default BookingForm;
