import React, { ReactNode } from "react";
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

type NewAddressType = {
  isCommMember: string;
  authorityLim?: string;
  whichComm?: string;
  creditMan?: string;
  headOM: string;
};

type NewAddressProps = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  handleToggleClick?: () => void;
  newAddress?: NewAddressType;
  setNewAddress?: React.Dispatch<
    React.SetStateAction<{
      isCommMember: string;
      authorityLim?: string;
      whichComm?: string;
      creditMan?: string;
      headOM: string;
    }>
  >;
};

const AddNewAddressDrawer: React.FC<NewAddressProps> = ({
  open,
  setOpen,
  handleToggleClick,
  newAddress,
  setNewAddress,
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
      setOpen?.(false);
    };

  const addressSchema = Yup.object().shape({
    whichComm: Yup.string().required("Address Field is Required"),
    isCommMember: Yup.string(),
    authorityLim: Yup.string(),
    creditMan: Yup.string().required("Credit man is Required"),
    headOM: Yup.string().required("Select a State"),
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
          onClick={toggleDrawer(false)}
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
          Additional Informations
        </Typography>
      </Box>
      <Formik
        initialValues={{
          isCommMember: newAddress?.isCommMember || "",
          whichComm: newAddress?.whichComm || "",
          authorityLim: newAddress?.authorityLim || "",
          creditMan: newAddress?.creditMan || "",
          headOM: newAddress?.headOM || "",
        }}
        enableReinitialize
        validationSchema={addressSchema}
        onSubmit={async (values: any, { resetForm }: any) => {
          console.log(values, "///");

          setNewAddress?.({
            ...values,
          });
          setOpen?.(false);
          toggleDrawer(false)
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
              <SelectInputComponent
                label="Are you a member Committee of Bank?"
                name="isCommMember"
                options={[
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" },
                ]}
                onChange={handleChange}
                value={values.isCommMember}
                fullWidth
              />
              <Typography sx={{ color: "red" }}>
                {
                  (errors.isCommMember && touched.isCommMember
                    ? errors.isCommMember
                    : null) as ReactNode
                }
              </Typography>
            </Box>

            {values.isCommMember === "Yes" && (
              <Box paddingX="30px" paddingY="16px">
                <SelectInputComponent
                  label="If Yes, Please state which Committee"
                  name="whichComm"
                  options={[
                    { label: "MRCC", value: "MRCC" },
                    { label: "BRCC", value: "BRCC" },
                    { label: "ALCO", value: "ALCO" },
                  ]}
                  onChange={handleChange}
                  value={values.whichComm}
                  fullWidth
                />
                <Typography sx={{ color: "red" }}>
                  {
                    (errors.isCommMember && touched.isCommMember
                      ? errors.isCommMember
                      : null) as ReactNode
                  }
                </Typography>
              </Box>
            )}

            <Box paddingX="30px" paddingY="16px">
              <SelectInputComponent
                label="Officer - Authority Limit"
                name="authorityLim"
                options={[
                  {
                    label: "Yes",
                    value: "Yes",
                  },
                  {
                    label: "No",
                    value: "No",
                  },
                ]}
                onChange={handleChange}
                value={values.authorityLim}
                fullWidth
              />
              <Typography sx={{ color: "red" }}>
                {
                  (errors.city && touched.city
                    ? errors.city
                    : null) as ReactNode
                }
              </Typography>
            </Box>

            <Box paddingX="30px" paddingY="16px">
              <SelectInputComponent
                label="Officer - Credit Manager"
                name="creditMan"
                options={[
                  {
                    label: "Yes",
                    value: "Yes",
                  },
                  {
                    label: "No",
                    value: "No",
                  },
                ]}
                onChange={handleChange}
                value={values.creditMan}
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
                label="Officer - Head of Marketing Staff, Sales Staff, Frontliner"
                name="headOM"
                options={[
                  {
                    label: "Yes",
                    value: "Yes",
                  },
                  {
                    label: "No",
                    value: "No",
                  },
                ]}
                onChange={handleChange}
                value={values.headOM}
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
                disabled={!isValid || !dirty}
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
