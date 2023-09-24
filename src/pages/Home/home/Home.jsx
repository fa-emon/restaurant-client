import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Featured from "../featured/Featured";
import Menu from "../menu/Menu";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>restaurant/home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;