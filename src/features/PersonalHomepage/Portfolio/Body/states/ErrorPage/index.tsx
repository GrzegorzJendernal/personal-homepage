import React from "react";
import Button from "../../../../../../common/Button";
import { DescriptionText } from "../../../../../../common/DescriptionText";
import { ErrorBox, Link, Sign, Title } from "./styled";

const ErrorPage = () => (
  <ErrorBox>
    <Sign />
    <Title>Ooops! Something went wrong... </Title>
    <DescriptionText>
      Sorry, failed to load Github projects. {"\n"}
      You can check them directly on Github.
    </DescriptionText>
    <Link
      href="https://github.com/GrzegorzJendernal"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button gitHub={true} text={"Go to GitHub"} />
    </Link>
  </ErrorBox>
);

export default ErrorPage;
