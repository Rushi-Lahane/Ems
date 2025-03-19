"use client";
import React from "react";

function Page() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Add your public access key here
        formData.append("access_key", "99d02f26-11bb-4eb5-bfdd-795d4d313c00");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            event.target.reset();
        } else {
            console.error("Error", res);
        }
    };

    return (
        <div className="container mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <p className="text-lg mb-6 text-center max-w-2xl mx-auto">
                We’re here to help! If you have any questions, feedback, or need assistance, please fill out the form below or reach out to us directly.
            </p>

            {/* Contact Form */}
            <form onSubmit={onSubmit} className="bg-white p-8 shadow-xl rounded-lg max-w-lg mx-auto mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                        name="message"
                        rows="4"
                        required
                        className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                    Submit Form
                </button>
            </form>

            {/* Additional Contact Information */}
            <div className="bg-white p-8 shadow-xl rounded-lg max-w-lg mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-lg mb-2">📧 Email: <a href="mailto:rushilahane79@gmail.com" className="text-blue-600 underline">support@ems.com</a></p>
                <p className="text-lg mb-2">📞 Phone: <a href="tel:+91 9860483122" className="text-blue-600 underline">+91 9860483122</a></p>
                <p className="text-lg mb-2">🏢 Address: ch. Sambhajinagar , Maharashtra</p>
                <p className="text-lg mb-2">🕒 Business Hours: Mon-Fri, 9 AM - 5 PM</p>
                <p className="text-lg mb-2">🌐 Website: <a href="https://www.ems.com" className="text-blue-600 underline">www.ems.com</a></p>
            </div>
        </div>
    );
}

export default Page;