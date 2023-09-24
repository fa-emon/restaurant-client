import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItems from "../../shared/menuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section>
            <SectionTitle
                subHeading={'check it out'}
                heading={'from our menu'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-4 my-12">
                {
                    popular.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 bg-slate-200">View Full Menu</button>
            </div>
        </section>
    );
};

export default Menu;