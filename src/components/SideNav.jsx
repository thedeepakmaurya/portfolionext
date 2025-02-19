"use client";
import React, { useEffect, useState } from "react";
import SideNavLink from "./SideNavLink";
import data from "../../public/database/nav.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidenav = ({ children }) => {
  const [home, setHome] = useState(false);
  const [social, setSocial] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { menu } = data;
  const path = usePathname();

  const currentYear = new Date().getFullYear();

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
        className={`fixed lg:relative xl:relative w-64 lg:w-64 md:w-72 xl:w-72  h-full z-30 bg-secondary transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
              toggleSideBar={() => { setIsSidebarOpen(false) }}
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
            className={`${home ? "bg-background" : "bg-transparent"
              } w-full px-2 py-2.5 rounded-md hover:bg-background`}
          >
            <Link className="flex items-center px-1 gap-2" href="/">
              <div className="w-8 h-8">
                <Image className=" object-cover rounded-full " src="/img/profile/deepakmaurya.png" alt="profile" width={100} height={100} />
              </div>
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
                  <i className="ri-linkedin-fill ri-lg"></i>
                </Link>
                <Link href="https://github.com/thedeepakmaurya" target="_blank">
                <i className="ri-github-fill ri-lg"></i>
                </Link>
              </span>
            )}
          </h1>
        </header>
        {/* main content */}
        <main className="h-full w-full p-5">{children}</main>

        <footer className="flex justify-center px-5 py-2 mb-2">
          <div className="bg-secondary rounded-full shadow-lg lg:w-[70%] xl:w-[60%] w-full py-2 px-4 ">
            <h1>{'\u00a9'} {currentYear} - <span className="text-sm">Designed by <Link href="/">Deepak Maurya</Link></span></h1>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Sidenav;
