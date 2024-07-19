import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

const ComingSoonPage: React.FC = () => (
    <Box
      display="flex"
      flex={1}
      sx={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <Typography variant="h4" component="h1" align="center">
          Page is coming soon.
        </Typography>
      </Container>
    </Box>
  );

export default ComingSoonPage;
