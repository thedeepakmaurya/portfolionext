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
            <div className="w-auto h-auto flex items-center justify-end gap-3 xl:px-4 px-2">
              <div>
                <h1 className="text-right">{project.title}</h1>
                <h2 className="text-sm text-right">{project.description}</h2>
                <div className="flex justify-end gap-2">
                  <i className="bx bxl-javascript bx-xs"></i>
                  <i className="bx bxl-react bx-xs"></i>
                  <i className="bx bxl-tailwind-css bx-xs"></i>
                </div>
              </div>
              <Image
                className="rounded-full border-2 border-foreground shadow-lg object-cover "
                src={project.image}
                alt="project image"
                width={40}
                height={40}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
