import { ArrowBack } from "@mui/icons-material";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { DOMAIN_PATHS } from "../routes/paths";

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

type StepIndicatorProps = {
  currentStep?: number;
  totalSteps?: number;
  hideBack?: boolean;
  hideStep?: boolean;
};

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep = 0,
  totalSteps = 0,
  hideBack = false,
  hideStep = false,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width:768px)");

  const width = `${(currentStep / totalSteps) * 100}%`;
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingRight: "16px",
        boxSizing: "border-box",
      }}
    >
      {!hideStep && (
        <Box
          top={0}
          left={0}
          bgcolor="primary.main"
          sx={{ width: width.toString(), transition: "width 1s" }}
          height="4px"
        />
      )}

      <Box
        height="55px"
        width="100%"
        display="flex"
        justifyContent="space-between"
        paddingX="24px"
        alignItems="center"
      >
        {hideBack ? (
          <Box />
        ) : (
          <ArrowBack
            sx={{ color: "#59585B", cursor: "pointer" }}
            onClick={() => {
              isMobile
                ? navigate(DOMAIN_PATHS.sectionA, {
                    state: {
                      navigatePath: pathname,
                    },
                  })
                : navigate(-1);
            }}
          />
        )}
        {hideStep ? (
          <Box />
        ) : (
          <Typography
            sx={{
              color: "#8A8A8C",
              textAlign: "right",

              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "16px" /* 133.333% */,
            }}
            noWrap
          >
            Step {`${currentStep}/${totalSteps}`}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default StepIndicator;
