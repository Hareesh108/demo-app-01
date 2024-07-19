import { Checkbox } from "@mui/material";
import React from "react";

type CustomCheckboxProps = {
  checked: boolean;
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked }) => (
    <Checkbox
      sx={{ width: "max-content", height: "max-content" }}
      icon={
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.7419 1H8.25806C4.24955 1 1 4.24955 1 8.25806V23.7419C1 27.7505 4.24955 31 8.25806 31H23.7419C27.7505 31 31 27.7505 31 23.7419V8.25806C31 4.24955 27.7505 1 23.7419 1Z"
            stroke="#EA0029"
            strokeWidth="1"
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
          <path
            d="M22.5 0H7.5C3.35786 0 0 3.35786 0 7.5V22.5C0 26.6421 3.35786 30 7.5 30H22.5C26.6421 30 30 26.6421 30 22.5V7.5C30 3.35786 26.6421 0 22.5 0Z"
            fill="#EA0029"
          />
          <path
            d="M19.3636 10.8L13.0318 17.1234L10.0431 14.1386L9 15.1803L13.0318 19.2L20.4 11.8417L19.3636 10.8Z"
            fill="white"
          />
        </svg>
      }
      checked={checked}
    />
  );

export default CustomCheckbox;
