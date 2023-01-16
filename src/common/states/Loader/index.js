import DescriptionText from "../../DescriptionText";
import { Spinner, SpinnerBox } from "./styled";

const Loader = ({ content }) => (
    <SpinnerBox>
        <DescriptionText
            content={content}
        />
        <Spinner />
    </SpinnerBox>
);

export default Loader;