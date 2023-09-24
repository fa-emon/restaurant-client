import MenuItems from "../../shared/menuItems/MenuItems";
import CoverPage from "../../shared/coverPage/CoverPage";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <CoverPage
                img={img}
                title={title}
                shortDescription={'Would you like to try a dish?'}
            ></CoverPage>}
            <div className="grid md:grid-cols-2 gap-4 my-12">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>

            <Link to={`/order/${title}`}>
                <div className="text-center mb-12 mt-0">
                    <button className="btn btn-outline border-0 border-b-4 bg-slate-200">Order Now</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;