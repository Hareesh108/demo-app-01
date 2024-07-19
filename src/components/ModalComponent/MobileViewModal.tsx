import React from "react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../Button";

const drawerBleeding = 56;

interface Props {
  window?: () => Window;
  open: boolean;
  setOpen: (open: boolean) => void;
  handleYesButton?: () => void;
  handleNoButton?: () => void;
  labelHead?: string;
  labelBody?: string;
}

export default function MobileViewModal(props: Props) {
  const {
    open,
    setOpen,
    window,
    handleYesButton,
    labelHead,
    labelBody,
    handleNoButton,
  } = props;

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor:
      theme.palette.mode === "light"
        ? grey[100]
        : theme.palette.background.default,
  }));
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={() => handleNoButton}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            // Setting borderRadius on the Paper (child of SwipeableDrawer)
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: "40vh",
          }}
        >
          <Box
            sx={{
              top: -drawerBleeding,
              visibility: "visible",
              right: 0,
              left: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                p: 2,
                color: "text.secondary",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Boost">
                  <path
                    id="ico-Boost"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.9634 14.627V9.203C5.9614 9.076 5.9374 6.023 9.0384 5.596C9.2064 5.572 9.3484 5.563 9.5274 5.563L9.6324 5.564C9.6354 5.564 10.3084 5.575 11.0404 5.96C11.9894 6.458 12.5904 7.32 12.8274 8.522C12.8464 8.614 12.8584 8.722 12.8684 8.816L12.8814 8.945C12.8924 9.031 12.9054 9.168 12.9014 9.428L12.8994 11.139L14.5814 11.141L14.6754 11.139H14.6764C14.8654 11.139 14.9774 11.15 15.0554 11.161L15.1774 11.174C15.2864 11.187 15.3804 11.198 15.4654 11.216C16.6464 11.458 17.4924 12.072 17.9784 13.041C18.3544 13.786 18.3644 14.473 18.3644 14.48C18.3684 14.722 18.3604 14.885 18.3344 15.078C17.9314 18.126 15.1394 18.214 14.8224 18.214H9.4804C8.3744 18.214 7.4984 17.905 6.8754 17.298C6.2684 16.652 5.9634 15.755 5.9634 14.627ZM7.8944 20.113C8.3114 20.219 8.7274 20.223 8.7324 20.223H15.1334C15.6514 20.189 15.9344 20.15 16.2514 20.065C16.7974 19.919 18.6514 19.308 19.5534 17.574C21.2844 14.444 19.7714 12.075 19.7064 11.976L19.7014 11.969C18.0294 9.131 15.3204 9.103 15.0184 9.13L14.8634 9.134L14.8644 8.978C14.8674 8.665 14.8164 5.871 12.0984 4.205C12.0504 4.172 11.0584 3.5 9.5514 3.5C8.5634 3.5 7.5724 3.781 6.6074 4.338C4.8994 5.265 4.2984 7.158 4.1554 7.716C4.0714 8.043 4.0324 8.336 4.0004 8.879V15.311C4.0004 15.429 4.0064 15.828 4.0994 16.2L4.1164 16.268C4.1824 16.529 4.2214 16.688 4.3384 16.984C4.5594 17.55 4.9964 18.217 5.4514 18.686L5.5474 18.785C6.1264 19.365 6.5434 19.602 6.9074 19.772C7.2874 19.949 7.7244 20.07 7.8944 20.113Z"
                    fill="#58595B"
                  />
                </g>
              </svg>
              <Box
                component="span"
                paddingX={1}
                fontWeight="700"
                fontSize="14px"
              >
                Confirmation
              </Box>
            </Typography>
            <IconButton
              style={{
                position: "absolute",
                top: "2.5%",
                right: "7%",
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
          <Box
            sx={{
              px: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              gap: 1,
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: "24px" }}
              height="max-content"
            >
              {labelHead}
            </Typography>
            <Typography variant="subtitle1" mt="10px" height="max-content">
              {labelBody}
            </Typography>
            <Box
              display="flex"
              sx={{
                flexDirection: "column",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#F3F4F4 !important",
                  color: "#58595B !important",
                  marginTop: 1,
                }}
                variant="contained"
                size="large"
                btnText="No"
                onClick={handleNoButton}
                fullWidth
              />
              <Button
                sx={{ marginTop: 1 }}
                variant="contained"
                size="large"
                btnText="Yes"
                onClick={handleYesButton}
                fullWidth
              />
            </Box>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Root>
  );
}
