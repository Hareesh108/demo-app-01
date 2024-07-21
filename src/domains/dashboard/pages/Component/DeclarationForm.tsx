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
  oldBusinessRegistrationNumber: Yup.string().nullable(),
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

  const [positionList, setPositionList] = useState([
    {
      label: "DIRECTOR",
      value: "Director",
    },
    {
      label: "EXCUTIVE_OFFICER",
      value: "Excutive Office",
    },
    {
      label: "HEAD_OF_DEPARTMENT",
      value: "Head Of Department",
    },
    {
      label: "MANAGER",
      value: "Manager",
    },
    {
      label: "OFFICER",
      value: "Officer",
    },
    {
      label: "SHAREHOLDER",
      value: "Shareholder",
    },
    {
      label: "GUARANTOR",
      value: "Guarantor",
    },
  ]);
  console.log(positionList, "positionList");

  const getPositionTypesList = async () => {
    try {
      const res = await getPositionTypes();

      if (res?.status === 200) {
        setPositionList(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [relationList, setRelationList] = useState([
    {
      label: "SF",
      value: "Self",
    },
    {
      label: "SP",
      value: "Spouse",
    },
    {
      label: "C",
      value: "Child",
    },
    {
      label: "B",
      value: "Brother",
    },
    {
      label: "BS",
      value: "Brother's Spouse",
    },
    {
      label: "SIL",
      value: "Son-In-Law",
    },
    {
      label: "F",
      value: "Father",
    },
    {
      label: "M",
      value: "Mother",
    },
    {
      label: "SC",
      value: "Step Child",
    },
    {
      label: "S",
      value: "Sister",
    },
    {
      label: "SS",
      value: "Sister's Spouse",
    },
    {
      label: "DIL",
      value: "Daughter-In-Law",
    },
    {
      label: "AC",
      value: "Adopted Child",
    },
  ]);
  console.log(relationList, "relationList");

  const getRelationshipTypesList = async () => {
    try {
      const res = await getRelationshipTypes();

      if (res?.status === 200) {
        setRelationList(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [shareholderList, setShareholderList] = useState([
    {
      label: "MORE_THAN_50",
      value: ">50%",
    },
    {
      label: "BETWEEN_20_AND_50",
      value: ">=20%, <=50%",
    },
    {
      label: "LESS_THAN_20",
      value: "<20%",
    },
    {
      label: "NIL",
      value: "NIL",
    },
  ]);
  console.log(shareholderList, "shareholderList");

  const getShareholderTypesList = async () => {
    try {
      const res = await getShareholderTypes();

      if (res?.status === 200) {
        setShareholderList(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getPositionTypesList();
  //   getRelationshipTypesList();
  //   getShareholderTypesList();
  // }, []);

  // ----------------------------------------------------------------------------
  const defaultValues = useMemo(
    () => ({
      name: editFormData?.name ?? "",
      businessRegistrationNumber:
        editFormData?.businessRegistrationNumber ?? "",
      oldBusinessRegistrationNumber:
        editFormData?.oldBusinessRegistrationNumber ?? null,
      position: editFormData?.position ?? "",
      shareholder: editFormData?.shareholder ?? "",
    }),
    [editFormData]
  );

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

    // if (edit) {
    //   const data = familyData.find(
    //     (item: FamilyData) => item?.nationalId === values?.nationalId
    //   );
    //   setFamilyData((prev: FamilyData[]) => [...prev, data]);
    // } else {
    //   setFamilyData((prev: FamilyData[]) => [...prev, data]);
    // }

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
