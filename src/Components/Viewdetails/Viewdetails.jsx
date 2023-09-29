

const Viewdetails = ({donation}) => {
    const { photo,name, title,color1,color2, textbg } = donation;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default Viewdetails;