import React from "react";
import { Container, Header, List, ListItem, Point } from "./styled";

interface SectionProps {
  title: string;
  array: string[];
}

const Section = ({ title, array }: SectionProps) => (
  <Container>
    <Header>{title}</Header>
    <List>
      {array.map((element) => (
        <ListItem key={element}>
          <Point />
          {element}
        </ListItem>
      ))}
    </List>
  </Container>
);

export default Section;
