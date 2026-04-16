import { Card } from "react-bootstrap";
import { product } from "../product";

export default function Price() {
  const formattedPrice = product.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

  return <Card.Subtitle className="product-price mb-3">{formattedPrice}</Card.Subtitle>;
}

