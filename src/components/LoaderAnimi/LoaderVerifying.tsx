import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CenteredImage from "./CenteredImage";
import LottieAnimLoader from "./LoaderAnimiBoast";

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        position: "relative",
        bottom: "30%",
      }}
    >
      <LottieAnimLoader />
      <Box sx={{ position: "absolute" }}>
        <CenteredImage />
      </Box>
      <Box sx={{ position: "absolute", top: "85%" }}>
        <Typography fontSize="20px" fontWeight="800" lineHeight="24px">
          Loading...
        </Typography>
      </Box>
    </Box>
  );
}
