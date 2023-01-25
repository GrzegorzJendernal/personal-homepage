import Button from "../../../../../common/Button";
import { Box, Caption, Link, Name, Paragraph } from "./styled";

const Introduction = () => {

    return (
        <Box>
            <Caption>THIS IS</Caption>
            <Name>Grzegorz Jendernal</Name>
            <Paragraph>I am lorem ipsum bla ckadaskdk lknslafdkf
                kjfndksjnfkj KJFNKJDndnf kjnfSNFKJLn kjsfnkSNFKSDNFkl
                kjnfkDNFKndfkndkjfn kjnfkJNFKJDN KNFKdnknd KDJFNdkjnfkjDN KJFNKJ
            </Paragraph>
            <Link
                href="mailto:g.jendernal@gmail.com"
            >
                <Button
                    text={"Hire Me"}
                />
            </Link>
        </Box>
    );
};

export default Introduction;