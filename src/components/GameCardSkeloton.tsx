import { Card, Skeleton, Stack } from "@mui/material";

function GameCardSkeloton() {
  return (
    <Card elevation={5} sx={{ borderRadius: 3, overflow: "hidden", height: "100%" }}>
      <Skeleton variant="rectangular" height="60%" />
      <Stack sx={{ px: 1.5 }}>
        <Skeleton width="80%" height={38} sx={{ my: 2 }} />
        <Skeleton width="60%" height={20} />
        <Skeleton width="40%" height={20} />
        <Stack direction={"row"} justifyContent={"space-between"} height={30}>
          <Skeleton width={"50%"} />
          <Skeleton width={"10%"} />
        </Stack>
      </Stack>
    </Card>
  );
}

export default GameCardSkeloton;
