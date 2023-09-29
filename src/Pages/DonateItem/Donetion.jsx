import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "../Donation/DonationCard";


const Donetion = () => {
 const [donation,setDonation] =useState({});

    const {id} =useParams();
    console.log(id);

    const donations =useLoaderData();

    useEffect(()=>{
        const findDonation =donations.find(donation =>donation.id == id)
        setDonation(findDonation);
    },[id,donations])
     
    return (
        <div className="bg-white">
            <DonationCard donation={donation}></DonationCard>
        </div>
    );
};

export default Donetion;