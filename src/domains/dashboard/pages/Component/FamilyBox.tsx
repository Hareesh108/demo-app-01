import React from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Delete from "../../../../assets/svgs/trash.svg";
import Edit from "../../../../assets/svgs/edit.svg";

type NewDeclarationForm = {
  id?: string;
  name?: string;
  nricNumber?: string;
  oldNRICNumber?: string;
  passportNo?: string;
  relationship?: string;
  bRegNumber?: string;
  shareHolderDetails?: string;
  cmpnyName?: string;
  positionHeld?: string;
};

type NewAddressProps = {
  data: NewDeclarationForm;
  updateForm: (data: NewDeclarationForm) => void;
  deleteForm: (data: NewDeclarationForm) => void;
};

const FamilyBox: React.FC<NewAddressProps> = ({
  data,
  updateForm,
  deleteForm,
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
          Name as per NRIC
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {data?.name ?? "--"}
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          NRIC Number
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {data?.nricNumber ?? "--"}
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          Old NRIC Number (if any)
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {data?.oldNRICNumber ?? "--"}
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          Passport Number (if any)
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {data?.passportNo ?? "--"}
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          Relationship
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {data?.relationship ?? "--"}
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          Business Registration Number
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {data?.bRegNumber ?? "--"}
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          Name of Company/ Entity connect to
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {data?.cmpnyName ?? "--"}
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          Position held at that company
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {data?.positionHeld ?? "--"}
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          Shareholder details in the Organisation
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {data?.shareHolderDetails ?? "--"}
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

        <IconButton
          edge="end"
          color="inherit"
          aria-label="close"
          onClick={() => deleteForm(data)}
        >
          <Tooltip title="Delete">
            <img src={Delete} alt="" width="100%" />
          </Tooltip>
        </IconButton>
      </Box>
    </Box>
  );
};

export default FamilyBox;
