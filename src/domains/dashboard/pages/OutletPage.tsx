import KycMilestoneChecklist from "../MilestoneCheckList/index";
import { Box, useMediaQuery } from "@mui/material";

import React from "react";
import { Outlet } from "react-router-dom";

type OutletStepsProps = {
  OutletStepsProps?: any;
};

const OutletSteps: React.FC<OutletStepsProps> = () => {
  const setSizeBanner = useMediaQuery("(min-width:769px)");

  return (
    <>
      {setSizeBanner ? (
        <Box
          sx={{
            overflow: "hidden", // Prevent overflow
            "&::-webkit-scrollbar": {
              width: "0.1em",
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "transparent",
            },
          }}
        >
          <KycMilestoneChecklist>
            <Box
              sx={{
                height: "92vh",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  width: "0.5em",
                  background: "transparent",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "transparent",
                },
              }}
            >
              <Outlet />
            </Box>
          </KycMilestoneChecklist>
        </Box>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default OutletSteps;
