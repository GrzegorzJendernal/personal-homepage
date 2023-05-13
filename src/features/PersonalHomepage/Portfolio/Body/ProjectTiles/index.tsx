import React from "react";
import { Container, Header, Link, Paragraph, Tile } from "./styled";
import { Repos } from "../../../../../common/types/repos";
import { useQuery } from "react-query";

const ProjectTiles = () => {
  const { data } = useQuery("repos") as Repos;
  return (
    <Container>
      {data.map((repo) => {
        if (!repo.homepage) return;
        return (
          <Tile key={repo.id}>
            <Header>{repo.name}</Header>
            <Paragraph>{repo.description}</Paragraph>
            <Paragraph>
              Demo:&nbsp;
              <Link
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Pages
              </Link>
            </Paragraph>
            <Paragraph link>
              Code:&nbsp;
              <Link
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </Link>
            </Paragraph>
          </Tile>
        );
      })}
    </Container>
  );
};

export default ProjectTiles;
