"use client"
import React from "react";
import SideNavLink from "./SideNavLink";
import data from "../../public/database/nav.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidenav = ({ children }) => {
  const { menu } = data;
  const path = usePathname();

  return (
    <div className="flex h-screen">
      {/* sidemenu */}
      <nav className="relative h-full w-72 bg-secondary">
        <ul className="w-full h-full flex flex-col gap-0.5 px-4 py-4">
          {menu.map((item, index) => (
            <SideNavLink
              key={index}
              route={item.route}
              label={item.label}
              icon={item.icon}
              active={path === item.route}
            />
          ))}
        </ul>

        <ul className="w-full absolute bottom-4 px-4">
          <li className="w-full">
            <Link className="flex items-center px-2 gap-1.5" href="/">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
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

      {/* main content */}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default Sidenav;
