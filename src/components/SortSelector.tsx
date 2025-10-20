import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";

interface Props {
  onSelectOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  return (
    <FormControl sx={{ minWidth: { sm: 120, md: 160 } }} size="small">
      <Select
        displayEmpty
        input={<OutlinedInput />}
        onChange={event => onSelectOrder(event.target.value)}
        id="order-select"
        value={sortOrder?.toString() || ""}
        label="orders">
        {sortOrders.map(order => (
          <MenuItem key={order.label} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortSelector;
