import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import IconMenuClose from "../assets/images/icon-menu-close.svg";

const Navigation = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="flex w-full flex-row items-center justify-between py-5 sm:mb-5">
      <img src={Logo} alt="logo" />
      <button onClick={toggleMenu} className="sm:hidden">
        <img src={IconMenu} alt="menu open icon" />
      </button>
      <div
        className={
          isOpen
            ? `fixed right-0 top-0 h-full w-full bg-neutral-very-dark-blue/40 duration-300 ease-in-out 
            sm:static sm:h-fit sm:w-fit  `
            : `fixed right-[-100%] sm:static`
        }
      >
        <div
          className="ml-auto flex h-full max-w-[250px] flex-col bg-neutral-off-white px-5 py-8 
        sm:ml-0 sm:max-w-none sm:flex-row sm:px-0 sm:py-0"
        >
          <button onClick={toggleMenu} className="self-end sm:hidden">
            <img src={IconMenuClose} alt="menu close icon" />
          </button>
          <ul
            className="mt-20 flex flex-col gap-y-5 text-lg text-neutral-very-dark-blue sm:mt-0 sm:flex-row sm:gap-y-0
          sm:space-x-10 sm:text-neutral-dark-grayish-blue [&_li]:cursor-pointer "
          >
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
