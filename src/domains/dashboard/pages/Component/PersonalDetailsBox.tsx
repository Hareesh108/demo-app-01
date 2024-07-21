import React from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Delete from "../../../../assets/svgs/trash.svg";
import Edit from "../../../../assets/svgs/edit.svg";
import { FamilyData } from "../section_C";
import { getFieldValue } from "../../../../utils/functions";
import { EmployeeBusiness } from "../../../../slices/sectionBSlice";

type Props = {
  data: EmployeeBusiness;
  editCurrentForm: (id: string) => void;
  deleteRecord: (id: string) => void;
};

const PersonalDetailsBox: React.FC<Props> = ({
  data,
  editCurrentForm,
  deleteRecord,
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
          {getFieldValue(data?.businessRegistrationNumber)}
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          NRIC Number
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {getFieldValue(data?.name)}
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          Old NRIC Number (if any)
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {getFieldValue(data?.oldBusinessRegistrationNumber)}
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          Passport Number (if any)
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {getFieldValue(data?.position)}
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Typography fontSize={"10px"} color={"#231F20"} fontWeight={"400"}>
          Relationship
        </Typography>
        <Typography fontSize={"14px"} color={"#231F20"} fontWeight={"700"}>
          {getFieldValue(data?.shareholder)}
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
          aria-label="edit"
          onClick={() => {
            editCurrentForm(data?.businessRegistrationNumber);
          }}
        >
          <Tooltip title="Edit">
            <img src={Edit} alt="" width="100%" />
          </Tooltip>
        </IconButton>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="close"
          onClick={() => {
            deleteRecord(data?.businessRegistrationNumber);
          }}
        >
          <Tooltip title="Delete">
            <img src={Delete} alt="" width="100%" />
          </Tooltip>
        </IconButton>
      </Box>
    </Box>
  );
};

export default PersonalDetailsBox;
