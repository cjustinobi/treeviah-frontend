import React from "react";
import Sidebar from "../components/organisms/sidebar/sidebar";
import Navbar from "../components/organisms/header/navbar";
import FooterBar from "../components/organisms/footer/Footer";
import {
  MdHome,
  MdLibraryBooks,
  MdEqualizer,
  MdAccountCircle,
} from "react-icons/md";
import FriendsSearchComponent from "@/components/searchResultFriend";

const FriendsPage: React.FC = () => {
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
      path: "/account",
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
      path: "/account",
    },
  ];
  return (
    <div>
      <section className="relative w-full h-[100%] overflow-hidden">
        <div className="flex flex-row relative w-[100%] mb-[30%] md:mb-0">
          <div className="hidden md:block">
            <Sidebar list={sideMenuList} />
          </div>
          <div className="w-[100%] h-[100vh] flex flex-col justify-between align-middle">
            <div className="flex flex-col w-[100%]">
              <Navbar />
            </div>
            <div className="w-100% h-screen overflow-y-auto mb-[3%]">
              <FriendsSearchComponent />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 md:hidden w-[100%]">
          <FooterBar footer={footerList} />
        </div>
      </section>
    </div>
  );
};

export default FriendsPage;
