"use client";

import LibraryPage1 from "@/components/libraryPage1";
import Navbar from "@/components/organisms/header/navbar";
import Sidebar from "@/components/organisms/sidebar/sidebar";
import { sideMenuList } from "@/pages/library3";
import React from "react";
import FooterBar from "@/components/organisms/footer/Footer";
import {
  MdHome,
  MdLibraryBooks,
  MdEqualizer,
  MdExitToApp,
  MdAccountCircle,
  MdLiveHelp,
} from "react-icons/md";

const Library: React.FC = () => {
  const footerList = [
    {
      id: 1,
      icon: <MdHome />,
      path: "/",
    },
    {
      id: 1,
      icon: <MdLibraryBooks />,
      path: "/library",
    },
    {
      id: 1,
      icon: <MdEqualizer />,
      path: "/analysis",
    },
    {
      id: 1,
      icon: <MdAccountCircle />,
      path: "/profile",
    },
  ];
  return (
    <section className="relative w-full h-[100%] overflow-hidden">
      <div className="flex flex-row relative w-[100%] mb-[30%] md:mb-0">
        <div className="hidden md:block">
          <Sidebar list={sideMenuList} />
        </div>
        <div className="w-[100%] flex flex-col justify-between align-middle h-[100vh]">
          <div className="flex flex-col w-[100%]">
            <Navbar />
          </div>
          <div className="p-4 md:p-10 ">
            <LibraryPage1 />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 md:hidden w-[100%]">
        <FooterBar footer={footerList} />
      </div>
    </section>
  );
};

export default Library;
