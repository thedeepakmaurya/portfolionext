import Image from "next/image";
import Link from "next/link";
import React from "react";

const profile = () => {

  return (
    <section className="h-full w-full flex flex-col items-center justify-center">
      <Image
        className="border-2 border-foreground rounded-full shadow-lg xl:mb-0 mb-2"
        src="/img/profile/deepakmaurya.png"
        alt="profile"
        width={80}
        height={80}
      />
      <div className="flex items-center gap-1 mb-1">
        <h1 className="text-xl">Deepak Maurya</h1>
        <Link href="https://linkedin.com/in/thedeepakmaurya" target="_blank">
          <i className="ri-linkedin-fill"></i>
        </Link>
        /
        <Link href="https://github.com/thedeepakmaurya" target="_blank">
          <i className="ri-github-fill"></i>
        </Link>
        /
        <Link href="https://discord.com/users/deepakstack" target="_blank">
          <i className="ri-discord-fill"></i>
        </Link>
      </div>
      <h2 className="text-sm text-center xl:w-[65%] w-full">
        Passionate React.js developer crafting dynamic user experiences with
        seamless performance. I thrive on turning complex problems into elegant,
        intuitive solutions.
      </h2>
    </section>
  );
};

export default profile;
