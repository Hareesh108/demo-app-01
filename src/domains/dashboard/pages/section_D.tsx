import React, { useEffect } from "react";
import { Box, FormControl, Typography } from "@mui/material";
import StepIndicator from "../../../components/stepIndicator";
import Button from "../../../components/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { setLeftBarProgress } from "../../../slices/StepperChecklistSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import FormProvider from "../../../components/hook-form/FormProvider";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { sentConnectedPartiesAPi } from "./service/section";
import { useSnackbar } from "notistack";
import { AxiosError } from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ConfirmDialog from "../../../components/dialog/ConfirmDialog";
import { LoadingButton } from "@mui/lab";
import { truncateSync } from "fs";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
  declare: yup.boolean().oneOf([true], "You must agree to the declaration"),
  understand: yup
    .boolean()
    .oneOf([true], "You must agree to the understanding"),
  infoDeclare: yup
    .boolean()
    .oneOf([true], "You must agree to the information declaration"),
  allCheck: yup.boolean(),
});

const sectionD = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [onSuccess, setOnSuccess] = React.useState(false);
  const navigate = useNavigate();

  const sectionCData = useAppSelector((state) => state.reducer.sectionC);

  console.log(sectionCData, "sectionCData");

  const {
    name,
    department,
    NRICNumber,
    passportNumber,
    position,
    staffId,
    executiveOfficer,
  } = useAppSelector((state) => state.reducer.sectionA);
  const { authorityLim, isCommMember, whichComm, creditMan, headOM } =
    useAppSelector((state) => state.reducer.sectionAExecutive);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLeftBarProgress({ step: 3 }));
  }, []);

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      declare: false,
      understand: false,
      infoDeclare: false,
      allCheck: false,
    },
    mode: "onChange",
  });

  const {
    handleSubmit,
    watch,
    control,
    setValue,
    reset,
    formState: { isValid, isSubmitting },
  } = methods;

  const values = watch();

  console.log(values, "values");

  console.log(
    name,
    department,
    NRICNumber,
    passportNumber,
    position,
    staffId,
    executiveOfficer,
    "::>>department>>NRICNumber>>passportNumber>>position>>staffId>>executiveOfficer"
  );

  console.log(
    authorityLim,
    isCommMember,
    whichComm,
    creditMan,
    headOM,
    "::>>authorityLim,isCommMember, whichComm, creditMan, headOM"
  );

  useEffect(() => {
    const allChecked =
      values.declare && values.understand && values.infoDeclare;
    if (values.allCheck !== allChecked) {
      setValue("allCheck", allChecked);
    }
  }, [values.declare, values.understand, values.infoDeclare, setValue]);

  const handleAllCheck = (checked: boolean) => {
    setValue("declare", checked, { shouldValidate: true });
    setValue("understand", checked, { shouldValidate: true });
    setValue("infoDeclare", checked, { shouldValidate: true });
  };

  console.log(sectionCData[0], "sectionCData.length");

  const sendConnectedParty = async (data: any) => {
    console.log(data, "sendConnectedParty");

    const payload = {
      fullName: name,
      department: department,
      employmentId: staffId,
      passportNumber: passportNumber,
      countryCode: null,
      nationalId: NRICNumber,
      oldNationalId: null,
      position: position,
      executiveOfficer: executiveOfficer === "Yes",
      committeeMember: isCommMember,
      commiteeeMemberType: isCommMember ? whichComm : null,
      officerAuthorityLimit: authorityLim,
      officerCreditManager: creditMan,
      officerHeadOfMarketing: headOM,
      businesses: null,
      relatives: sectionCData[0] ? sectionCData : null,
      createDeclaration: data?.declare,
      updateDeclaration: data?.understand,
      confirmDeclaration: data?.infoDeclare,
    };

    try {
      const res = await sentConnectedPartiesAPi(payload);
      console.log(res, "res");
      setOnSuccess(true);
    } catch (err) {
      reset();
      const axiosError = err as AxiosError<{ message: string }>;
      console.log(err);
      console.log(axiosError, "axiosError");
      enqueueSnackbar(
        axiosError?.response?.data?.message ?? "Something went wrong",
        {
          variant: "error",
        }
      );
    }
  };

  const postUnbindDevice = async () => {
    navigate("/");
  };

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
            <Controller
              name="declare"
              control={control}
              defaultValue={false}
              render={({ field, fieldState: { error } }) => (
                <FormControl variant="standard" fullWidth error={!!error}>
                  <FormControlLabel
                    sx={{ alignItems: "flex-start", mb: "16px" }}
                    control={
                      <Checkbox
                        {...field}
                        size="medium"
                        checked={field.value}
                      />
                    }
                    label={
                      <Typography
                        fontSize="12px"
                        fontWeight="400"
                        style={{ color: "#151515" }}
                      >
                        I hereby make the following declaration of information
                        on myself, my close relatives and parties connected to
                        me/them, according to the definition in the above BNM
                        Guidelines.
                      </Typography>
                    }
                  />
                </FormControl>
              )}
            />

            <Controller
              name="understand"
              control={control}
              defaultValue={false}
              render={({ field, fieldState: { error } }) => (
                <FormControl variant="standard" fullWidth error={!!error}>
                  <FormControlLabel
                    sx={{ alignItems: "flex-start", mb: "16px" }}
                    control={
                      <Checkbox
                        {...field}
                        size="medium"
                        checked={field.value}
                      />
                    }
                    label={
                      <Typography
                        fontSize="12px"
                        fontWeight="400"
                        style={{ color: "#151515" }}
                      >
                        I understand that I shall also be responsible to update,
                        in the for of additions, removal, or changes to the
                        information from time to time or as required.
                      </Typography>
                    }
                  />
                </FormControl>
              )}
            />

            <Controller
              name="infoDeclare"
              control={control}
              defaultValue={false}
              render={({ field, fieldState: { error } }) => (
                <FormControl variant="standard" fullWidth error={!!error}>
                  <FormControlLabel
                    sx={{ alignItems: "flex-start", mb: "16px" }}
                    control={
                      <Checkbox
                        {...field}
                        size="medium"
                        checked={field.value}
                      />
                    }
                    label={
                      <Typography
                        fontSize="12px"
                        fontWeight="400"
                        style={{ color: "#151515" }}
                      >
                        I Declare that the information submitted herewith is
                        accurate and complete, to the best of my knowledge.
                      </Typography>
                    }
                  />
                </FormControl>
              )}
            />

            <Controller
              name="allCheck"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  sx={{ mb: "16px" }}
                  control={
                    <Checkbox
                      {...field}
                      size="medium"
                      checked={field.value}
                      onChange={(e) => handleAllCheck(e.target.checked)}
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
              )}
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
              <LoadingButton
                sx={{
                  marginTop: 1,
                  width: {
                    xs: "100%",
                    sm: "max-content",
                    alignSelf: "flex-end",
                    borderRadius: 25,
                  },
                }}
                fullWidth
                size="large"
                disabled={!isValid}
                loading={isSubmitting}
                variant="contained"
                type="submit"
              >
                Continue
              </LoadingButton>
            </Box>
          </Box>
        </Box>
      </Box>

      <ConfirmDialog
        open={onSuccess}
        handleClose={() => setOnSuccess(false)}
        handleSubmit={postUnbindDevice}
        dialogTitle="Confirmation"
        dialogDescription="Your declaration successful submitted, please check your email for updates about your declaration. Thank you"
      />
    </FormProvider>
  );
};
export default sectionD;
