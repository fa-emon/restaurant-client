import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { BsTrashFill } from 'react-icons/bs';
import Swal from "sweetalert2";


const MyCart = () => {
    const [cart, refetch] = useCart();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: "DELETE"
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                        }
                    });
            }
        })

    }

    return (
        <div className="w-full">
            <Helmet>
                <title>restaurant / myCart</title>
            </Helmet>

            <div className="text-3xl h-10 uppercase font-semibold flex justify-between">
                <h2>Total Orders: {cart.length}</h2>
                <h2>Total Price: ${total}</h2>
                <button className="btn btn-sm bg-[#D1A054]">pay</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => <tr
                            key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} />
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td className="text-end">
                                {'$' + item.price}
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-sm bg-red-600 hover:bg-gray-800"><BsTrashFill className="w-5 h-5 text-white "></BsTrashFill></button>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;