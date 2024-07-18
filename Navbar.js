import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../authcontext/Authcontext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between py-5 px-10">
  <div>
    <Link to="/"><h3 className="text-lg font-bold text-red-500">DineEase</h3></Link>
  </div>
  <div className="flex">
    {user ? (
      <div className="flex gap-4 items-center">
        <div className="mt-1">
          <p>
            Welcome{" "}
            <span className="text-lg font-semibold">{user.name}!</span>
          </p>
        </div>
        <div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 transition-colors duration-300 ease-in-out"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    ) : (
      <Link to="/login">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 transition-colors duration-300 ease-in-out">
          Login
        </button>
      </Link>
    )}
  </div>
</div>

  );
}
