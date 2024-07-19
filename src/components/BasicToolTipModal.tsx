import React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { Drawer } from "@mui/material";
import { Close, HelpOutline } from "@mui/icons-material";
import Button from "./Button";


export default function BasicModal({
  open,
  handleClose,
  heading,
  subHeading
}: Readonly<{
  open: boolean;
  handleClose: () => void;
  heading:string;
  subHeading:string;
}>) {
  return (
    <Drawer variant="temporary" ModalProps={{
        keepMounted: false,
      }} anchor="bottom" open={open} onClose={handleClose} sx={{
        ".MuiDrawer-paperAnchorBottom ":{
            borderTopRightRadius:10,
            borderTopLeftRadius:10,
  
            overflow:'hidden'
        }
       
    }}>
        <Box padding={3}>
            <Box display="flex" justifyContent="space-between">
            <Typography display="inline-flex" variant="body1" alignItems="center">
          <HelpOutline fontSize="inherit"/>&nbsp; Information
          </Typography> 
          <Close fontSize="small" onClick={handleClose}/>
            </Box>
        
          <Typography
          marginTop={2}
            variant="h1"
            sx={{ fontSize: "24px" }}
            height="max-content"
          >
         
         {heading}
          </Typography>
          <Typography  color='#8a8a8c' fontSize="14px"  marginY={4}>
        {subHeading}
          </Typography>
          <Button
            variant="contained"
            size="large"
            btnText="Ok, got it"
            onClick={() =>
             handleClose()
            }
            fullWidth
          />
        </Box>
       
      </Drawer>
    
  );
}
