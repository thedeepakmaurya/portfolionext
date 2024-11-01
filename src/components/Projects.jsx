import Image from "next/image";
import React from "react";
import data from "../../public/database/nav.json";
import Link from "next/link";

const Projects = () => {
  const { projects } = data;

  return (
    <section className="flex items-center justify-center width-full h-full">
      <div className="lg:w-[70%] xl:w-[60%] w-full h-auto flex flex-col gap-6 bg-secondary rounded-md px-4 py-10 shadow-lg">
        {projects.map((project, index) => (
          <Link href={project.link} key={index} target="_blank">
            <div className="w-auto h-auto flex items-center justify-start gap-2 xl:px-4 px-2">
              <Image
                className="rounded-full grayscale border-2 border-foreground shadow-lg object-cover "
                src={project.image}
                alt="project image"
                width={40}
                height={40}
              />
              <div>
                <h1>{project.title}</h1>
                <h2 className="text-sm">{project.description}</h2>
                <div className="flex gap-2">
                  <i className="bx bxl-javascript bx-xs"></i>
                  <i className="bx bxl-react bx-xs"></i>
                  <i className="bx bxl-tailwind-css bx-xs"></i>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
