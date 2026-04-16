import { Card } from "react-bootstrap";
import { product } from "../product";

export default function ProductImage() {
  return (
    <Card.Img
      variant="top"
      src={product.image}
      alt={product.name}
      className="product-image"
    />
  );
}

