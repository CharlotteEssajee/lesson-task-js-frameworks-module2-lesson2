import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { API } from "../../constants/api";
import { KEY } from "../../constants/api";
import GameItem from "./GameItem";
import Heading from "../layout/Heading";
import Loader from "../layout/Loader";
import ErrorMessage from "../layout/ErrorMessage";

function GameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API + KEY);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setGames(json.results);
        } else {
          setError("A server error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={`Error: ${error}`} />;
  }

  return (
    <Container>
      <Heading content="Games" />
      <Row>
        {games.map(function (game) {
          const { slug, name, background_image, released, rating } = game;
          return (
            <GameItem
              key={slug}
              slug={slug}
              name={name}
              image={background_image}
              released={released}
              rating={rating}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default GameList;
