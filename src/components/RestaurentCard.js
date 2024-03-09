import {IMG_Restauro_Card} from "../config";

const Restaurant = ({name,cuisines,avgRating,cloudinaryImageId,sla,costForTwo})=>{
    return (
      <div className="card  border p-3 pb-5 rounded-md shadow hover:shadow-2xl hover:scale-105">
          <img src={`${IMG_Restauro_Card + cloudinaryImageId}`} className=" h-56 sm:h-40 w-full rounded-md"  alt="" />
          <h2 className="returant-name truncate text-xl pt-2 font-bold">{name}</h2>
          <h3 className="cuisines truncate text-md pt-2">{cuisines.join(',')}</h3>
          <div className="flex items-center justify-between pt-2">
          <h4 className="rating truncate  py-1 px-2 text-white rounded-md text-[11px] bg-green-500"><i className="fa-solid fa-star"></i><span className="font-bold text-[13px] pl-1">{avgRating}</span></h4>
           <span className="font-bold">{sla.lastMileTravelString}</span>
           <span className="font-bold">{costForTwo}</span>
          </div>   
      </div>
    )
  }

export default Restaurant;