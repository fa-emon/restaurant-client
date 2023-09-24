import { Helmet } from "react-helmet-async";
import coverImage from "../../../assets/menu/banner3.jpg"
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import dessertsImage from "../../../assets/menu/dessert-bg.jpeg"
import pizzasImage from "../../../assets/menu/pizza-bg.jpg"
import saladsImage from "../../../assets/menu/salad-bg.jpg"
import soupsImage from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../menuCategory/MenuCategory";
import CoverPage from "../../shared/coverPage/CoverPage";


const MenuPage = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>restaurant/menu</title>
            </Helmet>

            {/* {main menu cover page} */}
            <CoverPage
                img={coverImage}
                title={'our menu'}
                shortDescription={'Would you like to try a dish?'}
            ></CoverPage>

            {/* {This one is for offered section} */}
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"today's offer"}
            ></SectionTitle>
            <MenuCategory
                items={offered}
            ></MenuCategory>

            {/* {This one is for desserts section} */}
            <MenuCategory
                items={desserts} title={'desserts'} img={dessertsImage}
            ></MenuCategory>

            {/* {This one is for pizzas section} */}
            <MenuCategory
                items={pizzas} title={'pizza'} img={pizzasImage}
            ></MenuCategory>

            {/* {This one is for salads section} */}
            <MenuCategory
                items={salads} title={'salad'} img={saladsImage}
            ></MenuCategory>

            {/* {This one is for soups section} */}
            <MenuCategory
                items={soups} title={'soup'} img={soupsImage}
            ></MenuCategory>

        </div>
    );
};

export default MenuPage;