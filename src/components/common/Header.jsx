import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  let activeStyle = {
    borderBottom: "2px solid #313132",
    borderRadius: "0",
  };
  const menuItems = (
    <>
      <li>
        <NavLink
          to="/feed/home"
          className="flex flex-col justify-center items-center gap-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <NavLink
            className="text-sm hidden md:block"
            to="/feed/home"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </NavLink>
      </li>
      <li>
        <NavLink to="/feed/video" className="flex flex-col justify-center items-center gap-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <NavLink
            className="text-sm hidden md:block"
            to="/feed/video"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Video
          </NavLink>
        </NavLink>
      </li>
      <li>
        <NavLink to="/feed/reels" className="flex flex-col justify-center items-center gap-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>

          <NavLink
            className="text-sm hidden md:block"
            to="/feed/reels"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Reels
          </NavLink>
        </NavLink>
      </li>
      <li>
        <NavLink to="/feed/messaging" className="flex flex-col justify-center items-center gap-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>

          <NavLink
            className="text-sm hidden md:block"
            to="/feed/messaging"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Messaging
          </NavLink>
        </NavLink>
      </li>
      <li>
        <NavLink to="/feed/notifications" className="flex flex-col justify-center items-center gap-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
            />
          </svg>

          <NavLink
            className="text-sm hidden md:block"
            to="/feed/notifications"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Notifications
          </NavLink>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white mb-8 h-16 overflow-hidden">
      <div className="w-11/12 mx-auto navbar justify-between p-0">
        <div className="">
          <Link to="/feed" className="btn btn-ghost normal-case text-xl ">
            MORE
          </Link>
          <div className="form-control hidden md:block lg:block">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered border-stone-400 h-10 bg-slate-200 placeholder-black"
            />
          </div>
        </div>
        <div className="gap-3">
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 nav-menu">{menuItems}</ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">Profile</Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              <li>
                <Link>
                  <Link to="/login" onClick={handleLogOut} className="">
                    Log Out
                  </Link>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
