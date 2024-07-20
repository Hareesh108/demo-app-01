import React, { MouseEventHandler, ReactNode } from "react";
import Button from "../../../../components/Button";
import SelectInputComponent from "../../../../components/SelectInputComponent";
import TextFieldComponent from "../../../../components/TextFieldComponent";
import {
  Box,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from "@mui/icons-material/Close";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormProvider from "../../../../components/hook-form";
import { useForm } from "react-hook-form";

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

// Declare obj
type NewAddressProps = {
  open?: boolean;
  closeDrawer?: () => void;
};

const FamilyInfoDrawer: React.FC<NewAddressProps> = ({ open, closeDrawer }) => {
  const setSizeBanner = useMediaQuery("(min-width:769px)");

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
      closeDrawer;
    };

  const methods = useForm({
    defaultValues: {
      fullName: "",
      nationalId: "",
      oldNationalId: null,
      passportNumber: null,
      countryCode: null,
      name: "",
      businessRegistrationNumber: "",
      oldBusinessRegistrationNumber: null,
      position: "",
      shareholder: "",
      relationship: "",
    },
    // resolver: yupResolver(addressSchema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isValid },
  } = methods;

  const values = watch();
  console.log(values, "values");

  const onSubmit = async (data: any) => {
    console.log(data, "data");
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
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
                onClick={closeDrawer}
              >
                <Tooltip title="Close">
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
                List of immediate family members/ close relatives
              </Typography>
            </Box>
            <Box paddingX="30px" paddingY="16px">
              <TextFieldComponent
                label="Name as per NRIC"
                id="name"
                name="name"
              />
            </Box>
            <Box paddingX="30px" paddingY="16px">
              <TextFieldComponent
                label="NRIC Number"
                id="nricNumber"
                name="nricNumber"
              />
            </Box>
            <Box paddingX="30px" paddingY="16px">
              <TextFieldComponent
                label="Old NRIC Number (if any)"
                id="oldNRICNumber"
                name="oldNRICNumber"
              />
            </Box>
            <Box paddingX="30px" paddingY="16px">
              <TextFieldComponent
                label="Passport Number (if any)"
                id="passportNo"
                name="passportNo"
              />
            </Box>
            <Box paddingX="30px" paddingY="16px">
              <SelectInputComponent
                value={"nn"}
                label="Relationship"
                name="relationship"
                options={[
                  {
                    label: "Director",
                    value: "Director",
                  },
                  {
                    label: "Executive Officer",
                    value: "Executive Officer",
                  },
                  {
                    label: "Head of Department",
                    value: "Head of Department",
                  },
                  {
                    label: "Manager",
                    value: "Manager",
                  },
                  {
                    label: "Officer",
                    value: "Officer",
                  },
                ]}
                fullWidth
              />
            </Box>
            <Box paddingX="30px" paddingY="16px">
              <TextFieldComponent
                label="Business Registration Number"
                id="bRegNumber"
                name="bRegNumber"
              />
            </Box>
            <Box paddingX="30px" paddingY="16px">
              <TextFieldComponent
                label="Name of Company/ Entity connect to"
                id="cmpnyName"
                name="cmpnyName"
              />
            </Box>
            <Box paddingX="30px" paddingY="16px">
              <SelectInputComponent
                value={"hh"}
                label="Position held at that company"
                name="positionHeld"
                options={[
                  {
                    label: ">50%",
                    value: ">50%",
                  },
                  {
                    label: "≥20%, ≤50%",
                    value: "≥20%, ≤50%",
                  },
                  {
                    label: "<20%",
                    value: "<20%",
                  },
                  {
                    label: "NIL",
                    value: "NIL",
                  },
                ]}
                fullWidth
              />
            </Box>
            <Box paddingX="30px" paddingY="16px">
              <SelectInputComponent
                label="Shareholder details in the Organisation"
                name="shareHolderDetails"
                options={[
                  {
                    label: ">50%",
                    value: ">50%",
                  },
                  {
                    label: "≥20%, ≤50%",
                    value: "≥20%, ≤50%",
                  },
                ]}
                value={"bb"}
                fullWidth
              />
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
                btnText="Save & Add"
                size="large"
                fullWidth={!setSizeBanner}
                variant="contained"
              />
            </Box>
            =
          </Box>
        </SwipeableDrawer>
      </div>
    </FormProvider>
  );
};

export default FamilyInfoDrawer;
