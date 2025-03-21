import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  //  show password hok

  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5fGVufDB8fDB8fHww"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="w-full px-4 py-2 mb-6 text-xl text-gray-600 bg-white border-gray-300 rounded transition ease-in-out"
              placeholder="Email Address"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
            />
            <div className="relative mb-6"></div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Have an account?{" "}
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 eas-in-out"
                >
                  {" "}
                  Sign Un
                </Link>{" "}
              </p>
              <p>
                {" "}
                <Link
                  to="/sign-in"
                  className="text-blue-500 hover:text-blue-700 transition duration-200 eas-in-out"
                >
                  Sign In Instead
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-7 py-3 rounded text-sm font-medium uppercase shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-900"
            >
              Send Reset password
            </button>
            <div className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1  after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
