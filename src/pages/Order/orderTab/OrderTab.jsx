
import OrderFoodCard from '../../../components/orderFoodCard/OrderFoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {
                items.map(item => <OrderFoodCard
                    key={item._id}
                    item={item}
                ></OrderFoodCard>)
            }
        </div>
    );
};

export default OrderTab;