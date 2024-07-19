import { Radio } from "@mui/material";
import React from "react";

type CustomRadioButtonProps = {
  checked: boolean;
};

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({ checked }) => (
    <Radio
        sx={{ width: "max-content" }}
        checked={checked}
        icon={
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="15.5"
              stroke="#EA0029"
            />
          </svg>
        }
        checkedIcon={
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="12" fill="#EA0029" />
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="15.5"
              stroke="#EA0029"
            />
          </svg>
        }
        // onChange={handleChange}
        // value={value}
        // name="radio-buttons"
        // inputProps={{ 'aria-label': 'A' }}
      />
  );

export default CustomRadioButton;
