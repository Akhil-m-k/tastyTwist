import { useState,useEffect } from "react";
import { IMG_Restauro_Menu } from "../config";

export  const useRestaurant=(id)=>{
    const [restaurants,setRestaurants] = useState([]);
    const [restauroMenu,setRestauroMenu] = useState([]);
    useEffect(()=>{
        getRestauroMenu(setRestaurants,setRestauroMenu,id);
    },[]);
    const getRestauroMenu = async(setRestaurants,setRestauroMenu,id)=>{
        const data = await fetch(IMG_Restauro_Menu+id);
        const json = await data.json();
        console.log(json);
        setRestaurants(json?.data?.cards);
        setRestauroMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }
    return [restaurants,restauroMenu];
}