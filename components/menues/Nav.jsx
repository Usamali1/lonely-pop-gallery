import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="main-container py-4 flex  ">
      <div className="flex justify-between items-center w-full">
        <div>
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image
                src="/images/logo.png"
                alt=""
                className=""
                width="380"
                height="124"
              />{" "}
            </div>
          </Link>
        </div>

        <ul className=" hidden lg:flex  2xl:gap-x-[71px] xl:gap-x-12 lg:gap-x-9 gap-x-5">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link href={url}>
                  <span className="capitalize cursor-pointer font-serif xl:text-2xl text-xl italic">
                    {" "}
                    {text}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="lg:block hidden">
          <FaSearch className="2xl:text-5xl xl:text-3xl text-2xl" />
        </div>

        <div className="lg:hidden block">
          <button className="text-black text-2xl" onClick={toggleDrawer}>
            <GiHamburgerMenu />
          </button>
          <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
            <div className="bg-white h-full w-full py-10 px-5">
              {" "}
              <div className="flex items-center cursor-pointer">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt=""
                    className=""
                    width="380"
                    height="124"
                  />
                </Link>
              </div>
              <ul className="flex flex-col  mt-8 gap-y-7">
                {links.map((link) => {
                  const { id, text, url } = link;
                  return (
                    <li key={id}>
                      <Link href={url}>
                        <span className="capitalize cursor-pointer  font-serif xl:text-2xl text-xl italic">
                          {text}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-7">
                <FaSearch className="2xl:text-5xl xl:text-3xl text-2xl" />
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Nav;

const links = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "Gallery ", url: "/gallery" },
  { id: 3, text: "Make a Post", url: "/make-post" },
];
