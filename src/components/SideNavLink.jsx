import Link from "next/link";
import React from "react";

const SideNavLink = ({
  label,
  icon,
  route,
  active = false,
  toggleSideBar
}) => {
  return (
    <li className="w-full" onClick={toggleSideBar}>
      <Link
        href={route}
        className={`${active ? "bg-background" : "bg-transparent"
          } w-full px-2 py-2.5 flex items-center gap-3 text-sm rounded-md hover:bg-background`}
      >
        <span><i className={`${icon} ri-lg`}></i></span>
        <span className="capitalize">{label}</span>
      </Link>
    </li>
  );
};

export default SideNavLink;
