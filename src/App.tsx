import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { CssBaseline } from "@mui/material";
import AppBar from "./components/AppBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const onGenreSelect = (genre: Genre) => {
    setSelectedGenre(genre);
  };
  console.log(selectedGenre);

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
          <Grid container size={{ lg: 2.5 }} sx={{ display: { xs: "none", lg: "block" }, p: 2 }}>
            <GenreList onGenreSelect={onGenreSelect} selectedGenre={selectedGenre} />
          </Grid>

          {/* Main */}
          <Grid container size={{ sm: 12, xs: 12, lg: 9.5 }}>
            <Box sx={{ p: 2, width: "100%" }}>
              <PlatformSelector />
              <GameGrid selectedGenre={selectedGenre} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
