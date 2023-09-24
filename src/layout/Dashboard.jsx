import { FaShoppingCart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BiSolidCalendar } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}

                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full  text-base-content">
                    {/* Sidebar content here */}
                    <li>
                        <NavLink to={'/dashboard/home'}>
                            <AiFillHome className="text-2xl"></AiFillHome>
                            <span className="font-medium">User Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/reservation'}>
                            <BiSolidCalendar className="text-2xl"></BiSolidCalendar>
                            <span className="font-medium">User Reservation</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/history'}>
                            <GiWallet className="text-2xl">Payment History</GiWallet>
                            <span className="font-medium">Payment History</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/mycart'}>
                            <FaShoppingCart className="text-2xl"></FaShoppingCart>
                            <span className="font-medium">My Cart <div className="badge badge-secondary">+{cart.length || 0}</div></span>
                        </NavLink>
                    </li>

                    <div className="divider"></div>

                    <li>
                        <NavLink to={'/'}>
                            <AiFillHome className="text-2xl"></AiFillHome>
                            <span className="font-medium">Home</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;