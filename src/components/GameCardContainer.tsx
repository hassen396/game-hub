import Grid from "@mui/material/Grid";
import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Grid minHeight={380} size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
      {children}
    </Grid>
  );
};

export default GameCardContainer;
