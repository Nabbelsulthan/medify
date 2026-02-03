import { Box, Typography } from "@mui/material";

export default function TopNoticeBar() {
  return (
    <Box
      sx={{
        height: "40px",
        backgroundColor: "#2D6CDF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography fontSize="14px" color="#fff">
        The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
      </Typography>
    </Box>
  );
}
