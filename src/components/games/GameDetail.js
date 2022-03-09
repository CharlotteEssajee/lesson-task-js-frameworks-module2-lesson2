import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Loader from "../layout/Loader";
import ErrorMessage from "../layout/ErrorMessage";
import { API } from "../../constants/api";
import { KEY } from "../../constants/api";
import ScreenshotSlider from "./ScreenshotSlider";

function GameDetail() {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useNavigate();

  const { slug } = useParams();

  if (!slug) {
    history.push("/");
  }

  const url = API + "/" + slug + KEY;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setGame(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={`Error: ${error}`} />;
  }

  return (
    <div className="game-detail">
      <h1>{game.name}</h1>
      <div>
        <Badge variant="info" size="large">
          {game.released ?? "Unknown release date"}
        </Badge>
      </div>
      <div>
        <Badge variant="primary">{game.rating}</Badge>
      </div>
      <ScreenshotSlider screenshots={game.tags} />
    </div>
  );
}

export default GameDetail;
