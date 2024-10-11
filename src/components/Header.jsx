import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { CgClose, CgPhone } from "react-icons/cg";
import Banner from "../assets/cropped-logo-300x300.png";
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    {
      title: "Products",
      product1: "Single Function",
      product2: "Multi Function",
      product3: "Pantum Color",
    },
  ];

  const AccordionItem = ({ title, product1, product2, product3 }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
    return (
      <>
        <div className="border-b">
          <button
            className="w-full text-left px-4 py-2 "
            onClick={toggleAccordion}
          >
            <div className="flex justify-between items-center">
              <span
                className="text-[17px] text-JmReded"
                onClick={() => navigate("/products")}
              >
                {title}
              </span>
              <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </div>
          </button>
          {isOpen && (
            <div className="flex flex-col space-y-3 px-3">
              <button className="py-4 w-full flex gap-1 items-center text-sm hover:text-JmReded border-t-[1px] border-b-[1px] border-stone-300">
                <IoIosArrowForward />
                <Link to="/single-function" className="cursor-pointer">
                  {product1}
                </Link>
              </button>
              <button className="py-4 w-full flex gap-1 items-center text-sm hover:text-JmReded border-b-[1px] border-stone-300">
                <IoIosArrowForward />
                <Link to="/mutli-function" className="cursor-pointer">
                  {product2}
                </Link>
              </button>
              <button className="py-4 w-full flex gap-1 items-center text-sm hover:text-JmReded">
                <IoIosArrowForward />
                <Link to="/pantum-color" className="cursor-pointer">
                  {product3}
                </Link>
              </button>
            </div>
          )}
        </div>
        <div className="border-b py-4">
          <Link
            to="/where-to-buy"
            className="text-sm hover:text-JmReded text-zinc-900 px-4 cursor-pointer"
          >
            Where to Buy
          </Link>
        </div>
        <div className="border-b py-4">
          <Link
            to="/servicing"
            className="text-sm hover:text-JmReded text-zinc-900 px-4 cursor-pointer"
          >
            Servicing
          </Link>
        </div>
        <div className="border-b py-4">
          <Link
            to="/support"
            className="text-sm hover:text-JmReded text-zinc-900 px-4 cursor-pointer"
          >
            Support
          </Link>
        </div>
      </>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-JmReded shadow text-white" : "lg:bg-[#f6f7f8]"
      }`}
    >
      <nav className="relative z-50">
        <div className="container mx-auto px-2 sm:px-2 lg:px-8">
          <div className="flex items-center justify-between h-[200px] lg:h-16">
            {/* EXTRA SMALL SCREEN */}
            <div className="flex items-center justify-between absolute top-5 right-5 left-3  lg:hidden">
              <div onClick={() => navigate("/")} className="cursor-pointer">
                <img src={Banner} alt="" className="w-[180px] object-cover" />
              </div>
              {isOpen ? (
                <></>
              ) : (
                <button
                  onClick={toggleSidebar}
                  className="bg-JmReded text-slate-50  p-2 "
                >
                  <BiMenu className="block h-6 w-6" />
                </button>
              )}
            </div>
            {/* BIG SCREEN */}
            <div className="flex-1 items-center justify-evenly flex-wrap hidden lg:flex">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <CgPhone />
                  <p className="">070471966</p>
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <CgPhone />
                  <p className="">0759712312</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <IoLocationSharp />
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold">Industrial Area,</p>
                  <p className="text-sm font-semibold">Busia Rd,</p>
                  <p className="text-sm font-semibold"> Godown 35,</p>
                  <p className="text-sm font-semibold">
                    2nd floor / uniafric House,
                  </p>
                  <p className="text-sm font-semibold">
                    Ground floor Koinange Lane,
                  </p>
                  <p className="text-sm font-semibold">Koinange Street.</p>
                </div>
              </div>

              <div className="flex space-x-6 items-center">
                <FaFacebookSquare className="cursor-pointer text-2xl hover:text-JmReded transition-all" />
                <FaInstagramSquare className="cursor-pointer text-2xl hover:text-JmReded transition-all" />
                <FaTiktok className="cursor-pointer text-2xl hover:text-JmReded transition-all" />
              </div>
            </div>
          </div>
        </div>

        {/*EXTRA SMALL SCREEN NAV */}
        <div
          className={`fixed top-0 left-0 w-10/12 bg-white text-black h-full transition-transform transform lg:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="pt-2 pb-3 space-y-1 relative">
            <div
              onClick={toggleSidebar}
              className="bg-JmReded text-white absolute right-0 w-10 h-10 grid place-content-center cursor-pointer"
            >
              <CgClose />
            </div>
            <div className="w-full pt-10">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  product1={item.product1}
                  product2={item.product2}
                  product3={item.product3}
                />
              ))}
            </div>
            <div className="flex space-x-6 items-center py-5 px-4">
              <FaFacebookSquare className="cursor-pointer text-3xl hover:text-JmReded transition-all" />
              <FaInstagramSquare className="cursor-pointer text-3xl hover:text-JmReded transition-all" />
              <FaTiktok className="cursor-pointer text-3xl hover:text-JmReded transition-all" />
            </div>
            <div className="px-4">
              <button className="py-3 bg-JmReded p-5 text-white text-sm font-medium rounded-md uppercase  underline-custom">
                <Link to="/warranty-registration">Register Warranty</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
