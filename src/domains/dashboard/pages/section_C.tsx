import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import StepIndicator from "../../../components/stepIndicator";
import Button from "../../../components/Button";
import FamilyInfoDrawer from "./Component/FamilyForm";
import FamilyBox from "./Component/FamilyBox";
import { useAppDispatch } from "../../../hooks/hooks";
import { setLeftBarProgress } from "../../../slices/StepperChecklistSlice";
import { useNavigate } from "react-router-dom";
import {
  Person,
  setSectionCData,
  setSectionCDataInitial,
} from "../../../slices/sectionCSlice";
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

export interface FamilyData {
  id: string;
  fullName: string;
  nationalId: string;
  oldNationalId: string;
  passportNumber: string;
  countryCode: string;
  name: string;
  businessRegistrationNumber: string;
  oldBusinessRegistrationNumber: string;
  position: string;
  shareholder: string;
  relationship: string;
}

const sectionC = () => {
  const [open, setOpen] = useState(false);

  const [edit, setEdit] = useState<boolean>(false);
  const [editFormData, setEditFormData] = useState<FamilyData | null>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setLeftBarProgress({ step: 2 }));
    setEditFormData(null);
  }, []);

  console.log(editFormData, "editFormData");

  const [familyData, setFamilyData] = React.useState<FamilyData[]>([]);

  console.log(familyData, "familyData");

  const editCurrentForm = async (editId: string) => {
    const data = familyData.filter(
      (item: FamilyData) => item.nationalId === editId
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
      (item: FamilyData) => item.nationalId !== deleteId
    );
    setFamilyData(data);
    setDeleteConfirm(false);
    console.log(data, "data deleteRecord");
  };

  const transformFamilyData = (data: FamilyData[]): Person[] => {
    return data.map((item) => ({
      fullName: item.fullName,
      nationalId: item.nationalId,
      oldNationalId: item.oldNationalId,
      passportNumber: item.passportNumber,
      countryCode: item.countryCode,
      businesses: [
        {
          name: item.name,
          businessRegistrationNumber: item.businessRegistrationNumber,
          oldBusinessRegistrationNumber: item.oldBusinessRegistrationNumber,
          position: item.position,
          shareholder: item.shareholder,
        },
      ],
      relationship: item.relationship,
    }));
  };

  const onContinueSubmit = async () => {
    const transformedData = transformFamilyData(familyData);
    dispatch(setSectionCDataInitial());
    dispatch(setSectionCData(transformedData));
    navigate("/sectionD");
  };

  const onNoneOfDeclareSubmit = async () => {
    dispatch(setSectionCDataInitial());
    navigate("/sectionD");
  };

  return (
    <>
      <Box
        display="flex"
        sx={{ height: `calc(100% - 55px)` }}
        flexDirection="column"
        position="relative"
      >
        <StepIndicator currentStep={3} totalSteps={4} path="/sectionB" />
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
            Section C :{" "}
          </Typography>

          <Typography fontSize="12px" fontWeight={"400"} color={"#151515"}>
            {`List of immediate family members/close relatives* and their details of firm/ partnership/ company/ entity/ person (if any) in which Close Relatives as:`}
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
              <Box key={item?.id}>
                <FamilyBox
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
      <FamilyInfoDrawer
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
export default sectionC;
