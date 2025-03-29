import React from "react";

const Page = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-800 mt-30 z-29 mb-10">
        Login
      </h2>
      <div
        className="grid bg-white grid-cols-1 md:grid-cols-2 mx-auto w-11/12 justify-center items-center
    "
      >
        {/* Login Image Section */}
        <div className="">
          <img src="./Images/login2.jpg" alt="Login" className="" />
        </div>

        {/* Login Form Section */}
        <div className="p-8 ">
          <form action="submit" className="">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="email"
                className="text-lg font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="border border-gray-800 p-3  rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="password"
                className="text-lg font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="border border-gray-800 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="role"
                className="text-lg font-semibold text-gray-700"
              >
                Role
              </label>
              <select
                name="role"
                id="role"
                className="border border-gray-800 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              >
                <option value="Admin">Admin</option>
                <option value="Employee">Employee</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white font-semibold p-3 rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              Submit
            </button>

            <p className="mt-4 text-center text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register here
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
