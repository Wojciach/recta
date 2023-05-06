import "./Map.scss";
import React, { memo } from 'react';


const Map = memo(() => {
    console.log("MAP COMPONENT RE-RENDERED!!!!");

    const address = encodeURIComponent("Kościuszki 20, 55-100 Trzebnica");

    const url = `https://www.google.com/maps/embed/v1/place?zoom=12&key=AIzaSyA5UP9cQo6xMXRFUGBwV6WoQqzMA8VIcII&q=${address}`;

    return (
        <section id="map">


                <iframe id="gMap" src={url} width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


        </section>
    )
})

export default Map;