import { useState } from "react";
import Topbar from "../../Layouts/Topbar";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../../assets/cropped-logo-300x300.png";
import { IoIosArrowDown } from "react-icons/io";
import images from "../../assets/image";
import Footer from "../../Layouts/Footer";
import Toggle from "../../components/common/Toggle";

const accordionData = [
  {
    title: "NAIROBI",
    heading: "NAIROBI",
    content: [
      " ~ ABM Uniafric house, Koinange Lane,Koinange street, 0759712312.",
    ],
  },
  {
    title: "KISII",
    heading: "KISII",
    content: "Aster LTD",
  },
  {
    title: "KAKAMEGA",
    heading: "KAKAMEGA",
    content: "~ Fine copy LTD",
  },
  {
    title: "MERU",
    heading: "MERU",
    content: "~ Fine copy LTD",
  },
  {
    title: "NAKURU",
    heading: "NAKURU",
    content: "~ Stelotech Investments LTD",
  },
  {
    title: "KISUMU",
    heading: "KISUMU",
    content: "Coming soon…",
  },
  {
    title: "ELDORET",
    heading: "ELDORET",
    content: "~ Delacomp Office",
  },
  {
    title: "KITALE",
    heading: "KITALE",
    content: "Coming soon…",
  },
];
const Where = () => {
    const [isOpen, setIsOpen] = useState(false);
     const navigate = useNavigate();

  return (
    <div className="">
      <Topbar />
      <div className="bg-white">
        <div className="w-full">
          <div className="hidden lg:flex items-center justify-between container px-2 xl:px-0 xl:w-2/3 mx-auto fonted">
            <Link to="/" className="">
              <img src={Banner} alt="" className="w-[180px] object-cover" />
            </Link>
            <div className="flex items-center space-x-2">
              <div className="relative inline-block">
                <button
                  onClick={() => navigate("/products")}
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                  className="text-[19px] inline-flex  items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform"
                >
                  Product <IoIosArrowDown />
                </button>
                {isOpen && (
                  <div
                    className="origin-top-right absolute left-0 mt-[2.5px] min-w-max shadow-lg bg-white border-t-2 border-JmReded z-10"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <Link
                      to="/single-function"
                      className="text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform border-b border-gray-300"
                    >
                      Single Function
                    </Link>
                    <Link
                      to="/mutli-function"
                      className="text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform border-b border-gray-300"
                    >
                      Mutli Function
                    </Link>
                    <Link
                      to="/pantum-color"
                      className="text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform border-b border-gray-300"
                    >
                      Pantum Color
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/where-to-buy"
                className="text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-4 transition duration-500 ease-in-out transform"
              >
                Where to Buy
              </Link>
              <Link
                to="/servicing"
                className="text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-4 transition duration-500 ease-in-out transform"
              >
                Servicing
              </Link>
              <Link
                to="/support"
                className="text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-4 transition duration-500 ease-in-out transform"
              >
                Support
              </Link>
            </div>
            <button className="py-3 bg-JmReded p-5 text-white text-sm font-medium rounded-md uppercase  underline-custom">
              <Link to="/warranty-registration">Register Warranty</Link>
            </button>
          </div>
        </div>
      </div>
      <section className="container px-2 xl:w-[70%] mx-auto flex flex-col md:flex-row gap-3 mb-5">
        <div className="flex-[0.4] border">
          {accordionData.map(({ title, content, heading }, id) => {
            return (
              <Toggle
                key={id}
                title={title}
                content={content}
                heading={heading}
              />
            );
          })}
        </div>
        <div className="flex-[0.5] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white">
          <img src={images.Multi} alt="" className="object-cover" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Where;
