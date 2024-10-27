import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <section className="h-full w-full flex gap-1 items-center justify-center">
      <div>
        <svg
          className="text-lightforeground"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="1"
          fill="currentColor"
        >
          <rect width="200" height="1" />
        </svg>
      </div>
      <div className="w-auto h-32 flex items-center justify-center gap-2 px-4">
        <Image
          className="rounded-full grayscale border-2 border-foreground shadow-lg"
          src="/img/parvatijainsdchool.gif"
          alt="sgwebapp"
          width={50}
          height={50}
        />
        <div>
          <h1>Sh. Paravati Jain Co. Edu. School</h1>
          <h2 className="text-sm">12th, Science</h2>
        </div>
      </div>
      <div>
        <svg
          className="text-lightforeground"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="1"
          fill="currentColor"
        >
          <rect width="200" height="1" />
        </svg>
      </div>
      <div className="w-auto h-32 flex items-center justify-center gap-2 px-4">
        <Image
          className="rounded-full grayscale border-2 border-foreground shadow-lg "
          src="/img/dav.jpeg"
          alt="sgwebapp"
          width={50}
          height={50}
        />
        <div>
          <h1>Dayanand Anglo Vedic College</h1>
          <h2 className="text-sm">BSc, Computer Science</h2>
        </div>
      </div>
    </section>
  );
};

export default Education;
