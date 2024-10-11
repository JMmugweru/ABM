import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Banner from "../../assets/cropped-logo-300x300.png";
import Pantum from "../../assets/pantum-logo-1024x116.png";
import Image from "../../assets/pantum-png-1.png";
import { useState } from "react";
import Topbar from "../../Layouts/Topbar";
import Footer from "../../Layouts/Footer";

const Support = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  return (
    <div className="">
      <Topbar />
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
                className="text-base xl:text-[19px] inline-flex  items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform"
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
                    className="text-base xl:text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform border-b border-gray-300"
                  >
                    Single Function
                  </Link>
                  <Link
                    to="/mutli-function"
                    className="text-base xl:text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform border-b border-gray-300"
                  >
                    Mutli Function
                  </Link>
                  <Link
                    to="/pantum-color"
                    className="text-base xl:text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform border-b border-gray-300"
                  >
                    Pantum Color
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/where-to-buy"
              className="text-base xl:text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-4 transition duration-500 ease-in-out transform"
            >
              Where to Buy
            </Link>
            <Link
              to="/servicing"
              className="text-base xl:text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-4 transition duration-500 ease-in-out transform"
            >
              Servicing
            </Link>
            <Link
              to="/support"
              className="text-base xl:text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-4 transition duration-500 ease-in-out transform"
            >
              Support
            </Link>
          </div>
          <button className="py-3 bg-JmReded p-5 text-white text-sm font-medium rounded-md uppercase  underline-custom">
            <Link to="/warranty-registration">Register Warranty</Link>
          </button>
        </div>
      </div>
      <section className="w-11/12 sm:w-10/12 lg:w-[60%] lg:h-[40vh] items-center mx-auto gap-5 flex flex-col lg:flex-row mb-5">
        <div className="">
          <h1 className="text-[#131d3b] font-bold text-2xl mb-5">PANTUM</h1>
          <img
            src={Pantum}
            alt=""
            className="w-3/4 md:w-[500px] cursor-pointer"
          />
          <p className="my-5">Download drivers/user manual</p>
          <div className="flex flex-col gap-3 mt-5">
            <button className="text-white bg-JmReded py-2 px-5 rounded uppercase w-max text-xs hover:bg-[#b33747]">
              Drivers
            </button>
            <button className="text-white bg-JmReded py-2 px-5 rounded uppercase w-max text-xs hover:bg-[#b33747]">
              User Manual
            </button>
          </div>
        </div>
        <div>
          <img
            src={Image}
            alt=""
            className=" w-2/3 md:w-[300px] object-cover transform transition duration-500 ease-in-out hover:scale-110"
          />
        </div>
      </section>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Support;
