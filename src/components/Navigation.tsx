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
    <div className="flex w-full flex-row items-center justify-between py-5">
      <img src={Logo} alt="logo" />
      <button onClick={toggleMenu}>
        <img src={IconMenu} alt="menu open icon" />
      </button>
      <div
        className={
          isOpen
            ? `fixed right-0 top-0 h-full w-full bg-neutral-very-dark-blue/40 duration-300 ease-in-out `
            : `fixed right-[-100%]`
        }
      >
        <div className="ml-auto flex h-full max-w-[250px] flex-col bg-neutral-off-white px-5 py-8">
          <button onClick={toggleMenu} className="self-end">
            <img src={IconMenuClose} alt="menu close icon" />
          </button>
          <ul className="mt-20 flex flex-col gap-y-5 text-lg text-neutral-very-dark-blue [&_li]:cursor-pointer">
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
