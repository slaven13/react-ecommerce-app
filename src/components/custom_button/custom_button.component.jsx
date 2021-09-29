import React from "react";
import "./custom_button.styles.scss";
import { CustomButtonContainer } from "./custom_button.styles";

export const CustomButton = ({ children, ...props }) => {
  return (
    <CustomButtonContainer {...props}>
      {children}
    </CustomButtonContainer>
  );
};
