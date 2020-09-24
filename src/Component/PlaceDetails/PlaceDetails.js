import React from 'react';
import { useParams } from 'react-router-dom';
import hotelDetails from '../../Fakedata/hotedetails'
import Hotel from '../Hotel/Hotel';

const PlaceDetails = () => {
    const { id } = useParams();
    const hotel = hotelDetails.filter(hd => hd.place === id);
    console.log( hotel);
    return (
        <div className="container row">
            <div className="col-md-6">
                {
                    hotel.map(room => <Hotel room={room}></Hotel>)
                }
            </div>
            <div className="col-md-6 map">
                <h1>Google Map</h1>
                <iframe
                    width="80%"
                    height="500"
                    scrolling="no"
                 src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDRF49sVEU8EZRUkkGQVp41-s8Pg9NmC_I&q=${hotel.name}` }                
                ></iframe>
            </div>
        </div>
    );
};

export default PlaceDetails;