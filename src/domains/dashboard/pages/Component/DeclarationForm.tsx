import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
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
import * as Yup from "yup";
import FormProvider from "../../../../components/hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  getPositionTypes,
  getRelationshipTypes,
  getShareholderTypes,
} from "../service/section";
import { FamilyData } from "../section_C";
import { EmployeeBusiness } from "../../../../slices/sectionBSlice";
import { LabelValueTypes } from "../../types";

// Declare obj
type NewAddressProps = {
  open?: boolean;
  setFamilyData: any;
  setOpen: any;
  editFormData: EmployeeBusiness | null;
  familyData: EmployeeBusiness[];
  setEditFormData: Dispatch<
    SetStateAction<EmployeeBusiness | null | undefined>
  >;
  edit: boolean;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  businessRegistrationNumber: Yup.string().required(
    "Business registration number is required"
  ),
  oldBusinessRegistrationNumber: Yup.string(),
  position: Yup.string().required("Position is required"),
  shareholder: Yup.string().required("Shareholder details are required"),
});

const DeclarationForm: React.FC<NewAddressProps> = ({
  open,
  setOpen,
  setFamilyData,
  editFormData,
  setEditFormData,
  familyData,
  edit,
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
      setEditFormData(null);
      setOpen?.(false);
    };

  const [positionList, setPositionList] = useState<LabelValueTypes>([]);
  console.log(positionList, "positionList");

  const getPositionTypesList = async () => {
    try {
      const res = await getPositionTypes();

      if (res?.status === 200) {
        const transformedData = res?.data.map(
          (item: { name: string; value: string }) => ({
            label: item.name,
            value: item.value,
          })
        );
        setPositionList(transformedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [shareholderList, setShareholderList] = useState<LabelValueTypes>([]);
  console.log(shareholderList, "shareholderList");

  const getShareholderTypesList = async () => {
    try {
      const res = await getShareholderTypes();

      if (res?.status === 200) {
        const transformedData = res?.data.map(
          (item: { name: string; value: string }) => ({
            label: item.name,
            value: item.value,
          })
        );
        setShareholderList(transformedData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPositionTypesList();
    getShareholderTypesList();
  }, []);
  // ----------------------------------------------------------------------------
  const defaultValues = useMemo(
    () => ({
      name: editFormData?.name ?? "",
      businessRegistrationNumber:
        editFormData?.businessRegistrationNumber ?? "",
      oldBusinessRegistrationNumber:
        editFormData?.oldBusinessRegistrationNumber ?? "",
      position: editFormData?.position ?? "",
      shareholder: editFormData?.shareholder ?? "",
    }),
    [editFormData]
  );

  console.log(editFormData, "editFormData");

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    watch,
    reset,
    formState: { isValid },
  } = methods;

  useEffect(() => {
    if (open) {
      reset(defaultValues);
    }
    if (edit) {
      reset(defaultValues);
    }
  }, [open, edit]);

  const values = watch();
  console.log(values, "values");

  const onSubmit = async (data: any) => {
    console.log("Hii");

    console.log(data, "data");

    setFamilyData((prev: FamilyData[]) => {
      const itemIndex = prev.findIndex(
        (item: EmployeeBusiness) =>
          item?.businessRegistrationNumber ===
          values?.businessRegistrationNumber
      );

      if (edit && itemIndex !== -1) {
        // If editing and the item exists, update the existing item
        const updatedFamilyData = [...prev];
        updatedFamilyData[itemIndex] = data;
        return updatedFamilyData;
      } else {
        // If adding a new item or item does not exist, append the new data
        return [...prev, data];
      }
    });
    setOpen(false);
    toggleDrawer(false);
    setEditFormData(null);
  };

  return (
    <div key="rightDrawer">
      <SwipeableDrawer
        open={open}
        anchor="right"
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
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
                onClick={() => {
                  setOpen(false);
                  toggleDrawer(false);
                  setEditFormData(null);
                }}
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
                Company Declaration
              </Typography>
            </Box>

            <Box paddingX="30px" paddingY="16px">
              <TextFieldComponent
                label="Business Registration Number"
                id="businessRegistrationNumber"
                name="businessRegistrationNumber"
              />
            </Box>
            <Box paddingX="30px" paddingY="16px">
              <TextFieldComponent
                label="Business Registration Number (Old) - Optional"
                id="oldBusinessRegistrationNumber"
                name="oldBusinessRegistrationNumber"
              />
            </Box>
            <Box paddingX="30px" paddingY="16px">
              <TextFieldComponent
                label="Company Name connect to you if (any)"
                id="name"
                name="name"
              />
            </Box>
            <Box paddingX="30px" paddingY="16px">
              <SelectInputComponent
                label="Position held at that company"
                name="position"
                options={positionList}
              />
            </Box>
            <Box paddingX="30px" paddingY="16px">
              <SelectInputComponent
                label="Shareholder details in the Organization"
                name="shareholder"
                options={shareholderList}
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
                disabled={!isValid}
              />
            </Box>
          </Box>
        </FormProvider>
      </SwipeableDrawer>
    </div>
  );
};

export default DeclarationForm;
