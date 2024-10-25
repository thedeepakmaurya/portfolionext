import Link from "next/link";
import React from "react";

const SideNavLink = ({
  label,
  icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08C16.71 17.72 14.5 19 12 19z" />
    </svg>
  ),
  route,
  active = false,
}) => {
  return (
    <li className="w-full">
      <Link
        href={route}
        className={`${
          active ? "bg-[#3C3D37]" : "bg-transparent"
        } w-full px-2 py-2.5 flex items-center gap-1.5 text-sm rounded-md hover:bg-[#3C3D37]`}
      >
        <span dangerouslySetInnerHTML={{ __html: icon }} />
        <span className="capitalize">{label}</span>
      </Link>
    </li>
  );
};

export default SideNavLink;
