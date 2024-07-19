import React from "react"
import { Box, Typography } from "@mui/material"

export default function infoBox() {
    return (
        <Box
              padding="16px"
              sx={{
                backgroundColor: "#F9F9F9",
                borderRadius: "10px",
                margin: "13px",
              }}
              border="1px solid #F9F9F9"
            >
              <Typography
                fontSize={"16px"}
                fontFamily={"Maven Pro"}
                fontWeight={"700"}
                color={"#231F20"}
              >
                Additional Informations
              </Typography>

              <Box sx={{ mt: "16px" }}>
                <Typography
                  fontSize={"10px"}
                  color={"#231F20"}
                  fontWeight={"400"}
                >
                  Are you a member Committee of Bank
                </Typography>
                <Typography
                  fontSize={"14px"}
                  color={"#231F20"}
                  fontWeight={"700"}
                >
                  Yes
                </Typography>
              </Box>

              <Box sx={{ mt: "16px" }}>
                <Typography
                  fontSize={"10px"}
                  color={"#231F20"}
                  fontWeight={"400"}
                >
                  If Yes, Please state which Committee
                </Typography>
                <Typography
                  fontSize={"14px"}
                  color={"#231F20"}
                  fontWeight={"700"}
                >
                  MRCC
                </Typography>
              </Box>

              <Box sx={{ mt: "16px" }}>
                <Typography
                  fontSize={"10px"}
                  color={"#231F20"}
                  fontWeight={"400"}
                >
                  Officer - Authority Limit
                </Typography>
                <Typography
                  fontSize={"14px"}
                  color={"#231F20"}
                  fontWeight={"700"}
                >
                  Yes
                </Typography>
              </Box>

              <Box sx={{ mt: "16px" }}>
                <Typography
                  fontSize={"10px"}
                  color={"#231F20"}
                  fontWeight={"400"}
                >
                  Officer - Credit Manager
                </Typography>
                <Typography
                  fontSize={"14px"}
                  color={"#231F20"}
                  fontWeight={"700"}
                >
                  Yes
                </Typography>
              </Box>

              <Box sx={{ mt: "16px" }}>
                <Typography
                  fontSize={"10px"}
                  color={"#231F20"}
                  fontWeight={"400"}
                >
                  Officer - Head of Marketing Staff, Sales Staff, Frontliner
                </Typography>
                <Typography
                  fontSize={"14px"}
                  color={"#231F20"}
                  fontWeight={"700"}
                >
                  Yes
                </Typography>
              </Box>

              <Box sx={{ mt: "16px" }}>
                <Typography
                  color={"#EA0029"}
                  fontSize={"14px"}
                  fontFamily={"Maven Pro"}
                  fontWeight={"700"}
                  onClick={() => console.log('///')}
                  sx={{cursor:'pointer'}}
                >
                  Edit
                </Typography>
              </Box>
            </Box>
    )
}