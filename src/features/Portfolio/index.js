import ErrorPage from "../../common/states/ErrorPage";
import Header from "./Header";
import { Wrapper } from "./styled";

const Portfolio = () => {
    return (
        <Wrapper>
            <Header />
            <ErrorPage
                content={`Sorry, failed to load Github projects.\nYou can check them directly on Github.`} />
        </Wrapper>
    );
};

export default Portfolio;