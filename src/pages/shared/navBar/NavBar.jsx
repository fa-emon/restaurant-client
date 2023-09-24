import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => {
                console.error('error', error)
            })
    }

    const navOptions = <>
        <li><Link to={'/'}>HOME</Link></li>
        <li><Link to={'/menu'}>OUR MENU</Link></li>
        {/* '/order/salad' er mane hocche by default se "salad" ke dekhabe order food a gele */}
        <li><Link to={'/order/salad'}>ORDER FOOD</Link></li>
        <li><Link to={'/secret'}>SECRET</Link></li>
        <li>
            <Link to={'/dashboard/mycart'}>
                <button className="btn btn-sm bg-black bg-opacity-5 hover:bg-opacity-30">
                    <FaShoppingCart className="text-xl text-white"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length || 0}</div>
                </button>
            </Link>
        </li>
        {
            user ?
                <>
                    <li><button onClick={handleLogOut} className="btn btn-ghost">LOG OUT</button></li>
                </>
                :
                <>
                    <li><Link to={'/login'}>SIGN IN</Link></li>
                </>
        }
    </>

    return (
        <>
            <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-20 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navOptions}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Restaurant</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navOptions}

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;