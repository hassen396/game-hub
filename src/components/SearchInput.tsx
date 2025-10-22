import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import DirectionsIcon from "@mui/icons-material/Directions";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string)=> void;
}
const SearchInput = ({onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Stack marginX={2} direction="row" alignItems="center" sx={{ width: "100%" }}>
      <form onSubmit={(event)=>{
        event.preventDefault();
        onSearch(ref.current?.value || '')
      }} style={{width: '100%'}}>
        <Paper elevation={3} sx={{ width: "100%", p: 0.5, borderRadius: 3, display: "flex" }}>
          <InputBase
            inputRef={ref}
            onFocus={() => console.log("hi")}
            startAdornment={
              <IconButton type="button" sx={{ p: "10px", flex: "0 0 auto", borderRadius: 2 }} aria-label="search">
                <SearchIcon />
              </IconButton>
            }
            autoFocus
            sx={{ ml: 1, flex: 1, minWidth: 0 }}
            placeholder="Search Games"
            inputProps={{ "aria-label": "search games" }}
          />
          <Divider sx={{ height: 28, m: 0.5, alignSelf: "center" }} orientation="vertical" />
          <IconButton color="primary" sx={{ p: "10px", flex: "0 0 auto" }} aria-label="directions">
            <DirectionsIcon />
          </IconButton>
        </Paper>
      </form>
    </Stack>
  );
};

export default SearchInput;
