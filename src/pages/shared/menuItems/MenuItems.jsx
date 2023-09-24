

const MenuItems = ({ item }) => {
    const { image, name, recipe, price } = item;
    // console.log(item)
    return (
        <div className="flex">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[118px] h-[104px] me-8" src={image} alt="" />
            <div className="flex">
                <div>
                    <h2 className="text-[#151515] text-sm font-normal uppercase">{name}--------------</h2>
                    <p className="text-[#737373] font-normal">{recipe}</p>
                </div>
                <p className="text-[#BB8506]">${price}</p>
            </div>
        </div>
    );
};

export default MenuItems;