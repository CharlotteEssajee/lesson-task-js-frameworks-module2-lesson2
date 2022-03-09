import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function GameItem({ slug, name, image, released, rating }) {
  return (
    <Col>
      <Link to={`game/${slug}`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <div>
              <p>Released: {released}</p>
              <p>Rating: {rating}</p>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

GameItem.propTypes = {
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  released: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

GameItem.defaultProps = {
  released: "Unknown",
};

export default GameItem;
