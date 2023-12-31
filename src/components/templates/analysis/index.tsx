import { useState } from "react";
import AnalysisTable from "../../organisms/analysis/table";

const AnalysisTemplate: React.FC = () => {
  const tabs = ["Summary", "Questions", "Players"];
  const list = ["All", "Didn’t finish"];
  const [activeTab, setActiveTab] = useState(2);
  const [activeList, setActiveList] = useState(0);

  const tHeader = [
    "Nikename",
    "Rank",
    "Correct",
    "Incorrect",
    "Unanswered",
    "Total",
  ];
  const tData = [
    ["Chicken feed", 1, 98, 2, 0, 9980],
    ["Blur", 2, 98, 2, 1, 9980],
    ["Choosen D", 3, 98, 2, 0, 9980],
    ["Dragdrop", 3, 98, 2, 6, 9980],
    ["JT", 3, 98, 2, 0, 9980],
  ];

  const tableItemHeader = [
    "Question",
    "Type",
    "Answered",
    "Correct/incorrect",
    "Time",
    "Total",
  ];
  return (
    <div className="py-4 px-4 md:px-12">
      <button type="button" className="font-medium text-[#D5AAD5] mb-2">
        Go Back
      </button>
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h3 className="text-[32px] text-[#1D1D1D] font-bold">
          Virtual Reality
        </h3>
        <div className="flex justify-between">
          {tabs.map((item, index) => (
            <button
              type="button"
              className={`border-b  ${
                activeTab === index
                  ? " border-[#800080] border-b-4 text-[#800080] font-bold"
                  : "border-[#D2D2D2] "
              } py-2 px-4`}
              onClick={() => {
                setActiveTab(index);
              }}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-md p-4 bg-white drop-shadow-lg w-full">
        <div className="flex mb-5">
          {list.map((item, index) => (
            <button
              type="button"
              className={`border-b  ${
                activeList === index
                  ? " border-[#800080] border-b-4 text-[#800080] font-bold"
                  : "border-[#D2D2D2] "
              } py-2 px-4`}
              onClick={() => {
                setActiveList(index);
              }}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="w-full overflow-x-auto h-[50vh]">
          <AnalysisTable
            tData={activeList == 0 ? tData : tData.filter((item) => item[4])}
            tHeader={tHeader}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalysisTemplate;
