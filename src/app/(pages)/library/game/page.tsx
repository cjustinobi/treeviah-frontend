"use client";

import React from "react";
import Navbar from "@/components/organisms/header/navbar";
import Sidebar from "@/components/organisms/sidebar/sidebar";
import LibraryPage2 from "@/components/libraryPage2";
import FooterBar from "@/components/organisms/footer/Footer";
import {
  MdHome,
  MdLibraryBooks,
  MdEqualizer,
  MdExitToApp,
  MdAccountCircle,
  MdLiveHelp,
} from "react-icons/md";

const Library2: React.FC = () => {
  const sideMenuList = [
    {
      title: "Home",
      icon: <MdHome />,
      path: "/",
    },
    {
      title: "Library",
      icon: <MdLibraryBooks />,
      path: "/library",
    },
    {
      title: "Analysis",
      icon: <MdEqualizer />,
      path: "/analysis",
    },
    {
      title: "Account",
      icon: <MdAccountCircle />,
      path: "/profile",
    },
  ];
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
    <section className="relative w-[100%] overflow-hidden">
      <div className="flex flex-row relative w-[100%] mb-[30%] md:mb-0">
        <div className="hidden md:block">
          <Sidebar list={sideMenuList} />
        </div>
        <div className="w-[100%] flex flex-col justify-between align-middle md:h-[100vh]">
          <div className="flex flex-col w-[100%]">
            <Navbar />
          </div>
          <div className="md:p-3 ">
            <LibraryPage2 />
          </div>
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 w-[100%]">
        <FooterBar footer={footerList} />
      </div>
    </section>
  );
};

export default Library2;
