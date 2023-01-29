import { Box, Photo } from "./styled";
import portrait from "../../images/portrait.jpg";
import Introduction from "./Introduction";

const AboutMe = () => {

    return (
        <Box>
            <Photo
                src={portrait}
                alt={"portrait"}
            />
            <Introduction />
        </Box>
    );
};

export default AboutMe;