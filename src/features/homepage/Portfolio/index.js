import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, selectStatus } from "../homepageSlice";
import Header from "./Header";
import ProjectTiles from "./ProjectTiles";
import Loader from "../../../common/states/Loader";
import ErrorPage from "../../../common/states/ErrorPage";
import { Wrapper } from "./styled";

const Portfolio = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchRepos());
    }, [dispatch]);

    return (
        <Wrapper>
            <Header />
            {{
                loading: <Loader />,
                success: <ProjectTiles />,
                error: <ErrorPage />,
            }[status]}
        </Wrapper>
    );
};

export default Portfolio;