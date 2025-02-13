import Image from "next/image";
import React from "react";
import data from "../../public/database/nav.json";

const Certificates = () => {
  const { certificates } = data;

  return (
    <section className="h-full w-ful flex flex-col items-center justify-center">
      <div className="pb-10">
      <i className="ri-medal-2-fill ri-3x"></i>
      </div>

      <div className=" w-full flex lg:flex-row xl:flex-row flex-col gap-10 items-center justify-center">
        {certificates.map((certificate, index) => (
          <div key={index} className=" flex flex-col  justify-center gap-2 border border-1 border-lightforeground p-4 h-32 xl:w-44 w-full rounded-lg px-4">
            <Image
              className="rounded-full h-8 w-8 border-2 border-lightforeground shadow-lg"
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
