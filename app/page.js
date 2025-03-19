"use client";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { User, Clock, DollarSign, CalendarDays, ChartNoAxesCombined, ScanEye, Repeat } from "lucide-react";

export default function Home() {
  const feature = [
    { title: "Employee Database", desc: "Store and manage employee records.", icon: <User className="text-4xl mb-4" />, animation: "fade-right" },
    { title: "Attendance Tracking", desc: "Monitor employee attendance.", icon: <Clock className="text-4xl mb-4" />, animation: "fade-left" },
    { title: "Payroll Management", desc: "Automate salary calculations.", icon: <DollarSign className="text-4xl mb-4" />, animation: "zoom-in" },
    { title: "Leave Management", desc: "Simplify leave requests.", icon: <CalendarDays className="text-4xl mb-4" />, animation: "zoom-in" },
    { title: "Performance Tracking", desc: "Evaluate employee performance.", icon: <ChartNoAxesCombined className="text-4xl mb-4" />, animation: "flip-left" },
    { title: "Role-Based Access", desc: "Restrict access based on roles.", icon: <ScanEye className="text-4xl mb-4" />, animation: "flip-right" }
  ]
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
      });
    }
  }, []);

  return (
    <>
      <main className="bg-gray-100">
        {/* Hero Section */}
        <section className="relative bg-[url('/Images/teamWork.webp')] bg-cover bg-center text-white">
          <div className="absolute inset-0 backdrop-blur-lg bg-gradient-to-r from-[#09122C] via-[#27391C] to-[#27445D] opacity-90"></div>
          <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Welcome to Employee Management System
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl opacity-90">
              Manage your workforce efficiently with our modern EMS.
            </p>
            <div className="flex space-x-4" data-aos="zoom-in">
              <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/login" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Login
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto py-20 px-6 text-black">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {
              feature.map((feature, index) => (
                <div key={index} className="bg-white p-8 shadow-xl rounded-xl text-center hover:bg-gray-300 hover:scale-105 transition-transform duration-300" data-aos={feature.animation}>
                  {feature.icon}
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-lg">{feature.desc}</p>
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
