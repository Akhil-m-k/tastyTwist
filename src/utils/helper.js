export const filterRestaurants = (restaurants,searchInput)=>{
    return restaurants.filter((restaurant)=>{
        return restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    });
 }
 
 export const ratingFilter =(restaurants)=>{
    return restaurants.filter((restaurant)=>{
        return restaurant.info.avgRating > 4.3;
    })
 }

 export const vegFilter = (restaurants)=>{
        return restaurants.filter((restaurant)=>{
            return restaurant.info.veg
        })
 }

 export const lessThan300_filter =(restaurants)=>{
    return restaurants.filter((restaurant)=>{
        return Number(restaurant.info.costForTwo.split(" ")[0].slice(1)) < 300;
    })
 }

 export const between300_600_filter =(restaurants)=>{
    return restaurants.filter((restaurant)=>{
        return Number(restaurant.info.costForTwo.split(" ")[0].slice(1)) > 300 && Number(restaurant.info.costForTwo.split(" ")[0].slice(1)) < 600;
    })
 }