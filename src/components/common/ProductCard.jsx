const ProductCard = ({ image, name, button }) => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="object-cover transform transition duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-[#131d3b] mb-4">{name}</h2>
        <button className="bg-JmReded hover:bg-[#ad3445] text-white text-[13px] py-2.5 px-6 rounded-md">
          {button}
        </button>
      </div>
    </div>
  );
};

export default ProductCard