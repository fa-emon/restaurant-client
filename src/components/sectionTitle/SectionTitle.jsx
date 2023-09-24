

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto w-4/12 my-12">
            <p className="text-[#D99904] font-normal text-xl italic mb-4">---{subHeading}---</p>
            <h2 className="text-[#151515] font-normal text-4xl uppercase border-y-4 text-center py-5">{heading}</h2>
        </div>
    );
};

export default SectionTitle;