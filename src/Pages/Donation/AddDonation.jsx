import { Link } from "react-router-dom";
import Viewdetails from "../../Components/Viewdetails/Viewdetails";

const AddDonation = ({ donation }) => {
  const { photo,id, name, title, color1, color2, textbg } = donation;
  return (
    <div className="bg-white  ">
      <div style={{ backgroundColor: color1 }} className="card card-side">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 style={{ Color: color2 }} className="">
            {name}
          </h2>
          <p>{title}</p>
          <h2 className=" font-bold ">$290.00</h2>

          <Link to={`/donateItem/${id}`}>
            <button
              style={{ backgroundColor: textbg }}
              className="px-3 py-2 rounded-lg text-white"
            >
              View Deiails
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddDonation;
