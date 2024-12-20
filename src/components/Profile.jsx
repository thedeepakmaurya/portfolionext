import Image from "next/image";
import Link from "next/link";
import React from "react";

const profile = () => {

  return (
    <section className="h-full w-full flex flex-col items-center justify-center">
      <Image
        className="border-2 border-foreground rounded-full shadow-lg grayscale xl:mb-0 mb-2"
        src="/img/profile/profile.jpg"
        alt="profile"
        width={80}
        height={80}
      />
      <div className="flex items-center gap-1 mb-1">
        <h1 className="text-xl">Deepak Maurya</h1>
        <Link href="https://linkedin.com/in/thedeepakmaurya" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="currentColor"
          >
            <path d="M6.94 8h2.5v8h-2.5V8zM8.2 6.4c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4-1.4.6-1.4 1.4.6 1.4 1.4 1.4zM10.9 8h2.3v1.1c.4-.6 1.1-1.1 2.2-1.1 1.8 0 2.9 1.1 2.9 3.3V16h-2.5v-4.1c0-1-.4-1.8-1.3-1.8s-1.6.8-1.6 1.8V16h-2.5V8z" />
          </svg>
        </Link>
        /
        <Link href="https://github.com/thedeepakmaurya" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="currentColor"
          >
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.39 7.86 10.9.57.1.78-.25.78-.55v-2c-3.21.7-3.88-1.4-3.88-1.4-.52-1.3-1.28-1.64-1.28-1.64-1.05-.7.08-.68.08-.68 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.71 1.26 3.38.97.1-.75.41-1.26.74-1.55-2.56-.29-5.25-1.28-5.25-5.73 0-1.27.45-2.32 1.2-3.14-.12-.3-.52-1.5.11-3.13 0 0 .97-.3 3.2 1.2a11.1 11.1 0 0 1 5.8 0c2.24-1.5 3.2-1.2 3.2-1.2.63 1.63.24 2.83.12 3.13.75.82 1.2 1.87 1.2 3.14 0 4.46-2.7 5.43-5.27 5.72.42.36.8 1.07.8 2.15v3.18c0 .3.2.65.78.54A10.94 10.94 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
          </svg>
        </Link>
        /
        <Link href="https://discord.com/users/deepakstack" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="currentColor"
          >
            <path d="M20.22 4.02C18.42 3.28 16.47 2.79 14.47 2.57a.17.17 0 0 0-.18.1c-.38.67-.81 1.54-1.1 2.23a11.76 11.76 0 0 0-3.38 0 11.24 11.24 0 0 0-1.12-2.23.18.18 0 0 0-.18-.1c-2 .22-3.94.71-5.75 1.46a.16.16 0 0 0-.08.07C.42 9.19-.33 14.2.1 19.14c0 .08.06.14.13.17 2.4 1.1 4.72 1.8 7.03 2.25a.18.18 0 0 0 .19-.1 8.32 8.32 0 0 0 .77-1.54.16.16 0 0 0-.1-.21 13.06 13.06 0 0 1-1.88-.86.16.16 0 0 1-.02-.27c.13-.1.26-.2.38-.3a.17.17 0 0 1 .18-.01c3.98 1.83 8.3 1.83 12.24 0a.17.17 0 0 1 .18.02c.13.1.25.2.38.3a.16.16 0 0 1-.01.27c-.6.33-1.23.6-1.87.85a.16.16 0 0 0-.11.2c.2.53.47 1.05.77 1.54a.17.17 0 0 0 .19.1c2.32-.45 4.64-1.16 7.03-2.25.08-.03.13-.1.13-.17.5-5.04-.33-10.06-2.94-14.99a.16.16 0 0 0-.08-.07zm-11.7 10c-.98 0-1.8-.9-1.8-2s.8-2 1.8-2c1 0 1.8.9 1.8 2s-.8 2-1.8 2zm7.04 0c-.98 0-1.8-.9-1.8-2s.8-2 1.8-2c1 0 1.8.9 1.8 2s-.8 2-1.8 2z" />
          </svg>
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
