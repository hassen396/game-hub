import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import {
  ThemeProvider,
  createTheme,
  useColorScheme,
} from "@mui/material/styles";
import Select from "@mui/material/Select";
import logo from "../assets/logo.jpeg";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

function ToggleColorMode() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        // borderRadius: 10,
        // p: 3,
        pt: { xs: 2, sm: 2, md: 3 },
        pr: { sm: 2, xs: 1, md: 4, lg: 6 },
        // ml: 0,
        // height: 12,
      }}>
      <FormControl>
        <FormControl sx={{ minWidth: { xs: 90, sm: 120, md: 130 } }}>
          <InputLabel id="theme-select-label">Theme</InputLabel>
          <Select
            sx={{ height: 30 }}
            labelId="theme-select-label"
            id="theme-select"
            value={mode}
            label="Theme"
            onChange={(event) =>
              setMode(event.target.value as "system" | "light" | "dark")
            }>
            <MenuItem value="system">System</MenuItem>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
          </Select>
        </FormControl>
      </FormControl>
    </Box>
  );
}

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

export default function AppBar() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Stack
          sx={{}}
          display={"flex"}
          justifyContent={"space-between"}
          direction="row"
          spacing={2}>
          <Toolbar>
            <Link component={RouterLink} to={"/"}>
              <Box
                component={"img"}
                src={logo}
                sx={{
                  height: { sm: 40, md: 60, xs: 30 },

                  cursor: "pointer",
                  borderRadius: 12,
                }}
              />
            </Link>
          </Toolbar>
          <ToggleColorMode />
        </Stack>
      </div>
    </ThemeProvider>
  );
}
