import { useState } from "react";

const Toggle = ({ title, content, paragraph, heading }) => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <>
      {/* <div className="border-b">
        <button
          className="flex gap-3 items-center w-full py-2 px-6"
          onClick={() => setIsToggle(!isToggle)}
        >
          <span className="transform transition-transform duration-1000 text-xl font-bold">
            {isToggle ? "-" : "+"}
          </span>
          <span className="text-sm">NAIROBI</span>
        </button>
        <div className="w-[97%] mx-auto">
          <div
            className={`overflow-hidden transition-all duration-1000 ease-in-out ${
              isToggle ? "max-h-max" : "max-h-0"
            }`}
          >
            <h1 className="text-[#131d3b] text-xl font-semibold py-1 px-3">
              NAIROBI
            </h1>
            <p className="text-sm font-medium mb-5">
              ~ ABM Uniafric house,
              <span className="font-thin">Koinange Lane,Koinange street.</span>
              0759712312.
            </p>
            <p className="text-sm font-medium mb-5">
              ~ Mombasa computers
              <span className="font-thin">
                Rahimtulla building, Tom boya street,
              </span>
              0111040400.
            </p>
            <p className="text-sm font-medium mb-5">
              ~ Gadget world,
              <span className="font-thin">
                After40 hotel building, biashara street,
              </span>
              0727540440.
            </p>
            <p className="text-sm font-medium mb-5">
              ~ Stewan computers,
              <span className="font-thin">popman house,</span>
              020222355.
            </p>
            <p className="text-sm font-medium mb-5">
              ~ Kings paper works,
              <span className="font-thin">Standard Street Caxton House</span>
              0700030589.
            </p>
            <p className="text-sm font-medium mb-5">
              ~ Brimat computers
              <span className="font-thin">Tomboya street,</span>
              0711179871.
            </p>
            <p className="text-sm font-medium mb-5">
              ~ Cycla systems ltd,
              <span className="font-thin">kilimani</span>
              0794750770
            </p>
            <p className="text-sm font-medium mb-5">
              ~ kings paper work ltd
              <span className="font-thin">caxton house,</span>
              0700030589
            </p>
            <p className="text-sm font-medium mb-5">
              ~ Compsys Tech,
              <span className="font-thin">Jamia mall,</span>
              0722933909
            </p>
            <p className="text-sm font-medium mb-5">
              ~ Duka Tech,
              <span className="font-thin">Kimathi street</span>
              072930912
            </p>
            <p className="text-sm font-medium mb-5">
              ~ ENFB Stationery Supplies
            </p>
            <p className="text-sm font-medium mb-5">
              ~ Gaab Communications,
              <span className="font-thin">Jamia mall,</span>
              0722209356
            </p>
            <p className="text-sm font-medium mb-5">
              ~ Mzima Technologies,
              <span className="font-thin">pop man house,</span>
              0720909632
            </p>
            <p className="text-sm font-medium mb-5">~ Shibam Enterprises.</p>
            <p className="text-sm font-medium mb-5">~ Shibam Enterprises.</p>
            <p className="text-sm font-medium mb-5">~ Steven Computers.</p>
            <p className="text-sm font-medium mb-5">
              ~Wahad Technologies,
              <span className="font-thin">jamia mall,</span>
              0759121481
            </p>
            <p className="text-sm font-medium mb-5">
              ~ Connect Infrastructure, 0722521790.
            </p>
            <p className="text-sm font-medium mb-5">
              ~ Jamak office, 0723205655.
            </p>
          </div>
        </div>
      </div> */}
      <div className="border">
        <button
          className="flex gap-3 items-center w-full py-4 px-6"
          onClick={() => setIsToggle(!isToggle)}
        >
          <span className="transform transition-transform duration-1000 text-xl font-bold">
            {isToggle ? "-" : "+"}
          </span>
          <span className="text-[13px]">{title}</span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-1000 ease-in-out ${
            isToggle ? "max-h-80" : "max-h-0"
          }`}
        >
          <h1 className="text-[#131d3b] text-xl font-semibold py-1 px-5">
            {heading}
          </h1>
          <div className="p-6 text-[13px]">{content}</div>
        </div>
      </div>
    </>
  );
};

export default Toggle;
