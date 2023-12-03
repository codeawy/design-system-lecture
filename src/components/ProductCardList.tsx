import ProductCard from "./ProductCard";

interface IProps {}

const ProductCardList = ({}: IProps) => {
  return (
    <div>
      <h2 className="text-3xl my-10 capitalize">Product card list</h2>

      <div className="border-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 8 }, (_, idx) => (
          <ProductCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardList;

// ** sm => md => lg => xl
