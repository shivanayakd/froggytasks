import React from "react";
import { frogyLogo } from "../assets/images";

const Header = () => {
  return (
    <section id="header" className="container mx-auto px-6 py-14">
      <div className="flex flex-col items-center justify-center gap-5">
        <img
          src={frogyLogo}
          width={700}
          alt="Taskphin"
        />
        <p>
          Managing tasks during the hiring process can be a complex endeavor
          involving various stages and multiple stakeholders. To streamline this
          process and make it more manageable, employing effective task
          management strategies is crucial. Here are some ways to facilitate
          task management in the context of hiring:
        </p>
      </div>
    </section>
  );
};

export default Header;
