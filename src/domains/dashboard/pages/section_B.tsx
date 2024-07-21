import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import StepIndicator from "../../../components/stepIndicator";
import Button from "../../../components/Button";
import PersonalDetailsBox from "./Component/PersonalDetailsBox";
import DeclarationForm from "./Component/DeclarationForm";
import { setLeftBarProgress } from "../../../slices/StepperChecklistSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import {
  EmployeeBusiness,
  setSectionBData,
  setSectionBDataInitial,
} from "../../../slices/sectionBSlice";
import ConfirmDialog from "../../../components/dialog/ConfirmDialog";
import { LoadingButton } from "@mui/lab";

type newDeclarationForm = {
  id?: string;
  buisnRegNoOld: string;
  buisnRegNo?: string;
  cmpnyName?: string;
  position?: string;
  shareHolderDetails?: string;
};

const sectionB = () => {
  const [open, setOpen] = useState(false);

  const [edit, setEdit] = useState<boolean>(false);
  const [editFormData, setEditFormData] = useState<EmployeeBusiness | null>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log(editFormData, "editFormData");

  const [familyData, setFamilyData] = React.useState<EmployeeBusiness[]>([]);

  console.log(familyData, "familyData");

  const editCurrentForm = async (editId: string) => {
    const data = familyData.filter(
      (item: EmployeeBusiness) => item.businessRegistrationNumber === editId
    );
    console.log(data, "data editCurrentForm");
    setEditFormData(data[0]);
    setEdit(true);
    setOpen(true);
  };

  const [deleteConfirm, setDeleteConfirm] = React.useState(false);
  const [deleteRecordId, setDeleteRecordId] = React.useState("");

  const handleCancel = async () => {
    setDeleteConfirm(false);
  };

  const openDeleteDialog = async (deleteId: string) => {
    setDeleteConfirm(true);
    setDeleteRecordId(deleteId);
  };

  const deleteRecord = async (deleteId: string) => {
    const data = familyData.filter(
      (item: EmployeeBusiness) => item.businessRegistrationNumber !== deleteId
    );
    setFamilyData(data);
    setDeleteConfirm(false);
    console.log(data, "data deleteRecord");
  };

  useEffect(() => {
    dispatch(setLeftBarProgress({ step: 1 }));
  }, []);

  const onContinueSubmit = async () => {
    dispatch(setSectionBDataInitial());
    dispatch(setSectionBData(familyData));
    navigate("/sectionC");
  };

  const onNoneOfDeclareSubmit = async () => {
    dispatch(setSectionBDataInitial());
    navigate("/sectionC");
  };

  return (
    <>
      <Box
        display="flex"
        sx={{ height: `calc(100% - 55px)` }}
        flexDirection="column"
        position="relative"
      >
        <StepIndicator currentStep={2} totalSteps={4} path="/" />
        <Box
          display="flex"
          flexDirection="column"
          flex={1}
          width={{
            md: "31rem",
          }}
          sx={{
            maxWidth: { xs: "100%", md: "31rem" },
            marginX: "auto",
          }}
        >
          <Typography fontSize="24px" fontWeight={"800"}>
            Section B :{" "}
          </Typography>

          <Typography fontSize="12px" fontWeight={"400"} color={"#151515"}>
            {`Employee to declare any firm/ partnership/ company/ entity/ person
            (if any) in which employee is interested as :`}
          </Typography>

          <Typography
            marginTop={"10px"}
            fontSize="12px"
            fontWeight={"400"}
            color={"#151515"}
          >
            <Typography>{` 1.A controlling shareholder; or`}</Typography>

            <Typography>{` 2.An influential shareholder; or`}</Typography>

            <Typography>{` 3.A director, partner, executive officer, agent or guarantor and their subsidiaries or entities controlled by them.`}</Typography>
          </Typography>

          <Box sx={{ my: "18px", mx: "10px" }}>
            <Button
              sx={{
                marginTop: 1,
                width: {
                  xs: "100%",
                  sm: "max-content",
                  alignSelf: "flex-end",
                },
              }}
              variant="contained"
              size="large"
              btnText="Add Details Information"
              onClick={() => setOpen(true)}
              fullWidth
            />
          </Box>

          {familyData?.map((item, index) => {
            return (
              <Box>
                <PersonalDetailsBox
                  data={item}
                  editCurrentForm={editCurrentForm}
                  deleteRecord={openDeleteDialog}
                />
              </Box>
            );
          })}
        </Box>
        <Box
          bottom={20}
          sx={{ width: "100%" }}
          // height="80px"
          borderTop="1px solid #CDCDCD"
        >
          <Box
            height={{
              md: "max-content",
            }}
            display="flex"
            padding="16px"
            flex={{ xs: 1 }}
            sx={{
              alignItems: {
                xs: "flex-end",
                md: "center",
                lg: "flex-start",
              },
              justifyContent: {
                xs: "center",
                md: "flex-start",
                lg: "flex-start",
              },
              width: "100%",
            }}
          >
            {/* None to declare button */}
            {familyData?.length === 0 && (
              <Box
                display="flex"
                sx={{
                  flex: 1,

                  flexDirection: {
                    // md: "row",
                    xs: "column",
                  },
                }}
              >
                <Button
                  sx={{
                    marginTop: 1,
                    width: {
                      xs: "100%",
                      sm: "max-content",
                      alignSelf: "flex-end",
                      backgroundColor: "#F3F4F4",
                      color: "#58595B",
                    },
                  }}
                  variant="contained"
                  size="large"
                  btnText="None to Declare"
                  onClick={onNoneOfDeclareSubmit}
                  fullWidth
                />
              </Box>
            )}

            {/*  */}
            {familyData?.length > 0 && (
              <Box
                display="flex"
                sx={{
                  flex: 1,
                  flexDirection: {
                    sm: "row",
                    xs: "column",
                  },
                  width: "100%",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  sx={{
                    marginTop: 1,
                    width: {
                      xs: "100%",
                      sm: "max-content",
                      alignSelf: "flex-end",
                      backgroundColor: "#F3F4F4",
                      color: "#58595B",
                    },
                    marginRight: {
                      xs: 0,
                      sm: "10px",
                    },
                  }}
                  variant="contained"
                  size="large"
                  btnText="Save as Draft"
                  onClick={() => {}}
                  fullWidth
                />

                <Button
                  sx={{
                    marginTop: 1,
                    width: {
                      xs: "100%",
                      sm: "max-content",
                      alignSelf: "flex-end",
                    },
                  }}
                  variant="contained"
                  size="large"
                  btnText="Continue"
                  onClick={onContinueSubmit}
                  fullWidth
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <DeclarationForm
        open={open}
        setOpen={setOpen}
        editFormData={editFormData!}
        edit={edit}
        familyData={familyData}
        setFamilyData={setFamilyData}
        setEditFormData={setEditFormData}
      />

      <ConfirmDialog
        open={deleteConfirm}
        handleClose={() => setDeleteConfirm(false)}
        handleSubmit={() => deleteRecord(deleteRecordId)}
        dialogTitle="Confirm Delete?"
        dialogDescription="Are sure want to delete this item?"
        buttonLabel="Delete"
        actions={
          <LoadingButton
            variant="outlined"
            sx={{ borderRadius: 25, textTransform: "none" }}
            onClick={handleCancel}
          >
            Cancel
          </LoadingButton>
        }
      />
    </>
  );
};
export default sectionB;
