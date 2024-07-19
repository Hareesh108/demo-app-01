import React, { useEffect } from "react";
import {
  Box,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from "@mui/icons-material/Close";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "../../../../components/Button";
import SelectInputComponent from "../../../../components/SelectInputComponent";
import TextFieldComponent from "../../../../components/TextFieldComponent";
import FormProvider from "../../../../components/hook-form/FormProvider";
import { Controller, useForm } from "react-hook-form";
import { ExecutiveOfficerInfo } from "../section_A";

type NewAddressType = {
  isCommMember: string;
  authorityLim?: string;
  whichComm?: string;
  creditMan: string;
  headOM: string;
};

type NewAddressProps = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  handleToggleClick?: () => void;
  executiveOfficerInfo?: ExecutiveOfficerInfo;
  setExecutiveOfficerInfo: React.Dispatch<
    React.SetStateAction<ExecutiveOfficerInfo>
  >;
  setIsExecutiveOfficer: any;
};

const AddNewAddressDrawer: React.FC<NewAddressProps> = ({
  open,
  setOpen,
  handleToggleClick,
  setExecutiveOfficerInfo,
  executiveOfficerInfo,
  setIsExecutiveOfficer,
}) => {
  const setSizeBanner = useMediaQuery("(min-width:769px)");

  console.log(executiveOfficerInfo, "Inside");

  const toggleDrawer =
    (openToggle: boolean) =>
    // eslint-disable-next-line consistent-return
    (event: React.KeyboardEvent | React.MouseEvent | React.FormEvent) => {
      if (event && event.type === "keydown") {
        if ((event as React.KeyboardEvent).key === "Shift") {
          return event.stopPropagation();
        }
        return false;
      }
      setOpen?.(false);
    };

  const addressSchema = Yup.object().shape({
    whichComm: Yup.string().required("Address Field is Required"),
    isCommMember: Yup.string(),
    authorityLim: Yup.string(),
    creditMan: Yup.string().required("Credit man is Required"),
    headOM: Yup.string().required("Select a State"),
  });

  const methods = useForm({
    defaultValues: {
      isCommMember: executiveOfficerInfo?.isCommMember ?? "",
      whichComm: executiveOfficerInfo?.whichComm ?? "",
      authorityLim: executiveOfficerInfo?.authorityLim ?? "",
      creditMan: executiveOfficerInfo?.creditMan ?? "",
      headOM: executiveOfficerInfo?.headOM ?? "",
    },
    resolver: yupResolver(addressSchema),
  });

  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const values = watch();
  console.log(values, "values");

  useEffect(() => {
    if (
      executiveOfficerInfo?.isCommMember === "" &&
      executiveOfficerInfo?.authorityLim === ""
    ) {
      reset();
    }
  }, [executiveOfficerInfo]);

  const onSubmit = (values: any) => {
    setExecutiveOfficerInfo(values);
    console.log(values, "///");
    setOpen?.(false);
    toggleDrawer(false);
  };

  return (
    <div key="rightDrawer">
      <SwipeableDrawer
        open={open}
        anchor="right"
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{
            width: setSizeBanner ? 448 : "100vw",
            display: "flex",
            flexDirection: "column",
          }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
          height="100vh"
        >
          <Box
            paddingX="30px"
            paddingY="16px"
            display="flex"
            flexDirection="row"
          >
            <IconButton
              style={{
                position: "absolute",
                top: "1%",
                right: "10%",
              }}
              edge="end"
              color="inherit"
              aria-label="close"
              onClick={toggleDrawer(false)}
            >
              <Tooltip
                title="Close"
                onClick={() => {
                  setIsExecutiveOfficer("No");
                }}
              >
                <CloseIcon sx={{ color: "Grey" }} />
              </Tooltip>
            </IconButton>
          </Box>
          <Box
            paddingX="30px"
            paddingY="16px"
            display="flex"
            flexDirection="row"
          >
            <Typography
              sx={{ fontSize: "24px", fontWeight: "800" }}
              height="max-content"
            >
              Additional Informations
            </Typography>
          </Box>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Box paddingX="30px" paddingY="16px">
              <Controller
                name="isCommMember"
                control={control}
                render={({ field }) => (
                  <SelectInputComponent
                    label="Are you a member Committee of Bank?"
                    options={[
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                    ]}
                    {...field}
                    fullWidth
                  />
                )}
              />
              <Typography sx={{ color: "red" }}>
                {errors.isCommMember?.message}
              </Typography>
            </Box>

            {values.isCommMember === "Yes" && (
              <Box paddingX="30px" paddingY="16px">
                <Controller
                  name="whichComm"
                  control={control}
                  render={({ field }) => (
                    <SelectInputComponent
                      label="If Yes, Please state which Committee"
                      options={[
                        { label: "MRCC", value: "MRCC" },
                        { label: "BRCC", value: "BRCC" },
                        { label: "ALCO", value: "ALCO" },
                      ]}
                      {...field}
                      fullWidth
                    />
                  )}
                />
                <Typography sx={{ color: "red" }}>
                  {errors.whichComm?.message}
                </Typography>
              </Box>
            )}

            <Box paddingX="30px" paddingY="16px">
              <Controller
                name="authorityLim"
                control={control}
                render={({ field }) => (
                  <SelectInputComponent
                    label="Officer - Authority Limit"
                    options={[
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                    ]}
                    {...field}
                    fullWidth
                  />
                )}
              />
              <Typography sx={{ color: "red" }}>
                {errors.authorityLim?.message}
              </Typography>
            </Box>

            <Box paddingX="30px" paddingY="16px">
              <Controller
                name="creditMan"
                control={control}
                render={({ field }) => (
                  <SelectInputComponent
                    label="Officer - Credit Manager"
                    options={[
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                    ]}
                    {...field}
                    fullWidth
                  />
                )}
              />
              <Typography sx={{ color: "red" }}>
                {errors.creditMan?.message}
              </Typography>
            </Box>

            <Box paddingX="30px" paddingY="16px">
              <Controller
                name="headOM"
                control={control}
                render={({ field }) => (
                  <SelectInputComponent
                    label="Officer - Head of Marketing Staff, Sales Staff, Frontliner"
                    options={[
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                    ]}
                    {...field}
                    fullWidth
                  />
                )}
              />
              <Typography sx={{ color: "red" }}>
                {errors.headOM?.message}
              </Typography>
            </Box>

            <Box
              display="flex"
              padding="16px"
              flex={1}
              paddingX={5}
              sx={{
                alignItems: {
                  xs: "flex-end",
                  md: "flex-start",
                  lg: "flex-start",
                },
                justifyContent: {
                  xs: "center",
                  md: "flex-end",
                  lg: "flex-end",
                },
                width: "100%",
              }}
            >
              <Button
                btnText="Save & Continue"
                size="large"
                fullWidth={!setSizeBanner}
                variant="contained"
              />
            </Box>
          </FormProvider>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default AddNewAddressDrawer;
