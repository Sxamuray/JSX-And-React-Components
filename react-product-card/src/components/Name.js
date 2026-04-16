import { Card } from "react-bootstrap";
import { product } from "../product";

export default function Name() {
  return <Card.Title className="product-name">{product.name}</Card.Title>;
}

