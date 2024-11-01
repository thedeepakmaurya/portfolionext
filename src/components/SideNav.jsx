"use client";
import React, { useEffect, useState } from "react";
import SideNavLink from "./SideNavLink";
import data from "../../public/database/nav.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidenav = ({ children }) => {
  const [home, setHome] = useState(false);
  const [social, setSocial] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { menu } = data;
  const path = usePathname();

  function socialVisible() {
    if (path === "/") {
      setSocial(false);
    } else {
      setSocial(true);
    }
  }

  function pageTitle() {
    if (path === "/career") {
      return "Career";
    } else if (path === "/tech-stack") {
      return "Tech Stack";
    } else if (path === "/projects") {
      return "Projects";
    } else if (path === "/certifications") {
      return "Certifications";
    } else if (path === "/education") {
      return "Education";
    } else {
      return "Profile";
    }
  }

  function checkHome() {
    if (path === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }

  useEffect(() => {
    checkHome();
    socialVisible();
  }, [path]);

  return (
    <div className="flex h-screen">
      {/* sidemenu */}
      <nav
        className={`fixed lg:relative xl:relative w-64 lg:w-64 md:w-72 xl:w-72  h-full z-30 bg-secondary transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 xl:translate-x-0`}
      >
        <ul className="w-full h-full flex flex-col gap-0.5 px-4 py-4">
          {menu.map((item, index) => (
            <SideNavLink
              key={index}
              route={item.route}
              label={item.label}
              icon={item.icon}
              active={path === item.route}
              toggleSideBar = {() => {setIsSidebarOpen(false)}}
            />
          ))}
        </ul>

        <ul
          onClick={() => {
            checkHome();
            setIsSidebarOpen(false);
          }}
          className="w-full absolute bottom-4 px-4"
        >
          <li
            className={`${
              home ? "bg-background" : "bg-transparent"
            } w-full px-2 py-2.5 rounded-md hover:bg-background`}
          >
            <Link className="flex items-center px-2 gap-1.5" href="/">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08C16.71 17.72 14.5 19 12 19z" />
                </svg>
              </span>
              <span className="flex flex-col text-sm">
                Deepak Maurya
                <span className="text-xs">Web Developer, UI Developer</span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden backdrop-blur-[2px]"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div className="flex flex-col overflow-y-auto flex-1 max-w-[100vw]">
        <header className="sticky top-0 px-5 py-2 z-10">
          <h1 className="flex justify-between">
            <div className="flex items-center gap-2">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <svg
                  className="xl:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <rect y="5" width="20" height="1" rx="1" />
                  <rect y="11" width="20" height="1" rx="1" />
                  <rect y="17" width="20" height="1" rx="1" />
                </svg>
              </button>
              {pageTitle()}
            </div>
            {social && (
              <span className="flex gap-2 items-center">
                <Link
                  href="https://linkedin.com/in/thedeepakmaurya"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="currentColor"
                  >
                    <path d="M6.94 8h2.5v8h-2.5V8zM8.2 6.4c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4-1.4.6-1.4 1.4.6 1.4 1.4 1.4zM10.9 8h2.3v1.1c.4-.6 1.1-1.1 2.2-1.1 1.8 0 2.9 1.1 2.9 3.3V16h-2.5v-4.1c0-1-.4-1.8-1.3-1.8s-1.6.8-1.6 1.8V16h-2.5V8z" />
                  </svg>
                </Link>
                <Link href="https://github.com/thedeepakmaurya" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.39 7.86 10.9.57.1.78-.25.78-.55v-2c-3.21.7-3.88-1.4-3.88-1.4-.52-1.3-1.28-1.64-1.28-1.64-1.05-.7.08-.68.08-.68 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.71 1.26 3.38.97.1-.75.41-1.26.74-1.55-2.56-.29-5.25-1.28-5.25-5.73 0-1.27.45-2.32 1.2-3.14-.12-.3-.52-1.5.11-3.13 0 0 .97-.3 3.2 1.2a11.1 11.1 0 0 1 5.8 0c2.24-1.5 3.2-1.2 3.2-1.2.63 1.63.24 2.83.12 3.13.75.82 1.2 1.87 1.2 3.14 0 4.46-2.7 5.43-5.27 5.72.42.36.8 1.07.8 2.15v3.18c0 .3.2.65.78.54A10.94 10.94 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                </Link>
              </span>
            )}
          </h1>
        </header>
        {/* main content */}
        <main className="h-full w-full p-5">{children}</main>

        <footer className="flex justify-center px-5 py-2 mb-2">
          <div className="bg-secondary rounded-full shadow-lg lg:w-[70%] xl:w-[60%] w-full py-2 px-4 ">
            <h1>{'\u00a9'} 2024 - <span className="text-sm">Designed by <Link href="/">Deepak Maurya</Link></span></h1>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Sidenav;
