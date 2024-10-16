import { Link, useNavigate } from "react-router-dom";
import Banner from "../../assets/cropped-logo-300x300.png";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Warrent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="">
      <div className="absolute top-[12%] left-[5%] right-[5%] xl:left-[20%] items-center justify-between xl:right-[20%] hidden lg:flex fonted">
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
                  className="xl:text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform border-b border-gray-300"
                >
                  Single Function
                </Link>
                <Link
                  to="/mutli-function"
                  className="xl:text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform border-b border-gray-300"
                >
                  Mutli Function
                </Link>
                <Link
                  to="/pantum-color"
                  className="xl:text-[19px] flex items-center gap-1 hover:bg-JmReded hover:text-white font-medium p-5 transition duration-500 ease-in-out transform border-b border-gray-300"
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
          onClick={() => navigate("/warranty-registration")}
          className="py-3 bg-JmReded p-5 text-white text-sm font-medium rounded-md uppercase  underline-custom"
        >
          Register Warranty
        </button>
      </div>
    </div>
  );
};

export default Warrent;
