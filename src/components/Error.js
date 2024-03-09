import { useRouteError } from "react-router-dom"
import errorGif from "../../public/images/dribbble_1.gif";
import { Link } from 'react-router-dom';
import {useEffect} from "react";

const Error = ()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const err = useRouteError();
    return (
        <div className="h-lvh grid place-items-center ">
            <div className="flex justify-center items-center flex-col">
                <div className="error-gif-div">
                <h1 className="text-6xl text-center font-bold">{err.status}</h1>
                <img  className="error-gif" src={errorGif} alt="" />
                </div>
                <h2 className="text-xl font-bold text-center">{"Page "+err.statusText}</h2>
                <Link to="/" className="inline"><button className="bg-green-600 font-bold text-white text-lg py-2 rounded-md mt-3 px-3">Go Home</button></Link>
            </div>
        </div>
    )
}

export default Error;
