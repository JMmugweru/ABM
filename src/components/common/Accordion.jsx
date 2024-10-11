import { useState } from "react";

const Accordion = ({ title, content }) => {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="border">
        <button
          className="flex gap-3 items-center w-full py-4 px-6  bg-[#6ec1e4] "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="transform transition-transform duration-1000 text-xl font-bold">
            {isOpen ? "-" : "+"}
          </span>
          <span className="text-sm">{title}</span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-1000 ease-in-out ${
            isOpen ? "max-h-80" : "max-h-0"
          }`}
        >
          <div className="p-6 text-[13px]">{content}</div>
        </div>
      </div>
    </>
  );
}

export default Accordion