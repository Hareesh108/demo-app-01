import React from "react";
import { Box, IconButton, useMediaQuery, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { DOMAIN_PATHS } from "../../../routes/paths";
import checklistBanner from "../../../assets/svgs/ChecklistBoostBanner.svg";
import checklistBannerForweb from "../../../assets/svgs/Top_Navigation_checklist.svg";
import AccountSetupStepper from "../../../layouts/AccountSetupStepper/index";

const KycMilestoneChecklist = ({ children }: any) => {
  const setSizeBanner = useMediaQuery("(min-width:769px)");
  const navigate = useNavigate();
  const location = useLocation();
  const { navigatePath } = location?.state ?? "/";

  const handleNext = () => {
    navigate(navigatePath ?? "/steps");
  };
  return !setSizeBanner ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={checklistBanner} alt="" width="100%" />
      <IconButton
        style={{
          position: "absolute",
          top: "1%",
          right: "3%",
        }}
        edge="end"
        color="inherit"
        aria-label="close"
        onClick={() => console.log()}
      >
        <LogoutIcon sx={{ color: "white" }} />
      </IconButton>
      <Box
        sx={{
          marginTop: "-35px",
          borderRadius: "24px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          backgroundColor: "white",
          zIndex: "1",
          width: "300px",
        }}
      >
        <Box
          sx={{
            borderBottom: "1px solid #CDCDCD",
            height: "50px",
            marginLeft: "15px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "90%",
          }}
        >
          <Typography fontSize="20px" fontWeight="800" fontFamily="Maven Pro">
            Boost Bank CP Declaration Form
          </Typography>
        </Box>
        <AccountSetupStepper nxtButton={false} onClick={handleNext} />
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-between",
          alignItems: "center",
          width: "100%",
          padding: "20px 40px",
          borderBottom: "1px solid #CDCDCD",
        }}
      >
        <img src={checklistBannerForweb} alt="" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: "400px",
            height: "100%",
            borderRight: "1px solid #CDCDCD",
            paddingTop: 2,
          }}
        >
          <Box
            sx={{
              // borderBottom: "1px solid #CDCDCD",
              height: "50px",
              marginTop: "25px",
              marginLeft: "15px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "90%",
              margin: 2,
              padding: 2,
            }}
          >
            <Typography
              fontWeight="800"
              fontSize="20px"
              lineHeight="24px"
              fontFamily="Maven Pro"
            >
              Boost Bank CP Declaration Form
            </Typography>
          </Box>
          <Box sx={{ margin: 2, padding: 1 }}>
            <AccountSetupStepper nxtButton />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default KycMilestoneChecklist;
