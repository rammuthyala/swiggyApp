import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;
    const {cuisines, avgRating, costForTwo, cloudinaryImageId, name,areaName} = resData;

    return (
        <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="w-[300px] h-[200px] border-solid" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>AreaName:{areaName}</h4>
        </div>
    );
};
export default RestaurentCard;
