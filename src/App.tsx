import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { CssBaseline } from "@mui/material";
import AppBar from "./components/AppBar";
import GameGrid from "./components/GameGrid";

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
          bgcolor: "background.default",
          color: "text.primary",
        }}>
        <Grid size={{ xs: 12 }} sx={{}}>
          <Box sx={{ color: "white", p: 2 }}>
            <AppBar />
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }} container>
          <Grid
            size={{ lg: 2 }}
            sx={{
              display: { xs: "none", md: "none", lg: "block" },
              // bgcolor: "grey.200",
              p: 2,
            }}>
            Aside
          </Grid>
          <Grid size={{ xs: 12, lg: 9 }}>
            <Box
              sx={{
                display: "flex",

                //  bgcolor: "grey.700",
                p: 2,
              }}>
              <GameGrid />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
