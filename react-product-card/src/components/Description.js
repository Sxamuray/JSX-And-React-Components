import { Card } from "react-bootstrap";
import { product } from "../product";

export default function Description() {
  return <Card.Text className="product-description">{product.description}</Card.Text>;
}

