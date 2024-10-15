import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Banner from "../../assets/cropped-logo-300x300.png";
import Single from "../../assets/single.png"
import Cover from "../../assets/webb-transformed.jpeg";
import Topbar from "../../Layouts/Topbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Layouts/Footer";
import Pages from "../../components/common/Pages";

const SinglePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  return (
    <>
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
            <button
              className="py-3 bg-JmReded p-5 text-white text-sm font-medium rounded-md uppercase  underline-custom"
            >
              <Link to="/warranty-registration">Register Warranty</Link>
            </button>
          </div>
        </div>
      </div>
      <figure className="h-[40vh] relative">
        <img src={Cover} alt="" className="w-full h-full object-cover" />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl sm:text-4xl">
          SINGLE FUNCTION
        </h1>
      </figure>
      <div className="container mx-auto p-3 my-4">
        <small className="text-red-800 text-xs font-bold">
          SINGLE FUNCTION
        </small>
        <h2 className="text-2xl text-[#131d3b] font-semibold">
          Single Function
        </h2>
        <Pages image={Single} h2={"P2509W PRINTER"} button={"FEATURES"} />
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
