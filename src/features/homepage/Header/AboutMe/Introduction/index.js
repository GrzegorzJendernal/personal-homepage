import Button from "../../../../../common/Button";
import { Box, Caption, Link, Name, Paragraph } from "./styled";

const Introduction = () => {

    return (
        <Box>
            <Caption>THIS IS</Caption>
            <Name>Grzegorz Jendernal</Name>
            <Paragraph>I am a Frontend Developer. I love using React. I learn quickly and I want to constantly develop myself. I am currently looking for an opportunity to use my skills at work.
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