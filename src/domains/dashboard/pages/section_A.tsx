import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import StepIndicator from "../../../components/stepIndicator";
import TextFieldComponent from "../../../components/TextFieldComponent";
import Button from "../../../components/Button";
import AddNewAddressDrawer from "./Component/AddNewDrawer";
import InfoBox from "./Component/InfoBox";
import { getShareholderTypes } from "./service/section";
import FormProvider from "../../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";

const sectionA = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState<number | null | string>("");
  const [idNumber, setIdNumber] = useState<number | null | string>("");
  const [nricNumber, setNRICNumber] = useState<number | null | string>("");
  const [passportNumber, setPassportNumber] = useState<number | null | string>(
    ""
  );
  const [department, setDepartment] = useState<number | null | string>("");
  const [position, setPosition] = useState<number | null | string>("");
  const [isExecutiveOfficer, setIsExecutiveOfficer] = useState<
    number | null | string
  >("");

  useEffect(() => {
    handleCLick();
  }, []);

  const handleCLick = async () => {
    try {
      const resp = await getShareholderTypes();
      console.log(resp, "resp");
    } catch (err: any) {}
  };

  const handleChange = (event: any, type: string) => {
    switch (type) {
      case "name":
        setFullName(event.target.value as string);
        break;
      case "staffId":
        setIdNumber(event.target.value as string);
        break;
      case "NRICNumber":
        setNRICNumber(event.target.value as string);
        break;
      case "passportNumber":
        setPassportNumber(event.target.value as string);
        break;
      case "department":
        setDepartment(event.target.value as string);
        break;
      case "position":
        setPosition(event.target.value as string);
        break;
      case "executiveOfficer":
        setIsExecutiveOfficer(event.target.value as string);
        break;
      default:
    }
  };

  const handleToggleClick = () => {
    setOpen(true);
  };

  const methods = useForm({ defaultValues: {} });
  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    console.log(data, "data");
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        sx={{ height: `calc(100% - 55px)` }}
        flexDirection="column"
        position="relative"
      >
        <StepIndicator currentStep={currentStep} totalSteps={4} />
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
            Section A :{" "}
          </Typography>

          <Typography fontSize="12px" fontWeight={"400"} color={"#151515"}>
            Personal Information
          </Typography>

          <Box marginTop={"16px"}>
            <Box padding={"16px"}>
              <TextFieldComponent
                autoFocus
                autoComplete="off"
                name="name"
                label="Staff Full Name"
                onChange={(e: any) => handleChange(e, "name")}
                value={fullName!}
              />
            </Box>

            <Box padding={"16px"}>
              <TextFieldComponent
                autoFocus
                autoComplete="off"
                name="staffId"
                label="Staff ID Number"
                onChange={(e: any) => handleChange(e, "staffId")}
                value={idNumber!}
              />
            </Box>

            <Box padding={"16px"}>
              <TextFieldComponent
                autoFocus
                autoComplete="off"
                name="NRICNumber"
                label="NRIC Number"
                onChange={(e: any) => handleChange(e, "NRICNumber")}
                value={nricNumber!}
              />
              <Typography
                sx={{ color: "#8A8A8C" }}
                fontWeight={"600"}
                fontSize={"12px"}
              >
                Enter the NRIC Number without space or dash
              </Typography>
            </Box>

            <Box padding={"16px"}>
              <TextFieldComponent
                autoFocus
                autoComplete="off"
                name="passportNumber"
                label="Passport Number(Non Malaysian)"
                onChange={(e: any) => handleChange(e, "passportNumber")}
                value={passportNumber!}
              />
            </Box>

            <Box padding={"16px"}>
              <TextFieldComponent
                autoFocus
                autoComplete="off"
                name="department"
                label="Unit / Department"
                onChange={(e: any) => handleChange(e, "department")}
                value={department!}
              />
            </Box>

            <Box padding={"16px"}>
              <TextFieldComponent
                autoFocus
                autoComplete="off"
                name="position"
                label="Position / Title"
                onChange={(e: any) => handleChange(e, "position")}
                value={position!}
              />
            </Box>

            <Box padding={"16px"}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="executiveOfficer">Executive Officer</InputLabel>
                <Select
                  labelId="executiveOfficer"
                  id="executiveOfficer"
                  value={isExecutiveOfficer}
                  onChange={(e: any) => {
                    if (e?.target?.value === "Yes") {
                      setOpen(true);
                    }
                    handleChange(e, "executiveOfficer");
                  }}
                  label="Age"
                  sx={{ width: "100%" }}
                  fullWidth
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
              <Typography
                sx={{ color: "#8A8A8C" }}
                fontWeight={"600"}
                fontSize={"12px"}
              >
                Members or management having authority and responsibility for
                planning, directing and/or controlling the activities of the
                Bank
              </Typography>
            </Box>

            <InfoBox />
          </Box>
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
                  },
                }}
                variant="contained"
                size="large"
                btnText="Continue"
                fullWidth
              />
            </Box>

            <Box sx={{ height: "auto" }}></Box>
          </Box>
        </Box>
      </Box>
      <AddNewAddressDrawer
        open={open}
        setOpen={setOpen}
        handleToggleClick={handleToggleClick}
        // newAddress={newAddress}
        // setNewAddress={setNewAddress}
      />
    </FormProvider>
  );
};
export default sectionA;
