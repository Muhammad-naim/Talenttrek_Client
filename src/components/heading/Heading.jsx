const Heading = ({Heading, subHeading}) => {
    return (
        <div className="text-center flex-col my-3">
            <h2 className=" text-2xl font-bold text-black ">{Heading}</h2>
            
            <h4 className="border-t-2 border-black border-dashed inline">
                {subHeading}
            </h4>
        </div>
    );
};

export default Heading;