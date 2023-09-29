import DonateItemCard from "./DonateItemCard";

const DonateItems = ({donateItems}) => {
    console.log(donateItems);
    return (
        <div className="bg-white mx-40"> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-20 gap-2">
                {
                    donateItems.map(donateItem => <DonateItemCard key={donateItem.id} donateItem={donateItem} ></DonateItemCard>)
                }
            </div>
        </div>
    );
};

export default DonateItems;