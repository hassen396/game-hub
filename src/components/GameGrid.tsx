import apiClient from "@/Services/api-client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
interface Game {
  id: number;
  name: string;
}
interface GamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<GamesResponse>("/games")
      .then((res) => {setGames(res.data.results);
        setError('')
      })
      .catch((er) => {setError(er.response.data);
        setGames([])
      })
      .finally();
  });
  return (
    <div style={{ display: "flex" }}>
      {error.trim() && (
        <Paper
          elevation={20}
          sx={{
            p: 4,
            textAlign: "center",
            color: "error.main",
            "& h1": {
              color: "error.main",
              fontSize: "2rem",
              mb: 2,
            },
            "& p": {
              color: "text.secondary",
              fontSize: "1.1rem",
            },
          }}>
          <Box
            sx={{ color: "error.main", mt: 2 }}
            dangerouslySetInnerHTML={{ __html: error }}
          />
        </Paper>
      )}
      {games.length !== 0 && (
        <ul>
          <Grid container>
            {games.map((game) => (
              <Grid size={3} key={game.id}>
                <Paper
                  
                  elevation={20}
                  sx={{ padding: 5, margin: 3 }}>
                  <li>{game.name}</li>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </ul>
      )}
    </div>
  );
};

export default GameGrid;
