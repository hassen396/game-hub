import { Card, Skeleton, Stack } from "@mui/material";

function GameCardSkeloton() {
  return (
    <Card sx={{ mx: "auto", my: 3, borderRadius: 3, overflow: "hidden" }}>
      <Skeleton variant="rectangular" height={180} width={280} />
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
