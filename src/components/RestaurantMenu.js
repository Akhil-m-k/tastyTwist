import { useParams } from "react-router-dom";
import { useRestaurant } from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { IMG_Restauro_Card, ITEM_IMG_CDN_URL } from "../config";
import dummyImg from "../../public/images/dummy.png";
import MenuSkeleton from "./menuSkeleton";
import { useState,useEffect } from "react";

const Section = ({ restauro, title, identifier, isVisible, setVisible }) => {
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div key={identifier}>
      {isVisible ? (
        <div
          key={identifier + 1}
          className="cursor-pointer text-lg sm:text-2xl flex justify-between font-medium bg-white shadow-md p-3 mb-2"
          onClick={() => setVisible(false)}
        >
          <span>{title}</span>
          <span>
            <i className="fa-solid fa-angle-up"></i>
          </span>
        </div>
      ) : (
        <div
          key={identifier + 2}
          className="cursor-pointer flex justify-between text-lg sm:text-2xl font-medium bg-white shadow-md p-3 mb-2"
          onClick={() => setVisible(true)}
        >
          <span>{title}</span>
          <span>
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
      )}
      {isVisible && (
        <div key={identifier + 3}>
          {restauro.itemCards.map((item, index) => (
            <div className="item-card flex flex-col sm:flex-row border-b-2 border-gray-300 py-4" key={index + identifier}>
              <div className="pr-3 max-w-28 flex flex-col items-center justify-center  mt-2 sm:mt-0">
                <img
                  src={item.card.info.imageId ? ITEM_IMG_CDN_URL + item.card.info.imageId : dummyImg}
                  alt=""
                  className="rounded-md min-h-20 w-full border border-gray-300"
                />
                <button
                  className="bg-green-600 px-4 rounded-md text-white shadow w-full mb-2 sm:mb-0 p-1 mt-2"
                  onClick={() => addFoodItem(item.card.info)}
                >
                  Add
                </button>
              </div>
              <div className="">
                <h3 className=" text-xl sm:text-2xl font-bold mb-2 sm:mb-0">{item.card.info.name}</h3>
                <h5 className="text-gray-500 mb-2 sm:mb-0">{item.card.info.description}</h5>
                <h4 className="text-lg  font-bold bg-green-100 inline px-2">
                  {"₹" + Math.ceil(item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100)}
                </h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurants, restauroMenu] = useRestaurant(id);
  const [isVisibleSection, setIsVisibleSection] = useState();

  return restauroMenu.length === 0 ? (
    <MenuSkeleton />
  ) : (
    <div className="min-h-lvh">
      <div className="bg-gray-900 pt-28" key={1}>
        <div className="flex flex-col sm:flex-row justify-between max-w-screen-xl py-5 px-8 sm:px-12 mx-auto">
          <div className="flex flex-col sm:flex-row" key={1}>
            <img
              src={IMG_Restauro_Card + restaurants[0].card.card.info.cloudinaryImageId}
              alt=""
              className="max-h-72 sm:h-auto sm:max-w-40 rounded-md"
            />
            <div className="pl-2 mt-2 sm:mt-0 sm:pl-5">
              <h1 className="text-white w-full text-2xl sm:text-3xl md:text-4xl font-bold">{restaurants[0].card.card.info.name}</h1>
              <h4 className="text-white text-lg ">{restaurants[0].card.card.info.cuisines.join(",")}</h4>
              <h5 className="text-white text-lg pt-3">{restaurants[0].card.card.info.areaName}, {restaurants[0].card.card.info.city}</h5>
              <h6 className="text-white text-lg pt-2">{restaurants[0].card.card.info.costForTwoMessage}</h6>
              <h2 className="text-white pt-2">
                <span className=" border-r-2 pr-4" key={1}>
                  <i className="fa-solid fa-motorcycle pr-2"></i>
                  {restaurants[0].card.card.info.sla.lastMileTravelString}
                </span>
                <span className="px-4 border-r-2" key={2}>
                  {restaurants[0].card.card.info.sla.slaString}
                </span>
                <span className="pl-4" key={3}>
                  {restaurants[0].card.card.info.isOpen ? (
                    <span className="text-green-600 text-lg">Open</span>
                  ) : (
                    <span className="text-red-600">Closed</span>
                  )}
                </span>
              </h2>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-center justify-center sm:mr-6" key={2}>
            <div className="rounded-md border-2 p-4">
              <h2 className="text-green-700 font-bold border-b-2 pb-2 text-center">
                <span>
                  <i className="fa-solid fa-star"></i>
                  {restaurants[0].card.card.info.avgRating}
                </span>
              </h2>
              <h3 className="text-white pt-2">{restaurants[0].card.card.info.totalRatingsString}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl py-5 px-6 mx-auto sm:px-10 mt-4 mb-8" key={2}>
        {restauroMenu.map((restauro, i) => {
          if (restauro.card.card.itemCards) {
            return (
              <Section
                key={restauro.card.card.title}
                title={restauro.card.card.title}
                restauro={restauro.card.card}
                identifier={i}
                isVisible={isVisibleSection === restauro.card.card.title}
                setVisible={(bool) => bool ? setIsVisibleSection(restauro.card.card.title) : setIsVisibleSection("")}
              />
            );
          } else if (restauro.card.card.categories) {
            return (
              <div key={restauro.card.card.title}>
                {restauro.card.card.categories.map((category, index) => (
                  <Section
                    key={category.title}
                    title={category.title}
                    restauro={category}
                    identifier={i}
                    isVisible={isVisibleSection === category.title}
                    setVisible={(bool) => bool ? setIsVisibleSection(category.title) : setIsVisibleSection("")}
                  />
                ))}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
