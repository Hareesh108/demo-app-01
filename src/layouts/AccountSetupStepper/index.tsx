/* eslint-disable react/jsx-no-bind */
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import Button from "../../components/Button";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps, styled } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GrayCircle from "../../assets/svgs/gray_circle.svg";
import RedCircle from "../../assets/svgs/red_circle.svg";
import { useAppSelector } from "../../hooks/hooks";

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "white",
  zIndex: 1,
  color: "#fff",
  width: 30,
  height: 30,
  marginLeft: 6.5,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    // icon props change

    color: "#bdbdbd",
    backgroundColor: "white",
  }),
  ...(ownerState.completed && {
    color: "#bdbdbd",
    backgroundColor: "white",
  }),
}));

interface StepperInputProps {
  nxtButton: boolean;
  onClick?: any;
}

const AccountSetupStepper: React.FC<StepperInputProps> = ({
  nxtButton,
  onClick,
}) => {
  const { reviewing, step } = useAppSelector(
    (state) => state.reducer.stepperChecklist
  );

  const steps = [
    {
      label: "Section A",
      description: `Personal Information`,
    },
    {
      label: "Section B ",
      description:
        "Employee to declare any firm/ partnership/ company/ entity/ person",
    },
    {
      label: "Section C",
      description: `Fill up your immediate family/ close relatives information and their details firm/ company/ shareholder`,
    },
    {
      label: "Declaration and Submission",
      description: ``,
    },
  ];

  const ColorlibConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "#EA0029",
        width: "3px",
        marginLeft: "3%",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "#EA0029",
        width: "3px",
        marginLeft: "3%",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#bdbdbd",
      width: reviewing ? "2px" : "0.3px",
      minHeight: "15px",
      padding: 0,
      marginLeft: "3.3%",
      borderLeft: "#bdbdbd",
    },
  }));

  const StepperButton = [
    "Create Account",
    "Verify",
    "Continue",
    "Continue",
    "Set Up",
  ];

  // eslint-disable-next-line react/no-unstable-nested-components
  function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
      1: <img src={RedCircle} alt="" />,
      2: <img src={active ? RedCircle : GrayCircle} alt="" />,
      3: <img src={active ? RedCircle : GrayCircle} alt="" />,
      4: <img src={active ? RedCircle : GrayCircle} alt="" />,
      5: <img src={active ? RedCircle : GrayCircle} alt="" />,
    };

    const completedIcons: { [index: string]: React.ReactElement } = {
      1: <CheckCircleIcon sx={{ color: "#EA0029" }} />, // Change to your completed icon
      2: <CheckCircleIcon sx={{ color: "#EA0029" }} />,
      3: <CheckCircleIcon sx={{ color: "#EA0029" }} />,
      4: <CheckCircleIcon sx={{ color: "#EA0029" }} />,
      5: <CheckCircleIcon sx={{ color: "#EA0029" }} />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {completed
          ? // eslint-disable-next-line react/destructuring-assignment
            completedIcons[String(props?.icon)]
          : // eslint-disable-next-line react/destructuring-assignment
            icons[String(props?.icon)]}
      </ColorlibStepIconRoot>
    );
  }
  return (
    <Box sx={{ maxWidth: 300, maxHeight: 600, width: 300 }}>
      <Stepper
        activeStep={step}
        orientation="vertical"
        connector={<ColorlibConnector />}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Maven Pro",
                  fontWeight: "700",
                }}
              >
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent
              sx={{
                ml: 2.7,
                borderLeft: reviewing
                  ? `2px solid #bdbdbd`
                  : "0.1px solid #bdbdbd",
              }}
            >
              <Typography
                sx={{
                  pl: 1,
                  fontSize: "16px",
                  fontFamily: "Maven Pro",
                  fontWeight: "400",
                }}
              >
                {step.description}
              </Typography>
              {!nxtButton && (
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={onClick}
                      sx={{ mt: 1, ml: 1 }}
                      size="small"
                      btnText={StepperButton[index]}
                    />
                  </div>
                </Box>
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default AccountSetupStepper;
