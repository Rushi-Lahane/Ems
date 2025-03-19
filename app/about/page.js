"use client";
import Link from "next/link";
import { Briefcase, Users, ShieldCheck, Lightbulb } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      mirror: true,  
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section
        className="relative bg-[url('/Images/teamWork.webp')] bg-cover bg-center text-white"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#09122C] via-[#27391C] to-[#27445D] opacity-90"></div>
        <div className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl opacity-90">
            Empowering organizations with seamless employee management solutions.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">
          Who We Are
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto" data-aos="fade-up">
          We are a passionate team dedicated to providing modern, efficient, and
          secure employee management solutions. Our platform is designed to
          simplify workforce management, ensuring smooth operations and enhanced
          productivity.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {[
            {
              title: "Our Mission",
              desc: "To simplify employee management and improve operational efficiency for businesses of all sizes.",
              icon: <Briefcase size={50} className="text-blue-600 mb-4" />,
            },
            {
              title: "Our Vision",
              desc: "To become the leading employee management platform, driving innovation and excellence in HR solutions.",
              icon: <Lightbulb size={50} className="text-yellow-500 mb-4" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-xl rounded-xl text-center hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold text-blue-900 mb-10"
            data-aos="fade-up"
          >
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                desc: "We uphold transparency and honesty in all our interactions.",
                icon: <ShieldCheck size={50} className="text-green-600 mb-4" />,
              },
              {
                title: "Innovation",
                desc: "We continuously innovate to provide cutting-edge solutions.",
                icon: <Lightbulb size={50} className="text-yellow-500 mb-4" />,
              },
              {
                title: "Teamwork",
                desc: "Collaboration is at the heart of our success.",
                icon: <Users size={50} className="text-blue-600 mb-4" />,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition-transform duration-300"
                data-aos="flip-left"
              >
                {value.icon}
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">Join Us on Our Journey</h2>
        <p className="text-lg mb-6">
          Be a part of our mission to revolutionize employee management.
        </p>
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
