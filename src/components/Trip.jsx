import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FavoriteTrips from "./FavoriteTrips";
import { TbHeartBroken } from "react-icons/tb";

const Trip = ({ alltrips, updateState, setTrips, updateFavorite }) => {
  const deleteTrip = (id) => {
    axios.delete(` https://trip-commander-back.herokuapp.com/trips/${id}`).then((res) => {
      console.log(res);
      updateState(id);
    });
  };

  const [favUpdater, setFavUpdater] = useState(0);
  const handleFavorite = (id, favorite) => {
    setFavUpdater(favUpdater + 1);
    console.log("trip.favorite =", favorite);
    if (favorite === true) {
      //send axios request with favorite = false
      axios
        .put(` https://trip-commander-back.herokuapp.com/trips/${id}`, { favorite: false })
        .then((res) => {
          updateFavorite(res.data._id);
        });
    } else {
      //send axios request with favorite = true
      axios
        .put(` https://trip-commander-back.herokuapp.com/trips/${id}`, { favorite: true })
        .then((res) => {
          updateFavorite(res.data._id);
        });
    }
    setFavUpdater(favUpdater + 1);
  };

  return (
    <div className="w-full h-full flex  justify-center    ">
      <div className="w-full h-full flex-wrap flex  ">
        {alltrips.map((trip) => {
          return (
            <>
              <div className="mt-6 flex   items-center flex-col container mx-auto p-1 bg-yellow-500 bg-opacity-90  drop-shadow-md rounded-md  w-5/12 h-auto">
                <div className="w-full">
                  <div className="flex align-center justify-center  ">
                    <button
                      onClick={() => deleteTrip(trip._id)}
                      type="button"
                      className="inline-flex px-6 py-3 items-center  border border-transparent
                    text-xs font-medium rounded text-indigo-700 text-color-white bg-indigo-100
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-red-500"
                    >
                      🗑️                                                                   
                    </button>                                 
                  </div>
                 <div className="text-center">
                 <h2>TripName</h2>
                  <div className="tripTitle font-medium items-center">
                    {" "}
                    {trip.tripName}{" "}
                  </div>
                </div>
              </div>
                <div>
                  <h3>TripItinerary</h3>
                  <div>
                    <div className="cities font-medium">
                      {trip.departureCity} - {trip.arrivalCity}
                    </div>
                    <div className="w-full text-xs  ">
                      {trip.departureDate} - {trip.returnDate}
                    </div>

                    <div className="dates font-medium">
                    Ticket Price: {trip?.flightObj?.price?.total}
                    </div>
                    <div>{trip.favorite}</div>

                  

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                     

                      <div>
                        <button
                          onClick={() =>
                            handleFavorite(trip._id, trip.favorite)
                          }
                          className="inline-flex items-center px-2.5 py-1.5 border border-transparent 
                      text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          {trip.favorite ? (
                            <span> ♥️ </span>
                          ) : (
                            <span>
                              <TbHeartBroken />
                            </span>
                          )}
                        </button>
                      </div>

                      <Link to={`/trip/${trip._id}`}>
                        <button
                          type="button"
                          /*onClick={routeChange}*/
                          className="inline-flex items-center px-2.5 py-1.5 border border-transparent 
                      text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          🔎
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        {/* <div>
      <h1> <FavoriteTrips  allTrips={alltrips} updateFavorite/> </h1>
 {updateFavorite}    </div> */}
      </div>
    </div>
  );
};

export default Trip;
