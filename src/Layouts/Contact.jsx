import Parallex from "../components/common/Parallex";

const Contact = () => {
  return (
    <>
      <div className="bg-white  lg:h-[55vh]">
        <Parallex />
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative">
          <div className="py-5 lg:py-10 lg:absolute top-5 xl:left-[10%]">
            <small className="text-JmReded text-[13px] font-bold">Office</small>
            <div className="mt-5">
              <h2 className="text-[#131d3b] font-semibold text-xl">
                Head Office
              </h2>
              <span className="font-medium text-[13px] text-stone-900 max-w-[60ch]">
                No. 35, Busia Road, Industrial Area P.O. Box 17555 – 00500
                Nairobi, Kenya
              </span>
            </div>
            <div className="mt-5">
              <h2 className="text-[#131d3b] font-semibold text-xl">
                Town Office
              </h2>
              <span className="font-medium text-[13px] text-stone-900 max-w-[60ch]">
                Uniafric house, Koinange lane, Koinange street
              </span>
            </div>
            <div className=" my-5">
              <hr className="border-none bg-gray-300 h-[1px] w-1/3" />
            </div>
            <div className="mt-5">
              <span className="font-medium text-[13px] text-stone-900 max-w-[60ch]">
                Phone: 0704 717966 /0759712312
              </span>
            </div>
            <div className="mt-5">
              <span className="font-medium text-[13px] text-stone-900 max-w-[60ch]">
                Email: info@abmltd.co.ke
              </span>
            </div>
          </div>

          <form
            action="https://getform.io/f/blljpypb"
            method="post"
            className="bg-[#fafafa] w-10/12 lg:w-[500px] lg:absolute lg:right-[0%] xl:right-[10%] lg:-top-24 shadow p-5"
          >
            <small className="text-JmReded text-[13px] font-bold">Office</small>
            <h2 className="text-[#131d3b] font-semibold text-xl">
              Talk to us through E-Mail
            </h2>
            <div className="flex flex-col gap-5">
              <div className="">
                <label htmlFor="" className="text-JmReded">
                  Name *
                </label>

                <div className="flex items-center gap-5 lg:justify-evenly flex-wrap lg:flex-nowrap">
                  <div className="flex flex-col w-full">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="yes"
                      required
                      className="border border-gray-300 py-2.5 px-3 outline-none text-sm"
                    />
                    <span>First</span>
                  </div>
                  <div className="flex flex-col w-full">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="family-name"
                      required
                      className="border border-gray-300 py-2.5 px-3 outline-none text-sm"
                    />
                    <span>Last</span>
                  </div>
                </div>
              </div>
              <div className="">
                <label htmlFor="" className="text-JmReded">
                  Email *
                </label>
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="border border-gray-300 py-2.5 px-3 outline-none text-sm w-full"
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="" className="text-JmReded">
                  Comment or Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write message"
                  required
                  className="border border-gray-300 h-[120px] outline-none text-sm w-full p-2"
                />
              </div>
              <button className="bg-JmReded p-5 text-white text-sm font-medium rounded-md uppercase  underline-custom">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
