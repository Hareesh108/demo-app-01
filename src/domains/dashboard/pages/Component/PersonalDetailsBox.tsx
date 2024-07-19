import React from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Delete from "../../../../assets/svgs/trash.svg";
import Edit from "../../../../assets/svgs/edit.svg";

type NewDeclarationForm = {
  buisnRegNoOld?: string;
  buisnRegNo?: string;
  cmpnyName?: string;
  position?: string;
  shareHolderDetails?: string;
};

type NewAddressProps = {
  data: NewDeclarationForm;
  updateForm: (data: NewDeclarationForm) => void;
  deleteForm: (data: NewDeclarationForm) => void;
};

const PersonalDetailsBox: React.FC<NewAddressProps> = ({
  data,
  updateForm,
  deleteForm
}) => {
  return (
    <Box
      padding="16px"
      sx={{
        backgroundColor: "#F9F9F9",
        borderRadius: "10px",
        marginY: "10px",
      }}
      border="1px solid #F9F9F9"
    >
      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          Company Name connected to you (if any)
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {data?.cmpnyName}
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          Business Registration Number
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {data?.buisnRegNo}
        </Typography>
      </Box>

      {data?.buisnRegNoOld && (
        <Box sx={{ mt: "16px" }}>
          <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
            Business Registration Number (Old)
          </Typography>
          <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
            {data?.buisnRegNoOld}
          </Typography>
        </Box>
      )}

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          Position Held
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {data?.position}
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          Shareholder details in the Organisation
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {data?.shareHolderDetails}
        </Typography>
      </Box>

      <Box
        sx={{
          mt: "16px",
          justifyContent: "flex-end",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <IconButton
          style={{
            marginRight: "16px",
          }}
          edge="end"
          color="inherit"
          aria-label="close"
          onClick={() => updateForm(data)}
        >
          <Tooltip title="Edit">
            <img src={Edit} alt="" width="100%" />
          </Tooltip>
        </IconButton>

        <IconButton edge="end" color="inherit" aria-label="close" onClick={() => deleteForm(data)}>
          <Tooltip title="Delete">
            <img src={Delete} alt="" width="100%" />
          </Tooltip>
        </IconButton>
      </Box>
    </Box>
  );
};

export default PersonalDetailsBox;
