import { Link } from "react-router-dom";

const DonateItemCard = ({donateItem}) => {
    
    const {photo,name,title,id,color1,color2} =donateItem;
  return (
    <div style={{backgroundColor:color1}}>
     <Link to={`/donateItem/${id}`}>
     <div className="card w-60  h-60 rounded-lg  ">
        <figure className=" flex text-center">
          <img 
            src={photo}
            alt=""
            className=" w-72"
          />
        </figure>
        <div style={{color:color2}} className="p-5 font-bold">
          <p >{name}</p>
          <h2 className="">{title} </h2>
          
        </div>
      </div>
     </Link>
    </div>
  );
};

export default DonateItemCard;
