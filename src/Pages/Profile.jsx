import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { FaCar } from "react-icons/fa";

export default function Profile() {
  const navigate = useNavigate();
  const [changeDetail, setChageDetail] = useState(false);
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const handleLogOut = () => {
    auth.signOut();
    navigate("/");
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        // update the disply name, in firebase, authentication
        await updateProfile(auth.currentUser, { displayName: name });
        // update name in the firestor,
        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name: name,
        });
      }
      toast.success("Profile successfully updated");
    } catch (error) {
      toast.error("could not update profile details");
    }
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h3 className="text-3xl text-center mt-6 font-bold">My Profile </h3>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form action="">
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetail}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetail && "bg-red-100 focus:bg-red-200"
              }`}
              onChange={onChange}
            />
            <input
              type="text"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />
            <div className="flex justify-between  whitespace-nowrap text-sm sm:text-lg mb-6 ">
              <p className="flex items-center ">
                Do you want to change your name?{" "}
                <span
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChageDetail((prevState) => !prevState);
                  }}
                  className={`text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer `}
                >
                  {changeDetail ? "Apply Change" : "Edit"}
                  {/* Edit */}
                </span>
              </p>
              <p
                onClick={handleLogOut}
                className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign Out
              </p>
            </div>
          </form>
          <button
            type="submit"
            className=" w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duraction-150 ease-in-out hover:shadow-lg active:bg-blue-800  cursor-pointer  flex"
          >
            <Link
              to="/create-listing"
              className="flex gap-2 items-center justify-center mx-auto"
            >
              <FaCar className="mr-2 text-3xl p-1 " /> SELL OR RENT YOUR CAR
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
