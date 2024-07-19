import React, { useState } from "react";
import { Box, SxProps, Tab, Tabs } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type TabData = {
  iconCheck?: boolean;
  label: string;
  component: React.ReactNode;
};

type TabsComponentProps = {
  tabs: TabData[];
  selectedColor?: SxProps;
  childHeight?: string;
  onTabChange: (newValue: number) => void;
};

const TabPanel: React.FC<{
  value: number;
  index: number;
  childHeight?: string;
  children: React.ReactNode;
}> = ({ children, value, index }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

const TabsComponent: React.FC<TabsComponentProps> = ({
  tabs,
  selectedColor,
  onTabChange,
}) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onTabChange(newValue);
    console.log(event.currentTarget);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          sx={{ borderBottom: 1, borderColor: "divider", height: "13%" }}
          variant={tabs.length > 1 ? "fullWidth" : "scrollable"}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              sx={selectedColor}
              iconPosition="end"
              icon={tab?.iconCheck ? <CheckCircleIcon /> : ""}
            />
          ))}
        </Tabs>
      </Box>
      <Box
        sx={{
          height: "87%",
          padding: "5px",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {tabs.map((tab, index) => (
          <TabPanel key={index} value={value} index={index} childHeight={"87%"}>
            {tab.component}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default TabsComponent;
