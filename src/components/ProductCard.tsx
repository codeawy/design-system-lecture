import Button from "./ui/Button";
import ButtonGroup from "./ButtonGroup";

// interface IProps {}

const ProductCard = () => {
  return (
    <div>
      <h3>Product title</h3>
      <ButtonGroup>
        <Button>Submit</Button>
        <Button>Destroy</Button>
      </ButtonGroup>
    </div>
  );
};

export default ProductCard;
