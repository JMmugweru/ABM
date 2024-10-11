const Pages = ({ image, h2, button }) => {
  return (
    <div className="p-3 my-4">
      <img
        src={image}
        alt=""
        className="w-2/3 md:w-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-110 my-5"
      />
      <h2 className="text-[17px] font-semibold my-4">{h2}</h2>
      <button className="text-white bg-JmReded py-2 px-5 rounded uppercase w-max text-xs hover:bg-[#b33747]">
        {button}
      </button>
    </div>
  );
};

export default Pages;
