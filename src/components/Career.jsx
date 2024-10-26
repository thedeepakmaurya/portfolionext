import Image from "next/image";
import React from "react";

const Career = () => {
  return (
    <section className="h-full w-ful">
      <h1>Career</h1>
      <div className="h-full w-full flex gap-2 items-center justify-center">
        <div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="2" fill="currentColor">
  <rect width="200" height="1" />
</svg></div>
        <div className="w-60 h-32 flex items-center justify-center border border-foreground px-2 rounded-lg">
          <h1>Web Developer</h1>
        </div>
        <div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="2" fill="currentColor">
  <rect width="200" height="1" />
</svg></div>
        <div className="w-60 h-32 flex items-center justify-center border border-foreground px-2 rounded-lg">
          <h1>Web Developer</h1>
        </div>
      </div>
    </section>
  );
};

export default Career;
