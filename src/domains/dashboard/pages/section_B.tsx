import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import StepIndicator from "../../../components/stepIndicator";
import Button from "../../../components/Button";
import PersonalDetailsBox from "./Component/PersonalDetailsBox";
import DeclarationForm from "./Component/DeclarationForm";
import { setLeftBarProgress } from "../../../slices/StepperChecklistSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import { useNavigate } from "react-router-dom";

type newDeclarationForm = {
  id?: string;
  buisnRegNoOld: string;
  buisnRegNo?: string;
  cmpnyName?: string;
  position?: string;
  shareHolderDetails?: string;
};

const sectionB = () => {
  const [open, setOpen] = useState(false);
  const [declaration, setDeclaration] = useState<newDeclarationForm[]>([]);
  const [currIndex, setCurrIndex] = useState<number>();
  const [currForm, setCurrForm] = useState<newDeclarationForm | {}>({});
  const [edit, setEdit] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const updateForm = (data: any) => {
    setEdit(false);
    setOpen(false);
    setCurrForm({});
    if (currIndex !== null && currIndex !== undefined) {
      // Create a new array with the updated value
      const updatedDeclaration = declaration.map((item, index) =>
        index === currIndex ? data : item
      );

      // Update the state with the new array
      setDeclaration(updatedDeclaration);
    }
  };

  const deleteForm = (data: any) => {
    console.log(data);

    const updatedItems = declaration.filter((item) => item.id !== data.id);

    setDeclaration(updatedItems);
  };

  useEffect(() => {
    dispatch(setLeftBarProgress({ step: 1 }));
  }, []);

  return (
    <>
      <Box
        display="flex"
        sx={{ height: `calc(100% - 55px)` }}
        flexDirection="column"
        position="relative"
      >
        <StepIndicator currentStep={2} totalSteps={4} path="/" />
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
            Section B :{" "}
          </Typography>

          <Typography fontSize="12px" fontWeight={"400"} color={"#151515"}>
            {`Employee to declare any firm/ partnership/ company/ entity/ person
            (if any) in which employee is interested as :`}
          </Typography>

          <Typography
            marginTop={"10px"}
            fontSize="12px"
            fontWeight={"400"}
            color={"#151515"}
          >
            <Typography>{` 1.A controlling shareholder; or`}</Typography>

            <Typography>{` 2.An influential shareholder; or`}</Typography>

            <Typography>{` 3.A director, partner, executive officer, agent or guarantor and their subsidiaries or entities controlled by them.`}</Typography>
          </Typography>

          <Box sx={{ my: "18px", mx: "10px" }}>
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
              btnText="Add Details Information"
              onClick={() => setOpen(true)}
              fullWidth
            />
          </Box>

          {declaration?.map((item, index) => {
            return (
              <Box>
                <PersonalDetailsBox
                  data={item}
                  updateForm={(data: any) => {
                    setCurrIndex(index);
                    setCurrForm(data);
                    setOpen(true);
                    setEdit(true);
                  }}
                  deleteForm={(data: any) => deleteForm(data)}
                />
              </Box>
            );
          })}
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
            {/* None to declare button */}
            {declaration?.length === 0 && (
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
                      backgroundColor: "#F3F4F4",
                      color: "#58595B",
                    },
                  }}
                  variant="contained"
                  size="large"
                  btnText="None to Declare"
                  onClick={() => {
                    navigate("/sectionC");
                  }}
                  fullWidth
                />
              </Box>
            )}

            {/*  */}
            {declaration?.length > 0 && (
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
                      backgroundColor: "#F3F4F4",
                      color: "#58595B",
                    },
                    marginRight: {
                      xs: 0,
                      sm: "10px",
                    },
                  }}
                  variant="contained"
                  size="large"
                  btnText="Save as Draft"
                  onClick={() => {}}
                  fullWidth
                />

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
                  onClick={() => {}}
                  fullWidth
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      {/* <DeclarationForm
        open={open}
        setOpen={setOpen}
        currentForm={currForm}
        isEdit={edit}
        closeDrawer={() => setOpen(false)}
        // newAddress={declartion}
        createForm={(val: any) => {
          setOpen(false);
          setDeclaration([...declaration, val]);
        }}
        updateConfig={updateForm}
      /> */}
    </>
  );
};
export default sectionB;
