import { useLoaderData } from "react-router-dom";

import Bannar from "../../Components/Header/Bannar/Bannar";
import DonateItems from "../../Components/DonateItem/DonateItems";



const Home = () => {
    
    const donateItems = useLoaderData()
    


    return (
        <div className="bg-white">
            <Bannar></Bannar>
            <div>
            <DonateItems donateItems={donateItems}></DonateItems>
            </div>
        </div>
    );
};

export default Home;