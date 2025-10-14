import useGames from "@/hooks/useGames";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const GameGrid = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  const { games, error } = useGames();
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
                <Item elevation={20} sx={{ padding: 5, margin: 3 }}>
                  {game.name}
                </Item>
              </Grid>
            ))}
          </Grid>
        </ul>
      )}
    </div>
  );
};

export default GameGrid;
