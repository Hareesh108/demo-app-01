import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import StepIndicator from "../../../components/stepIndicator";
import Button from "../../../components/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { setLeftBarProgress } from "../../../slices/StepperChecklistSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import FormProvider from "../../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { sentConnectedPartiesAPi } from "./service/section";

type newDeclarationForm = {
  id?: string;
  buisnRegNoOld: string;
  buisnRegNo?: string;
  cmpnyName?: string;
  shareHolderDetails?: string;
};

const sectionD = () => {
  const [declare, setDeclare] = useState<boolean>(false);
  const [understand, setUnderstand] = useState<boolean>(false);
  const [infoDeclare, setInfoDeclare] = useState<boolean>(false);
  const [allDeclare, setAllDeclare] = useState<boolean>(false);

  const { name, department, NRICNumber, passportNumber, position, staffId } =
    useAppSelector((state) => state.reducer.sectionA);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLeftBarProgress({ step: 3 }));
  }, []);

  console.log(declare, "declare");
  console.log(understand, "understand");
  console.log(infoDeclare, "infoDeclare");
  console.log(allDeclare, "allDeclare");

  const sendConnectedParty = async (data: any) => {
    console.log(data, "data");

    const payload = {
      fullName: name,
      department: department,
      employmentId: staffId,
      passportNumber: passportNumber,
      countryCode: null,
      nationalId: NRICNumber,
      oldNationalId: null,
      position: position,
      executiveOfficer: true,
      committeeMember: true,
      commiteeeMemberType: "MRCC",
      officerAuthorityLimit: true,
      officerCreditManager: true,
      officerHeadOfMarketing: true,

      businesses: [
        {
          name: "string",
          businessRegistrationNumber: "string",
          oldBusinessRegistrationNumber: "string",
          position: "DIRECTOR",
          shareholder: "MORE_THAN_50",
        },
      ],
      relatives: [
        {
          fullName: "string",
          nationalId: "string",
          oldNationalId: "string",
          passportNumber: "string",
          countryCode: "string",
          businesses: [
            {
              name: "string",
              businessRegistrationNumber: "string",
              oldBusinessRegistrationNumber: "string",
              position: "DIRECTOR",
              shareholder: "MORE_THAN_50",
            },
          ],
          relationship: "SF",
        },
      ],
      createDeclaration: true,
      updateDeclaration: true,
      confirmDeclaration: true,
    };

    try {
      const res = await sentConnectedPartiesAPi(payload);
      console.log(res, "res");
    } catch (err) {
      console.log(err);
    }
  };

  const methods = useForm({
    defaultValues: {
      name: "",
    },
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(sendConnectedParty)}>
      <Box
        display="flex"
        sx={{ height: `calc(100% - 55px)` }}
        flexDirection="column"
        position="relative"
      >
        <StepIndicator currentStep={4} totalSteps={4} path="/sectionC" />

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
            Declaration
          </Typography>
          <Typography fontSize="24px" fontWeight={"800"}>
            BOOST BANK BERHAD
          </Typography>

          <Typography fontSize="12px" fontWeight={"600"} color={"#151515"}>
            {`CONNECTED PARTY DECLARATION ON STAFF & FAMILY MEMBERS IN RELATION TO BNM
“GUIDELINE ON CREDIT TRANSACTION AND EXPOSURES WITH CONNECTED PARTIES”`}
          </Typography>

          <FormGroup sx={{ mt: "16px" }}>
            <FormControlLabel
              sx={{ alignItems: "flex-start", mb: "16px" }}
              control={
                <Checkbox
                  size="medium"
                  checked={declare}
                  onChange={() => setDeclare(!declare)}
                />
              }
              label={
                <Typography
                  fontSize="12px"
                  fontWeight="400"
                  style={{ color: "#151515" }}
                >
                  I hereby make the following declaration of information on
                  myself, my close relatives and parties connected to me/them,
                  according to the definition in the above BNM Guidelines.
                </Typography>
              }
            />

            <FormControlLabel
              sx={{ alignItems: "flex-start", mb: "16px" }}
              control={
                <Checkbox
                  size="medium"
                  checked={understand}
                  onChange={() => setUnderstand(!understand)}
                />
              }
              label={
                <Typography
                  fontSize="12px"
                  fontWeight="400"
                  style={{ color: "#151515" }}
                >
                  I understand that I shall also be responsible to update, in
                  the for of additions, removal, or changes to the information
                  from time to time or as required.
                </Typography>
              }
            />

            <FormControlLabel
              sx={{ alignItems: "flex-start", mb: "16px" }}
              control={
                <Checkbox
                  size="medium"
                  checked={infoDeclare}
                  onChange={() => setInfoDeclare(!infoDeclare)}
                />
              }
              label={
                <Typography
                  fontSize="12px"
                  fontWeight="400"
                  style={{ color: "#151515" }}
                >
                  I Declare that the information submitted herewith is accurate
                  and complete, to the best of my knowledge.
                </Typography>
              }
            />

            <FormControlLabel
              sx={{ mb: "16px" }}
              control={
                <Checkbox
                  size="medium"
                  checked={allDeclare}
                  onChange={() => {
                    setDeclare(true);
                    setInfoDeclare(true);
                    setAllDeclare(!allDeclare);
                    setUnderstand(true);
                  }}
                />
              }
              label={
                <Typography
                  fontSize="12px"
                  fontWeight="400"
                  style={{ color: "#151515" }}
                >
                  Select All
                </Typography>
              }
            />
          </FormGroup>

          <Box>
            <Typography fontSize="12px" fontWeight="600" color="#151515">
              Note :
            </Typography>
            <Typography fontSize="12px" fontWeight="400" color="#151515">
              *For more information, please refer to the BNM Guidelines and
              Group Credits Guidelines Section 4.2.9 on Credit Transaction and
              Exposures with Connected Parties.
            </Typography>
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
                  },
                }}
                variant="contained"
                size="large"
                btnText="Submit"
                onClick={() => {}}
                fullWidth
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </FormProvider>
  );
};
export default sectionD;
