import ThemeBtn from "./ThemeBtn";
import { NavLink } from "react-router";

export default function NavBar() {
  const page = [
    { name: "Home", link: "/" },
    { name: "Education", link: "education" },
    { name: "Experience", link: "experience" },
    { name: "Project", link: "project" },
    { name: "Blog", link: "blog" },
  ];
  return (
    <>
      <div className="navbar bg-base-200 w-screen items-center justify-center">
        <div className="navbar bg-base-200 max-w-7xl">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {page.map((page, index) => (
                  <li key={index}>
                    <NavLink to={page.link} className="font-semibold">
                      {page.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl hidden lg:flex">Allen</a>
          </div>
          <div className="navbar-center flex lg:hidden">
            <a className="btn btn-ghost text-xl mx-auto">Allen</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {page.map((page, index) => (
                <li key={index}>
                  <NavLink to={page.link} className="font-semibold">
                    {page.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <ThemeBtn width="14" height="14" />
          </div>
        </div>
      </div>
    </>
  );
}
