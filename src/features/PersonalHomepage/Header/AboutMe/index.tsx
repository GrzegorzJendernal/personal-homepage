import { Box, Photo } from "./styled";
import portrait from "../../images/portrait.jpg";
import Introduction from "./Introduction";
import React from "react";

const AboutMe = () => (
  <Box>
    <Photo src={portrait} alt={"portrait"} />
    <Introduction />
  </Box>
);

export default AboutMe;
