import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign In");
      }
    });
  }, [auth]);

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex flex-col  md:flex-row justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <div
            className="text-center cursor-pointer "
            onClick={() => navigate("/")}
          >
            <span className="text-orange-800 text-3xl font-bold font-logo tracking-wide">
              Pacha -
            </span>
            <span className="text-gray-700 text-3xl font-bold font-logo tracking-wide">
              Khan
            </span>
          </div>

          {/* <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          /> */}
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3  text-sm font-semibold border-b-[3px]  ${
                pathMatchRoute("/")
                  ? "text-black border-b-red-500  "
                  : "text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className={`cursor-pointer py-3  text-sm font-semibold border-b-[3px]  ${
                pathMatchRoute("/offers")
                  ? "text-black border-b-red-500 "
                  : "text-gray-400 border-b-transparent"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3  text-sm font-semibold border-b-[3px]  ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500 "
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
