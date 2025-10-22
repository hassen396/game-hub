import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppBar from "./components/AppBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
  sortOrder: string;
  searchtext: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const onGenreSelect = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre: genre });
  };
  const handlePlatformChange = (platform: Platform | null) => {
    setGameQuery({ ...gameQuery, platform: platform });
  };
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
            <AppBar onSearch={st => setGameQuery({ ...gameQuery, searchtext: st })} />
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }} container>
          {/* Aside */}
          <Grid container size={{ lg: 2 }} sx={{ display: { xs: "none", lg: "block" }, p: 2 }}>
            <GenreList onGenreSelect={onGenreSelect} selectedGenre={gameQuery.genre} />
          </Grid>

          {/* Main */}
          <Grid container size={{ sm: 12, xs: 12, lg: 10 }}>
            <Box sx={{ p: 2, width: "100%" }}>
              <Stack justifyContent="center" minWidth={50} direction="row" marginBottom={2}>
                <GameHeading gamequery={gameQuery} />
              </Stack>
              <Stack justifyContent="center" minWidth={50} direction="row" spacing={1} marginBottom={5}>
                <PlatformSelector onPlatformChange={handlePlatformChange} platform={gameQuery.platform} />
                <SortSelector sortOrder={gameQuery.sortOrder} onSelectOrder={order => setGameQuery({ ...gameQuery, sortOrder: order })} />
              </Stack>
              <GameGrid gameQuery={gameQuery} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
