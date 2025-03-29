"use client";
import { CheckCircle, MoveRightIcon, Send } from "lucide-react";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AdminRegistration = () => {
  const [fieldOtp, setFieldOtp] = useState();
  const [otp, setOtp] = useState();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNumber: "",
    dob: "",
    address: "",
    profilePhoto: null,
  });

  const varify = (e) => {
    if (fieldOtp == otp) {
      toast.success("email Varify successfully");
    } else {
      toast.error("Otp Not Match");
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  const handleOtp = (e) => {
    setFieldOtp(e.target.value);
  };
  const handleChange = (e) => {
    // Ensure the event and target exist
    if (!e || !e.target) return;

    const { name, value, type, files } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value, // Handle file input
    }));
  };

  const sendOtp = async (email, firstName) => {
    console.log(email);
    console.log(firstName);

    try {
      const Responce = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, firstName }),
      });

      const data = await Responce.json();
      setOtp(data.otp);
      if (data.success) {
        console.log("OTP sent successfully:", data.otp);
        setOtp(data.otp);
        toast.success(`Otp Sent Successfully to you Email : ${email}`, {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        console.error("Failed to send OTP:", data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form
      className="max-w-xl mx-auto p-6 shadow-lg rounded-xl bg-white mt-30"
      onSubmit={handleSubmit}
    >
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Admin Registration</h1>

      <div className="grid gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="input py-2"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="input py-2"
        />
        <div className="flex">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input w-full py-2"
          />
          <button
            type="button"
            className="flex ml-auto items-center bg-gray-500 text-black gap-2 font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            onClick={() => sendOtp(formData.email, formData.firstName)}
          >
            OTP <Send />
          </button>
        </div>
        <div className="flex ">
          <input
            type="text"
            name="otp"
            onChange={handleOtp}
            placeholder="OTP"
            className="input"
          />
          <button
          type="button"
            className="flex ml-auto gap-1 items-center bg-green-500 text-black font-semibold py-2 px-3 rounded-md hover:bg-green-600 transition duration-300"
            onClick={() => varify()}
          >
            <CheckCircle /> Varify
          </button>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="input py-2"
        />

        <div className="flex ">
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="dob" className="flex gap-2">
            Date Of Birth <MoveRightIcon />
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="input"
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.workLocation}
          onChange={handleChange}
          className="input py-2"
        />
        <div className="flex justify-between">
          <label htmlFor="profilePhoto" className="flex items-center gap-2">
            Profile Photo <MoveRightIcon />
          </label>
          <input
            type="file"
            name="profilePhoto"
            accept="image/*"
            onChange={handleChange}
            className="border active:bg-amber-200 cursor-pointer"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default AdminRegistration;
