import React, { useState } from "react";
import Image from "next/image";
import UserPhoto from "../../public/Images/userph.png";
import ImageOne from "../../public/Images/one.jpg";
import ImageTwo from "../../public/Images/two.jpg";
import ImageThree from "../../public/Images/three.jpg";
import Awards from "./awards/awards";
import Friends from "./friends/friends";
import Quizzes from "./quizzes";
import Notification from "./notifications/notification";
import "../styles/dashboard.css";
// import { useSession } from "next-auth/react";

const Dashboard: React.FC = () => {
  // const { data: session } = useSession();
  // const profilePicture: any = session?.user?.image;
  // const [user, setUser] = useState(profilePicture);
  return (
    <div>
      <div className="scrollbar-dashboard md:px-[3%] mt-[8%]">
        <div className="flex flex-row justify-between align-middle w-[100%] mb-4 px-[24px] md:px-[1.5%] mt-[100px] md:mt-10">
          <div className="flex flex-col justify-start align-middle">
            <h2 className="capitalized font-medium text-[1.4em]">
              Welcome
              {/* {session?.user?.name} */}
            </h2>
            <small className="text-secondary">@Snr_Developer</small>
          </div>
          <div className="my-2 w-[40px] h-[40px] rounded-full border-2 border-primary flex float-right">
           {/* {
            user ?
           <Image
              src={profilePicture}
              alt="Profile picture"
              width={300}
              height={200}
              className="w-full h-full rounded-full"
            /> 
            : 
            <Image
            src={UserPhoto}
            alt="Profile picture"
            width={300}
            height={200}
            className="w-full h-full rounded-full"
          />} */}
          </div>
        </div>
        <div className="mb-10% p-4 dashGrid">
          <section className="p-4">
            <div className="flex flex-col justify-start align-middle">
              <div className="rounded-md bg-primary p-2">
                <div className="flex flex-col justify-start align-middle mb-4">
                  <h3 className="text-white text-[1em]">
                    Host a Treeviah Game
                  </h3>
                  <small className="text-white">
                    Get to host a game a lay online.
                  </small>
                </div>
                <div className="imageGrd">
                  <label className="flex flex-col justify-center align-middle gap-[10px]">
                    <div className="md:p-2 border-2 rounded-full border-dashed border-white flex justify-center align-middle self-center w w-20 h-20 md:w-24 md:h-24 overflow-hidden">
                      <Image
                        src={ImageOne}
                        alt="one.jpg"
                        width={300}
                        height={200}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <button className="py-2 px-5 rounded-md bg-white text-purple-800 capitalized text-[12px] md:text-[15px]">
                      Play Demo
                    </button>
                  </label>
                  <label className="flex flex-col justify-center align-middle gap-[10px]">
                    <div className="md:p-2 border-2 rounded-full border-dashed border-white flex justify-center align-middle self-center w w-20 h-20 md:w-24 md:h-24 overflow-hidden">
                      <Image
                        src={ImageTwo}
                        alt="one.jpg"
                        width={300}
                        height={200}
                        className="w-[100%] h-[100%] rounded-full"
                      />
                    </div>
                    <button className="py-2 px-5 rounded-md bg-white text-purple-800 capitalized text-[12px] md:text-[15px] w-[100%]">
                      Host Game
                    </button>
                  </label>
                  <label className="flex flex-col justify-center align-middle gap-[10px]">
                    <div className="md:p-2 border-2 rounded-full border-dashed border-white flex justify-center align-middle self-center w w-20 h-20 md:w-24 md:h-24 overflow-hidden">
                      <Image
                        src={ImageThree}
                        alt="one.jpg"
                        width={300}
                        height={200}
                        className="w-[100%] h-[100%] rounded-full"
                      />
                    </div>
                    <button className="py-2 px-5 rounded-md bg-white text-purple-800 capitalized text-[12px] md:text-[15px]">
                      Join Game
                    </button>
                  </label>
                </div>
              </div>
            </div>
            <div className="my-[50px]">
              <Awards />
            </div>
            <div className="my-[50px]">
              <Friends />
            </div>
          </section>
          <section className="p-4 grid grid-cols-1 justify-start align-top">
            <div className="self-start">
              <Quizzes />
            </div>
            <div className="my-2">
              <Notification />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
