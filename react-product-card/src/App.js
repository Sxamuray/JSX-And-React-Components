import { Card, Container } from "react-bootstrap";
import "./App.css";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import ProductImage from "./components/Image";

// Change this to your first name, or leave it empty to get "Hello, there!"
const firstName = "Dev";

const trimmedFirstName = firstName.trim();
const hasFirstName = trimmedFirstName.length > 0;
const helloText = hasFirstName ? `Hello, ${trimmedFirstName}` : "Hello, there!";

const greetingImageSrc = hasFirstName
  ? `https://placehold.co/900x220/png?text=Nice+to+meet+you,+${trimmedFirstName.replace(
      /\s+/g,
      "+"
    )}!`
  : null;

export default function App() {
  return (
    <div className="app-bg">
      <Container className="py-5 d-flex flex-column align-items-center">
        <Card className="product-card" data-testid="product-card">
          <div className="product-card__shine" aria-hidden="true" />

          <div className="product-card__content">
            <div className="product-card__image-wrap">
              <ProductImage />
            </div>

            <div className="product-card__body text-center">
              <Name />
              <Price />
              <Description />
            </div>
          </div>

          <Card.Footer className="product-card__footer">
            <span className="product-card__badge">Limited Drop</span>
          </Card.Footer>
        </Card>

        <div className="greeting mt-4" role="status" aria-live="polite">
          {helloText}
        </div>

        {hasFirstName ? (
          <img
            className="hello-image mt-3 rounded-4"
            src={greetingImageSrc}
            alt="Greeting visual"
          />
        ) : null}
      </Container>
    </div>
  );
}
