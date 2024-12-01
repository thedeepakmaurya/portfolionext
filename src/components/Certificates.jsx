import Image from "next/image";
import React from "react";
import data from "../../public/database/nav.json";

const Certificates = () => {
  const { certificates } = data;

  return (
    <section className="h-full w-ful flex flex-col items-center justify-center">
      <div className="pb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="50"
          height="50"
          fill="currentColor"
        >
          <path d="M12 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 16c1.57 0 3.09.36 4.42 1.04l.46.24c.57.3.82 1 .52 1.57-.3.56-.99.8-1.55.53l-1.01-.47a8.06 8.06 0 0 1-7.66 0l-1.01.47a1.13 1.13 0 0 1-1.55-.53c-.3-.57-.05-1.27.52-1.57l.46-.24A8.05 8.05 0 0 1 12 18z" />

          <path d="M14.5 11l1.12-2.44 2.44-1.12-2.44-1.12L14.5 4.5l-1.12 2.44-2.44 1.12 2.44 1.12L14.5 11z" />
        </svg>
      </div>

      <div className=" w-full flex lg:flex-row xl:flex-row flex-col gap-10 items-center justify-center">
        {certificates.map((certificate, index) => (
          <div key={index} className=" flex flex-col  justify-center gap-2 border border-1 border-lightforeground p-4 h-32 xl:w-44 w-full rounded-lg px-4">
            <Image
              className="rounded-full h-8 w-8 grayscale border-2 border-lightforeground shadow-lg"
              src={certificate.img}
              alt="certificates"
              width={50}
              height={50}
            />
            <div>
              <h1>{certificate.institute}</h1>
              <h2 className="text-sm">{certificate.course}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
