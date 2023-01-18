import { Box, Photo } from "./styled";
import facjata from "../images/gjend.png";
import Introduction from "./Introduction";

const AboutMe = () => {

    return (
        <Box>
            <Photo
                src={facjata}
                alt="portret"
            />
            <Introduction />
        </Box>
    );
};

export default AboutMe;