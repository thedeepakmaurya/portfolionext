import React from "react";

const TechStack = () => {
  return (
    <section className="h-full flex flex-col justify-center">
      <div className="xl:px-14 px-1">
        <h2 className="float-right xl:w-[70%] w-[82%] bg-secondary p-4 rounded-lg text-sm shadow-lg mb-6">
          My proficiency lies in harnessing the power of JavaScript,
          specifically ES6 and beyond, to build robust applications. Leveraging
          the React.js library, I specialize in creating reusable and modular
          components that enhance code maintainability and scalability.
        </h2>
        <h2 className="float-left xl:w-[70%] w-[82%] bg-secondary p-4 rounded-lg text-sm shadow-lg mb-2 ">
          In my toolkit, version control is managed seamlessly with Git,
          ensuring collaborative development and efficient code management. My
          preferred development environment is VSCode, where I harness the power
          of extensions and integrated tools to boost productivity.
        </h2>
      </div>

      <div className="xl:px-14 px-1 flex gap-4">
        <i className="bx bx-code-alt bx-sm"></i>
        <i className="bx bxl-html5 bx-sm"></i>
        <i className="bx bxl-css3 bx-sm"></i>
        <i className="bx bxl-javascript bx-sm"></i>
        <i className="bx bxl-react bx-sm"></i>
        <i className="bx bxl-tailwind-css bx-sm"></i>
        <i className="bx bxl-bootstrap bx-sm"></i>
        <i className="bx bxl-github bx-sm"></i>
      </div>
    </section>
  );
};

export default TechStack;
