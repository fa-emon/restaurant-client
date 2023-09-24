import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const OrderFoodCard = ({ item }) => {
    const { image, name, recipe, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [,refetch] = useCart();

    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (item) => {
        console.log(item)
        if (user && user.email) {
            
            const cartItem = {menuItemId: _id, name, price, image, email: user.email }

            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                  "Content-type": "application/json"
                },
                body: JSON.stringify(cartItem),
              })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                      refetch(); // call the refetch function to update the number of items in the cart.
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your item added in cart successfully.',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food.',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <p className="absolute right-0 me-4 mt-4 bg-slate-900 text-white px-4 rounded">{'$' + price}</p>
            <div className=" card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 bg-slate-200 hover:bg-[#111827]  border-[#BB8506] hover:text-white">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderFoodCard;