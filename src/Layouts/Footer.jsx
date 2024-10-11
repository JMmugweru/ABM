import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/cropped-logo-300x300.png";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-[#131d3b]">
      <div className="pt-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="">
            <small className="text-sm text-JmReded font-medium">About</small>
            <div className="grid gap-5 mt-5">
              <p className="text-sm text-white max-w-[50ch]">
                Location: Building No. 35, Busia Road, Industrial Area P.O. Box
                17555 – 00500 Nairobi, Kenya/ Uniafric House Koinange lane.
              </p>
              <p className="text-sm text-white max-w-[50ch]">
                Phone: 0704 717966 / 0759 712312
              </p>
              <p className="text-sm text-white max-w-[50ch]">
                Phone: 0704 717966 / 0759 712312
              </p>
              <p className="text-sm text-white max-w-[50ch]">
                Email: info@abmltd.co.ke
              </p>
            </div>
            <div className="flex space-x-5 items-center py-5 px-4">
              <FaFacebookSquare className="cursor-pointer text-2xl hover:text-white text-JmReded transition-all" />
              <FaInstagramSquare className="cursor-pointer text-2xl hover:text-white text-JmReded transition-all" />
              <FaTiktok className="cursor-pointer text-2xl hover:text-white text-JmReded transition-all" />
            </div>
          </div>
          <div className="">
            <small className="text-sm text-JmReded font-medium">
              Quick Links
            </small>
            <div className="grid">
              <Link className="text-white text-sm hover:bg-slate-50 hover:text-JmReded transition duration-500 ease-in-out transform w-max p-1 hover:underline">
                Home
              </Link>
              <Link className="text-white text-sm hover:bg-slate-50 hover:text-JmReded transition duration-500 ease-in-out transform w-max p-1 hover:underline">
                Support
              </Link>
              <Link className="text-white text-sm hover:bg-slate-50 hover:text-JmReded transition duration-500 ease-in-out transform w-max p-1 hover:underline">
                Single Function
              </Link>
              <Link className="text-white text-sm hover:bg-slate-50 hover:text-JmReded transition duration-500 ease-in-out transform w-max p-1 hover:underline">
                Where to Buy
              </Link>
              <Link className="text-white text-sm hover:bg-slate-50 hover:text-JmReded transition duration-500 ease-in-out transform w-max p-1 hover:underline">
                Mutli Function
              </Link>
              <Link className="text-white text-sm hover:bg-slate-50 hover:text-JmReded transition duration-500 ease-in-out transform w-max p-1 hover:underline">
                Servicing
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <small className="text-sm text-JmReded font-medium">ABM LTD</small>
            <img src={Logo} alt="" className="w-20 object-cover" />
          </div>
        </div>
      </div>
      <div className="py-5">
        <hr className="border-none bg-gray-600 h-[1px] w-full" />
      </div>
      <div className="relative py-3 flex items-center">
        <div className=" flex-wrap flex items-center justify-between container right-3 absolute">
          <p className="text-white text-sm">Copyright © 2024 ABM</p>
          <p className="text-white text-sm">info@abmltd.co.ke</p>
          <IoIosArrowUp onClick={scrollToTop} className="text-stone-50 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
