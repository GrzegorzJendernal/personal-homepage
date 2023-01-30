import { DescriptionText } from "../../DescriptionText";
import { Spinner, SpinnerBox } from "./styled";

const Loader = () => (
  <SpinnerBox>
    <DescriptionText>Please wait, projects are being loaded...</DescriptionText>
    <Spinner />
  </SpinnerBox>
);

export default Loader;
