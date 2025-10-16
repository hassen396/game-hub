import useGames from "@/hooks/useGames";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import GameCard from "./GameCard";
import GameCardSkeloton from "./GameCardSkeloton";
const GameGrid = () => {
  const { games, error, loading } = useGames();
  // if (loading)
  //   return (
  //     <Grid container justifyContent="space-evenly">
  //       {/* {Array.from({ length: 16 }).map((_, i) => (
  //         <Grid key={i}>
  //           <GameCardSkeloton />
  //         </Grid>
  //       ))} */}
  //     </Grid>
  //   );

  if (error)
    return (
      <Typography color="error" textAlign="center" mt={5}>
        {error}
      </Typography>
    );

  return (
    <Grid container justifyContent="center" spacing={2}>
      {loading
        ? Array.from({ length: 16 }).map((_, i) => (
            <Grid key={i}>
              <GameCardSkeloton />
            </Grid>
          ))
        : games.map((game) => (
            <Grid key={game.id}>
              <GameCard game={game} />
            </Grid>
          ))}
    </Grid>
  );
};

export default GameGrid;
