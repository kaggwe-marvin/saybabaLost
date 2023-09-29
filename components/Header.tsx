import React from "react";
import Link from "next/link";
import Search from "./Search";

function Header() {
  return (
    <>
      <header className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href="#">Homepage</Link>
              </li>
              <li>
                <Link href="#">Advanced Search</Link>
              </li>
              <li>
                <Link href="#">Support</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-none gap-2">
          <Search />
        </div>
      </header>
    </>
  );
}

export default Header;
