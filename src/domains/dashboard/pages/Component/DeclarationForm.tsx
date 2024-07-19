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

type NewDeclarationForm = {
  id?: string;
  buisnRegNoOld?: string;
  buisnRegNo?: string;
  cmpnyName?: string;
  position?: string;
  shareHolderDetails?: string;
};

// Declare obj
type NewAddressProps = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  closeDrawer?: () => void;
  isEdit?: boolean | undefined;
  currentForm?: NewDeclarationForm;
  createForm?: MouseEventHandler<HTMLButtonElement> | any;
  updateConfig?: MouseEventHandler<HTMLButtonElement> | any;
};

const AddNewAddressDrawer: React.FC<NewAddressProps> = ({
  open,
  setOpen,
  closeDrawer,
  currentForm,
  createForm,
  updateConfig,
  isEdit,
}) => {
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

  const addressSchema = Yup.object().shape({
    buisnRegNoOld: Yup.string(),
    buisnRegNo: Yup.string().required("Business Registration is Required"),
    cmpnyName: Yup.string().required("Company Name is Required"),
    position: Yup.string().required("Position is Required"),
    shareHolderDetails: Yup.string().required("Select a Shareholder details"),
  });

  const inputValue = () => (
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
      <Box paddingX="30px" paddingY="16px" display="flex" flexDirection="row">
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
      <Box paddingX="30px" paddingY="16px" display="flex" flexDirection="row">
        <Typography
          sx={{ fontSize: "24px", fontWeight: "800" }}
          height="max-content"
        >
          Company Declaration
        </Typography>
      </Box>
      <Formik
        initialValues={{
          id: currentForm?.id || Date.now().toString(),
          cmpnyName: currentForm?.cmpnyName || "",
          buisnRegNo: currentForm?.buisnRegNo || "",
          buisnRegNoOld: currentForm?.buisnRegNoOld || "",
          position: currentForm?.position || "",
          shareHolderDetails: currentForm?.shareHolderDetails || "",
        }}
        enableReinitialize
        validationSchema={addressSchema}
        onSubmit={async (values: any, { resetForm }: any) => {
          if (isEdit) {
            console.log(isEdit, "...update");

            updateConfig(values);
          } else {
            // const newForm = values;
            // newForm.id = Date.now().toString();
            // console.log(isEdit, "...create");
            createForm(values);
          }
          closeDrawer;
          resetForm();
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        }: any) => (
          <Form onSubmit={handleSubmit}>
            <Box paddingX="30px" paddingY="16px">
              <TextFieldComponent
                label="Company Name connected to you (if any)"
                id="cmpnyName"
                name="cmpnyName"
                onBlur={handleBlur}
              />
              <Typography sx={{ color: "red" }}>
                {
                  (errors.cmpnyName && touched.cmpnyName
                    ? errors.cmpnyName
                    : null) as ReactNode
                }
              </Typography>
            </Box>

            <Box paddingX="30px" paddingY="16px">
              <TextFieldComponent
                label="Business Registration Number"
                id="cmpnyName"
                name="buisnRegNo"
                onBlur={handleBlur}
              />
              <Typography sx={{ color: "red" }}>
                {
                  (errors.addressOne && touched.addressOne
                    ? errors.addressOne
                    : null) as ReactNode
                }
              </Typography>
            </Box>

            <Box paddingX="30px" paddingY="16px">
              <TextFieldComponent
                label="Business Registration Number (Old) - Optional"
                id="cmpnyName"
                name="buisnRegNoOld"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.buisnRegNoOld}
              />
              <Typography sx={{ color: "red" }}>
                {
                  (errors.addressOne && touched.addressOne
                    ? errors.addressOne
                    : null) as ReactNode
                }
              </Typography>
            </Box>

            <Box paddingX="30px" paddingY="16px">
              <SelectInputComponent
                label="Position Held"
                name="position"
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
                onChange={handleChange}
                value={values.position}
                fullWidth
              />
              <Typography sx={{ color: "red" }}>
                {
                  (errors.creditMan && touched.creditMan
                    ? errors.creditMan
                    : null) as ReactNode
                }
              </Typography>
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
                  {
                    label: "<20%",
                    value: "<20%",
                  },
                  {
                    label: "NIL",
                    value: "NIL",
                  },
                ]}
                onChange={handleChange}
                value={values.shareHolderDetails}
                fullWidth
              />
              <Typography sx={{ color: "red" }}>
                {
                  (errors.headOM && touched.headOM
                    ? errors.headOM
                    : null) as ReactNode
                }
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
                onClick={handleSubmit}
                disabled={!isValid}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );

  return (
    <div key="rightDrawer">
      <SwipeableDrawer
        open={open}
        anchor="right"
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {inputValue()}
      </SwipeableDrawer>
    </div>
  );
};

export default AddNewAddressDrawer;
