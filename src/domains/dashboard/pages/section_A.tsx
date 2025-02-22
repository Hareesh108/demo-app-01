import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import * as yup from "yup";

import StepIndicator from "../../../components/stepIndicator";
import TextFieldComponent from "../../../components/TextFieldComponent";
import Button from "../../../components/Button";
import AddNewAddressDrawer from "./Component/AddNewDrawer";
import InfoBox from "./Component/InfoBox";
import { getShareholderTypes } from "./service/section";
import FormProvider from "../../../components/hook-form/FormProvider";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  setSectionAData,
  setSectionADataInitial,
} from "../../../slices/sectionASlice";
import { setLeftBarProgress } from "../../../slices/StepperChecklistSlice";
import { useNavigate } from "react-router-dom";
import { setSectionAExecutiveInitial } from "../../../slices/sectionAExecutiveSlice";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ExecutiveOfficerInfo {
  authorityLim: string;
  creditMan: string;
  headOM: string;
  isCommMember: string;
  whichComm: string;
}

const sectionA = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { NRICNumber, name, staffId } = useAppSelector(
    (state) => state.reducer.sectionA
  );

  const [open, setOpen] = useState(false);

  const [isExecutiveOfficer, setIsExecutiveOfficer] = useState("");

  const [executiveOfficerInfo, setExecutiveOfficerInfo] =
    useState<ExecutiveOfficerInfo>({
      authorityLim: "",
      creditMan: "",
      headOM: "",
      isCommMember: "",
      whichComm: "",
    });

  console.log(executiveOfficerInfo, "executiveOfficerInfo");

  const handleCLick = async () => {
    try {
      const resp = await getShareholderTypes();
      console.log(resp, "resp");
    } catch (err: any) {
      console.log(err, "err");
    }
  };

  useEffect(() => {
    handleCLick();
    dispatch(setLeftBarProgress({ step: 0 }));
  }, []);

  useEffect(() => {
    dispatch(setSectionAExecutiveInitial());
    dispatch(setSectionADataInitial());
  }, []);

  const handleToggleClick = () => {
    setOpen(true);
  };

  const schema = yup.object().shape({
    NRICNumber: yup.string().required("NRIC Number is required"),
    department: yup.string().required("Department is required"),
    name: yup.string().required("Name is required"),
    passportNumber: yup.string(),
    position: yup.string().required("Position is required"),
    staffId: yup.string().required("Staff ID is required"),
    executiveOfficer: yup.string().required("This field is required"),
  });

  const methods = useForm({
    defaultValues: {
      NRICNumber: "",
      department: "",
      name: "",
      passportNumber: "",
      position: "",
      staffId: "",
      executiveOfficer: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const {
    handleSubmit,
    control,
    watch,
    formState: { isValid },
  } = methods;

  const values = watch();
  console.log(values, "values///");

  console.log(NRICNumber, name, staffId, " NRICNumber,name,staffId ");

  const onSubmit = async (data: any) => {
    console.log(data, "data");
    dispatch(setSectionAData(data));
    navigate("/sectionB");
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          sx={{ height: `calc(100% - 55px)` }}
          flexDirection="column"
          position="relative"
        >
          <StepIndicator currentStep={1} totalSteps={4} path="/" />
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
                />
              </Box>

              <Box padding={"16px"}>
                <TextFieldComponent
                  autoFocus
                  autoComplete="off"
                  name="staffId"
                  label="Staff ID Number"
                />
              </Box>

              <Box padding={"16px"}>
                <TextFieldComponent
                  autoFocus
                  autoComplete="off"
                  name="NRICNumber"
                  label="NRIC Number"
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
                />
              </Box>

              <Box padding={"16px"}>
                <TextFieldComponent
                  autoFocus
                  autoComplete="off"
                  name="department"
                  label="Unit / Department"
                />
              </Box>

              <Box padding={"16px"}>
                <TextFieldComponent
                  autoFocus
                  autoComplete="off"
                  name="position"
                  label="Position / Title"
                />
              </Box>

              <Box padding={"16px"}>
                <Controller
                  name="executiveOfficer"
                  control={control}
                  rules={{ required: "" }}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <FormControl
                        variant="standard"
                        sx={{ width: "100%" }}
                        error={!!error}
                      >
                        <InputLabel
                          id="executiveOfficer"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "normal",
                            "&.Mui-focused": {
                              color: "#58595B",
                            },
                            "&.Mui-error": {
                              color: "red",
                            },
                          }}
                          htmlFor={`standard-${name}`}
                        >
                          Executive Officer
                        </InputLabel>
                        <Select
                          {...field}
                          labelId="executiveOfficer"
                          id="executiveOfficer"
                          value={isExecutiveOfficer}
                          onChange={(e: any) => {
                            field.onChange(e);
                            if (e?.target?.value === "Yes") {
                              setOpen(true);
                            } else {
                              setExecutiveOfficerInfo({
                                authorityLim: "",
                                creditMan: "",
                                headOM: "",
                                isCommMember: "",
                                whichComm: "",
                              });
                            }
                            setIsExecutiveOfficer(e?.target?.value);
                          }}
                          label="Age"
                          sx={{ width: "100%" }}
                          fullWidth
                        >
                          <MenuItem value={"Yes"}>Yes</MenuItem>
                          <MenuItem value={"No"}>No</MenuItem>
                        </Select>
                        {error && (
                          <FormHelperText id="executiveOfficer">
                            {error?.message}
                          </FormHelperText>
                        )}
                      </FormControl>
                      <Typography
                        sx={{ color: "#8A8A8C" }}
                        fontWeight={"600"}
                        fontSize={"12px"}
                      >
                        Members or management having authority and
                        responsibility for planning, directing and/or
                        controlling the activities of the Bank
                      </Typography>
                    </>
                  )}
                />
              </Box>

              {executiveOfficerInfo.isCommMember !== "" &&
                isExecutiveOfficer !== "" &&
                isExecutiveOfficer !== "No" && (
                  <InfoBox
                    executiveOfficerInfo={executiveOfficerInfo}
                    setOpen={setOpen}
                  />
                )}
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
                  disabled={!isValid}
                />
              </Box>

              <Box sx={{ height: "auto" }}></Box>
            </Box>
          </Box>
        </Box>
      </FormProvider>
      <AddNewAddressDrawer
        open={open}
        setOpen={setOpen}
        handleToggleClick={handleToggleClick}
        executiveOfficerInfo={executiveOfficerInfo}
        setExecutiveOfficerInfo={setExecutiveOfficerInfo}
        setIsExecutiveOfficer={setIsExecutiveOfficer}
      />
    </>
  );
};
export default sectionA;
