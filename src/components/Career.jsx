import Image from "next/image";
import React from "react";

const Career = () => {
  return (
    <section className="h-full w-full flex flex-col lg:flex-row xl:flex-row gap-5 xl:gap-1 items-center justify-center">
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
          className="rounded-full grayscale border-2 border-lightforeground shadow-lg"
          src="/img/career/unified.jpeg"
          alt="sgwebapp"
          width={50}
          height={50}
        />
        <div>
          <h1>Unified Mentor Pvt Ltd</h1>
          <h2 className="text-sm">Web Developer</h2>
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
          className="rounded-full grayscale border-2 border-lightforeground shadow-lg "
          src="/img/career/sg.jpeg"
          alt="sgwebapp"
          width={50}
          height={50}
        />
        <div>
          <h1>SG Webapp Techniques</h1>
          <h2 className="text-sm">Web Developer</h2>
        </div>
      </div>
    </section>
  );
};

export default Career;
