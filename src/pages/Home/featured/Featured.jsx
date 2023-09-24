import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-item pt-8 my-12">
            <SectionTitle
                subHeading={'check it out'}
                heading={'featured item'}
            ></SectionTitle>

            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img className="rounded-md" src={featuredImage} alt="" />
                </div>

                <div className="md:ml-10">
                    <p className="text-white"> 
                        March 20, 2023 <br />
                        WHERE CAN I GET SOME? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 border-slate-900 bg-gray-600 text-white">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;