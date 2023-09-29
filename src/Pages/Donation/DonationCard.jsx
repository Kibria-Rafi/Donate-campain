import swal from "sweetalert";

const DonationCard = ({ donation }) => {
  const { photo, title, buttonbg, id, description, textbg } = donation;
  const handleAdd = () => {
    const addedDonationArray = [];
    const addDonation = JSON.parse(localStorage.getItem("adddonation"));
    if (!addDonation) {
      addedDonationArray.push(donation);
      localStorage.setItem("adddonation", JSON.stringify(addedDonationArray));
      swal("Good job!", "product added", "success");
    } else {
      const isExist = addDonation.find((donation) => donation.id == id);
      if (!isExist) {
        addedDonationArray.push(...addDonation, donation);
        localStorage.setItem("adddonation", JSON.stringify(addedDonationArray));
        swal("Good job!", "Product added", "success");
      }
      else{
        swal("Error", "already added", "error");
      }
    }
    
  }
  return (
    <div className="mx-24 h-auto p-10">
      <div className="mb-8">
        <img className="h-full w-full" src={photo} alt="" />
        <div  className="p-9  bg-black">
          <button
            onClick={handleAdd}
            style={{ backgroundColor: textbg }}
            className="text-white  px-3 py-2 rounded-lg "
          >
            Donate $290
          </button>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-5 text-black">{title}</h2>
      <p className="text-black">{description}</p>
    </div>
  );
};

export default DonationCard;
