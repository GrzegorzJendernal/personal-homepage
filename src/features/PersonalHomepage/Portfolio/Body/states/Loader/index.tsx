import React from "react";
import { DescriptionText } from "../../../../../../common/DescriptionText";
import { Spinner, SpinnerBox } from "./styled";

const Loader = () => (
  <SpinnerBox>
    <DescriptionText>Please wait, projects are being loaded...</DescriptionText>
    <Spinner />
  </SpinnerBox>
);

export default Loader;
