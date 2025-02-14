
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
        <i className="ri-html5-fill ri-lg"></i>
        <i className="ri-css3-fill ri-lg"></i>
        <i className="ri-javascript-fill ri-lg"></i>
        <i className="ri-nextjs-fill ri-lg"></i>
        <i className="ri-reactjs-fill ri-lg"></i>
        <i className="ri-tailwind-css-fill ri-lg"></i>
        <i className="ri-bootstrap-fill ri-lg"></i>
        <i className="ri-github-fill ri-lg"></i>
      </div>
    </section>
  );
};

export default TechStack;
