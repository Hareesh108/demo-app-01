export const getFieldValue = (param: unknown): string => {
  if (
    param === undefined ||
    param === null ||
    param === "" ||
    param === "null" ||
    typeof param === "object"
  ) {
    return "--";
  }

  // Check if the parameter is a string
  if (typeof param === "string") {
    return param;
  }

  // Handle other types by converting them to a string
  return String(param);
};
