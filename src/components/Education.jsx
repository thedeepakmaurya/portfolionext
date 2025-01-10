import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <section className="h-full w-full flex lg:flex-row xl:flex-row flex-col xl:gap-1 gap-5 items-center justify-center overflow-x-hidden">
      <div>
        <svg
          className="text-lightforeground hidden xl:block"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="1"
          fill="currentColor"
        >
          <rect width="200" height="1" />
        </svg>
      </div>
      <div className="w-auto h-auto flex items-center justify-center gap-2 px-4">
        <Image
          className="rounded-full border-2 border-foreground shadow-lg"
          src="/img/education/ignou.jpg"
          alt="ignou"
          width={50}
          height={50}
        />
        <div>
          <h1 className="text-nowrap">Indira Gandhi National Open University</h1>
          <h2 className="text-sm">MCA, Software Engineering</h2>
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
      <div className="w-auto h-auto flex items-center justify-center gap-2 px-4">
        <Image
          className="rounded-full border-2 border-foreground shadow-lg "
          src="/img/education/dav.jpeg"
          alt="sgwebapp"
          width={50}
          height={50}
        />
        <div>
          <h1 className="text-nowrap">Dayanand Anglo Vedic College</h1>
          <h2 className="text-sm">BSc, Computer Science</h2>
        </div>
      </div>
    </section>
  );
};

export default Education;
