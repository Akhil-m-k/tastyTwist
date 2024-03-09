import CardSkeleton from "./bodySkeleton";
import Restaurant from "./RestaurentCard";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {filterRestaurants,ratingFilter,vegFilter,between300_600_filter,lessThan300_filter} from "../utils/helper"
import useOnline from "../utils/useOnline";

const  getRestaurants = async (setAllRestaurants,setFilteredRestaurants)=>{
    try{
    const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const originalData = await data.json();
    let restauro;
    let itemsCount=0;
    originalData.data.cards.forEach((item)=>{
        if(item?.card?.card?.gridElements?.infoWithStyle?.restaurants && item.card.card.gridElements.infoWithStyle.restaurants.length >itemsCount){
            itemsCount=item.card.card.gridElements.infoWithStyle.restaurants.length;
            restauro=item.card.card.gridElements.infoWithStyle.restaurants;
        }
    });
    setAllRestaurants(restauro);
    setFilteredRestaurants(restauro);
    }catch(err){
        console.log(err);
    }
}

const Body =()=>{
    const [searchInput,setSearchInput] = useState('');
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);

    useEffect(()=>{
        getRestaurants(setAllRestaurants,setFilteredRestaurants);
    },[]);
   
    const isOnline = useOnline();
    if(!isOnline){
        return <h1>🔴Offline,please check your internet connection!!</h1>;
    }

    return (allRestaurants.length === 0)?<CardSkeleton /> :(
        <div className="card-section min-h-lvh max-w-screen-xl pb-10 sm:mx-auto flex flex-col items-center pt-28 " >
        
        <div className=" scroll-element mb-4 pb-1 px-4 flex items-center justify-between max-w-full mx-auto overflow-auto xl:overflow-hidden  gap-8  ">
            <div className="relative">
                <input type="text" placeholder="Search restaurant...." data-testid="search-input"  className=" border-2 pl-10 py-2  rounded-full focus:outline-none" value={searchInput} onChange={(e)=>{
                    setSearchInput(e.target.value);
                    const data = filterRestaurants(allRestaurants,e.target.value);
                    setFilteredRestaurants(data);
                }}/>
                <i className="fa-solid text-gray-500 fa-magnifying-glass absolute top-3.5 left-3"></i>
            </div>
            <button className="border-2 px-5 py-2 text-gray-500 rounded-full focus:outline-none whitespace-nowrap" onClick={()=> setFilteredRestaurants(allRestaurants)}>All Restaurants</button>
            <button className="border-2 px-5 py-2 text-gray-500 rounded-full focus:outline-none whitespace-nowrap" onClick={()=>{
                const data = ratingFilter(allRestaurants);
                setFilteredRestaurants(data);
            }}>Ratings 4.3+</button>
            <button className="border-2 px-5 py-2 text-gray-500 rounded-full focus:outline-none whitespace-nowrap" onClick={()=>{
                const data = vegFilter(allRestaurants);
                setFilteredRestaurants(data);
            }}>Pure Veg</button>

            <button className="border-2 px-5 py-2 text-gray-500 rounded-full focus:outline-none whitespace-nowrap" onClick={()=>{
                const data = lessThan300_filter(allRestaurants);
                setFilteredRestaurants(data);
            }}>Less than ₹300</button>
            <button className="border-2 px-5 py-2 text-gray-500 rounded-full focus:outline-none whitespace-nowrap" onClick={()=>{
                 const data = between300_600_filter(allRestaurants);
                 setFilteredRestaurants(data);
            }}>Range:₹300-₹600</button>
            
        </div>

        {filteredRestaurants.length === 0 ?<h1 className="retauro-not-found">No Restaurant fount</h1>: 
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 sm:gap-20 lg:gap-10  sm:px-10 px-8" data-testid="res-list">
            {filteredRestaurants.map((restaurant)=> {
                return (
                    <Link  to={"/menu/"+restaurant?.info?.id} key={restaurant?.info?.id}>
                        <Restaurant  {...restaurant.info}/>
                    </Link>
                )
            }
            )}
        </div>
            }
        </div>
    )
}

export default Body;