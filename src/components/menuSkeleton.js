const MenuSkeleton = ()=>{
    return (
        <>
        <div className="pt-28 min-h-lvh">
            <div className="flex flex-col sm:flex-row justify-between max-w-screen-xl py-5 px-8 mx-auto">
               <div className="flex flex-col sm:flex-row py-4">
                    <div  className=" relative bg-gray-300 w-full h-52 sm:w-44 sm:h-44 sm:max-w-40 rounded-md">
                    <div className="shimmer"></div>
                    </div>
                    <div className="relative mt-2 flex flex-col items-start sm:mt-0 sm:pl-5">
                        <div className=" w-64 max-w-64 sm:w-80 sm:max-w-80 h-10 bg-gray-300  rounded-md"></div>
                        <div className="text-lg w-64 max-w-64 mt-1 h-5 bg-gray-300 rounded-md"></div>
                        <div className="text-lg w-52 max-w-52 pt-3 h-6 mt-2 bg-gray-300 rounded-md"></div>
                        <div className="text-lg  w-48 max-w-48 pt-2 h-6 mt-2 bg-gray-300 rounded-md"></div>
                        <div className="pt-2 w-64 max-w-64 flex justify-between mt-2">
                            <div className="pr-4 bg-gray-300 h-6 w-16  rounded-md"></div>
                            <div className="px-4 bg-gray-300 h-6 w-16  rounded-md"></div>
                            <div className="pl-4 bg-gray-300 h-6 w-16 rounded-md"></div>
                        </div>
                        <div className="shimmer"></div>
                    </div>
               </div>
               <div className=" hidden relative sm:flex flex-col  items-center justify-center sm:mr-8">
                    <div className="rounded-md flex flex-col items-center justify-center w-32 max-w-32 h-24 border-2 p-4">
                    <div className=" pb-3 border bg-gray-300 w-10 h-5  text-center rounded-md"></div>
                    <div className="mt-2 w-14 bg-gray-300 h-5 rounded-md"></div>
                    <div className="shimmer"></div>
                    </div>
               </div>
            </div>
            <span className="flex flex-col mt-2 mb-3 gap-2 max-w-screen-xl mx-auto px-8 items-center">
                {Array(10).fill(0).map((_,i)=>{
                    return(
                        <div className="w-full h-12 py-2 bg-gray-300 relative" key={i}><div className="shimmer"></div></div>
                    )
                })}
                
            </span>

        </div>
        </>
    )
}

export default MenuSkeleton;