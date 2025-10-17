import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { CssBaseline } from "@mui/material";
import AppBar from "./components/AppBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <CssBaseline />
      <Grid
        container
        sx={{
          minHeight: "100vh",
          width: "100%",
          p: 0,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "background.default",
          color: "text.primary",
        }}>
        {/* Top Bar */}
        <Grid size={{ xs: 12 }}>
          <Box sx={{ position: "sticky", top: 0, zIndex: 1100 }}>
            <AppBar />
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }} container>
          {/* Aside */}
          <Grid container size={{ lg: 3 }} sx={{ display: { xs: "none", md: "none", lg: "block" }, p: 2 }}>
            <GenreList />
          </Grid>

          {/* Main */}
          <Grid container size={{ sm: 12, xs: 12, lg: 9 }}>
            <Box sx={{ p: 2, width: "100%" }}>
              <GameGrid />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
