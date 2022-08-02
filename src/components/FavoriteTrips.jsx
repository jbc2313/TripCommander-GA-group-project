import React, { useState } from "react";

import { Link } from "react-router-dom";
import Trip from "./Trip";
import HeartP from "../../src/images/icons/hearts/hearts.png";

const FavoriteTrips = ({ UserTrips }) => {
  return (
    // Parent divs
    <div className=" bg-white bg-opacity-80 w-10/12 flex justify-center  h-fit">
    <div className="flex flex-wrap">
     
     {/* trips and icon   */}
     <div className="w-full flex justify-center">   
        <img
          className="block lg:hidden h-8 w-auto"
          src={HeartP}
          alt="logo"
        ></img>
      <h2 className="text-3xl  font-extrabold tracking-tight text-gray-900  sm:text-4xl">
        <span className="block"> Trips</span>
      </h2>
      </div>


      {/* favorite trips data */}
      {UserTrips?.map((trip) => {
        return (
          <>
            {trip?.favorite && (
              <> 
                <div key={trip._id} className="w-1/2 flex wrap items-center justify-center mb-1 ">
                  <div className="bg-red-500 mt-4   w-full h-full rounded-md m-2  text-center p-1 ">
                    <div className="tripTitle font-medium items-center bg-yellow-600 rounded-md">
                      {trip?.tripName}
                    </div>
                    <div className="cities font-medium">
                      {" "}
                      {trip?.departureCity} - {trip?.arrivalCity}{" "}
                    </div>
                    <div className="dates font-medium">
                      {trip?.departureDate} - {trip?.returnDate}{" "}
                    </div>
                    <div className="dates font-medium">
                      {" "}
                      {trip?.flightId} - {trip?.airlineType}{" "}
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        );
      })}
    </div>
    </div>
  );
};
export default FavoriteTrips;
