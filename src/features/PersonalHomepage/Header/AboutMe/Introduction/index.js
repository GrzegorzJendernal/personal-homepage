import Button from "../../../../../common/Button";
import { Box, Caption, Link, Name, Paragraph } from "./styled";

const Introduction = () => (
  <Box>
    <Caption>THIS IS</Caption>
    <Name>Grzegorz Jendernal</Name>
    <Paragraph>
      I am a Frontend Developer. I love using React. I am currently looking for
      an opportunity to use my skills at work. I realize that I do not have
      commercial experience, but I assure you that I make up for it with
      commitment and willingness to learn.
    </Paragraph>
    <Link href="mailto:g.jendernal@gmail.com">
      <Button text={"Hire Me"} />
    </Link>
  </Box>
);

export default Introduction;
