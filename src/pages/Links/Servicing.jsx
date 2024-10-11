import { useState } from "react";
import Topbar from "../../Layouts/Topbar";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../../assets/cropped-logo-300x300.png";
import { IoIosArrowDown } from "react-icons/io";
import images from "../../assets/image";
import Accordion from "../../components/common/Accordion";
import Footer from "../../Layouts/Footer";

const accordionData = [
  {
    title: "Busia Road, Induastrial area,",
    content: "This is our main servicing center.",
  },
  {
    title: "Town Center",
    content: "Coming soon….",
  },
];
const Servicing = () => {
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
      <section className="container px-2 xl:w-[60%] mx-auto flex flex-col md:flex-row gap-3 mb-5">
        <div className="flex-[0.6]">
          <figure>
            <img
              src={images.Repair}
              alt=""
              className=" xl:w-11/12 h-full object-cover"
            />
          </figure>
        </div>
        <div className="flex-[0.4]">
          <h2 className="text-[#131d3b] text-2xl font-bold">
            MACHINE SERVICING
          </h2>
          <p className="text-xs my-5">
            We do machine servicing and maintenance. Checkout our servicing
            Outlets.
          </p>
          <div className="w-full mx-auto overflow-hidden">
            {accordionData.map(({ title, content }, id) => {
              return <Accordion key={id} title={title} content={content} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Servicing;
