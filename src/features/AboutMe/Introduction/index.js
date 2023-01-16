import Button from "../../../common/Button";
import { Box, Caption, Name, Paragraph } from "./styled";

const Introduction = () => {

    return (
        <Box>
            <Caption>THIS IS</Caption>
            <Name>Grzegorz Jendernal</Name>
            <Paragraph>I am lorem ipsum bla ckadaskdk lknslafdkf
                kjfndksjnfkj KJFNKJDndnf kjnfSNFKJLn kjsfnkSNFKSDNFkl
                kjnfkDNFKndfkndkjfn kjnfkJNFKJDN KNFKdnknd KDJFNdkjnfkjDN KJFNKJ
            </Paragraph>
            <Button
                text={"Hire Me"}
            />
        </Box>
    );
};

export default Introduction;