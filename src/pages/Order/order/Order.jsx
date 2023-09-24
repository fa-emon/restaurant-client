import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import CoverPage from '../../shared/coverPage/CoverPage';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../orderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks'] // most important: ei namgulo title er namer sathe mil thakte hobe. Ar nicher tablist onushare shudhu namgulo sajalam. tablist er namgulor eikhane onno kono kaj nai.Drinks ta selete hobe na karon drinks ta title er moddhe nai.

    const { category } = useParams(); //useParams() hook use for extract the dynamic value from category, besides you need to distructure the category to get the value it's important.

    const initialIndex = categories.indexOf(category)// er mane hocche dhoro tumi our menu te giye soup a click korla. tahole category bortoman value to hobe "soup" jeheto title ta dynamic tai ei category er value gulo o dynamic orthat ekek somoy ekekta hobe tumi jeta select korba arki. tobe title e je namgulo deya ache shudhu oiguloi er barie kichu asbe na. Ar SOUP hole er initialIndex er man hobe 2. ekbare soja karon categories namok array er moddhe indexOf(soup) er value hocche 2. salad hole (0) hoto, pizza hole (1) etc.

    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>restaurant/order food</title>
            </Helmet>
            <CoverPage
                img={orderCoverImg}
                title={"order here"}
                shortDescription={"Would you like to try a dish?"}
            ></CoverPage>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={'text-center'}>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZAS</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salads}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzas}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default Order;