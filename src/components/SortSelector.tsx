import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";

const SortSelector = () => {
    const ordering = [
        {}
    ]
  return (
    <FormControl sx={{minWidth: {sm: 120, md:160} }} size="small">
      <Select
        displayEmpty
        input={<OutlinedInput />}
        // onChange={handleChange}
        labelId="select-platform-label"
        id="platform-select"
        // value={platform?.id.toString() || ""}
        label="Platforms">
        <MenuItem value="">
          <em>Sort by</em>
        </MenuItem>
        {/* {platforms.map(platform => (
          <MenuItem key={platform.id} value={platform.id.toString()}>
            {platform.name}
          </MenuItem>
        ))} */}
      </Select>
    </FormControl>
  );
}

export default SortSelector
