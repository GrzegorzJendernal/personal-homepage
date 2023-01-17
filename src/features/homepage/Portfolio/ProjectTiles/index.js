import { Container, Header, Link, Paragraph, Tile } from "./styled";

const ProjectTiles = () => {

    return (
        <Container>
            <Tile>
                <Header>Tytuł</Header>
                <Paragraph>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</Paragraph>
                <Paragraph>Repo: <Link>www.adkjnajkdns.com</Link></Paragraph>
                <Paragraph link>Repo: <Link>www.adkjnajkdns.com</Link></Paragraph>
            </Tile>
            <Tile>
                <Header>Tytuł</Header>
                <Paragraph>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</Paragraph>
                <Paragraph>Repo: <Link>www.adkjnajkdns.com</Link></Paragraph>
                <Paragraph link>Repo: <Link>www.adkjnajkdns.com</Link></Paragraph>
            </Tile>
            <Tile>
                <Header>Tytuł</Header>
                <Paragraph>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</Paragraph>
                <Paragraph>Repo: <Link>www.adkjnajkdns.com</Link></Paragraph>
                <Paragraph link>Repo: <Link>www.adkjnajkdns.com</Link></Paragraph>
            </Tile>
            <Tile>
                <Header>Tytuł</Header>
                <Paragraph>Project description, e.g. website where you can search for favourite movies and people. Project description, e.g. website where you can search.</Paragraph>
                <Paragraph>Repo: <Link>www.adkjnajkdns.com</Link></Paragraph>
                <Paragraph link>Repo: <Link>www.adkjnajkdns.com</Link></Paragraph>
            </Tile>
        </Container>
    );
};

export default ProjectTiles;