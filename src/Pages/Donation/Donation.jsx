import { useEffect, useState } from "react";
import AddDonation from "./AddDonation";


const Donation = () => {

    const [donation,setDonation] =useState([])
    const [noFound,setNoFound] =useState(false)
    const [isShowMore,setShowmore] =useState(false)
    // console.log(donation.length);

    useEffect(()=>{
        const addDonation = JSON.parse(localStorage.getItem("adddonation"));
        if(addDonation){
        setDonation(addDonation)
        }
        else{
            setNoFound("No data found");
        }
    },[])

    return (
        <div className="bg-white h-[1000px]">
            {
                noFound ? <p className="flex justify-center items-center  text-black">{noFound}</p> :
                
                <div>
                    


                <div className="grid grid-cols-2 gap-2 mx-10">
                    {
                       isShowMore?  donation.map(donation => <AddDonation key={donation.id} donation={donation} ></AddDonation>  ) : donation.slice(0,4).map(donation => <AddDonation key={donation.id} donation={donation} ></AddDonation>  )
                    }
                </div>
                    {
                        donation.length >4 && <button onClick={()=>setShowmore(!isShowMore)}  className="bg-black px-3 py-2 rounded-lg  mx-auto flex text-white m-10  mb-10">{isShowMore? "See less":"See More"}</button>
                    }
                   
                </div>
            
            }
        </div>
    );
};

export default Donation;