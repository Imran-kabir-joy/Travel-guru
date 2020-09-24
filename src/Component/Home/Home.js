import React, { useEffect, useState } from 'react';
import './Home.css'
import place from '../../Fakedata/place.json'
import { Link } from 'react-router-dom';



const Home = () => {
    const [areaInfo, setAreaInfo] = useState(place);



    return (
        <div className="home">


            <div className="row container body">
                <div className="col-5">
                    <h1>COX'S BAZAR</h1>
                    <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                   <button className="btn btn-warning">Booking &#8594;</button>
                </div>
                <div className="col-7 p-4 d-flex ">
                    {
                        areaInfo.map(place => {
                            return (
                                <Link to={`/place/${place.id}`} > <div className="card cox" style={{ width: '18rm',backgroundImage:`url(${place.img})` }}>

                                <h1 className="place">{place.name}</h1>
                              </div></Link>
                            )
                        })
                    }
                
                </div>
            </div>
        </div>
    );
}

export default Home;