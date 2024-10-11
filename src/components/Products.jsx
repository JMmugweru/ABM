import printers from "../assets/Images";
import ProductCard from "./common/ProductCard";

const Products = () => {
  return (
    <div className="product min-h-[60vh] bg-center bg-cover">
      <div className="container mx-auto border-black">
        <div className="w-11/12 mx-auto">
          <div className="mt-5">
            <small className="text-sm text-JmReded font-medium">PRODUCTS</small>
            <h2 className="text-2xl font-semibold">FEATURED PRODUCTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mt-5 mx-auto ">
            {printers.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
