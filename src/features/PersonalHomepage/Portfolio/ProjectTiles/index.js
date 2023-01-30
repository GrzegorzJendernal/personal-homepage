import { useSelector } from "react-redux";
import { selectRepos } from "../../homepageSlice";
import { Container, Header, Link, Paragraph, Tile } from "./styled";

const ProjectTiles = () => {
  const repos = useSelector(selectRepos);

  return (
    <Container>
      {repos.map((repo) => (
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
      ))}
    </Container>
  );
};

export default ProjectTiles;
