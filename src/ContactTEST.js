import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 53.765762 ,
  lng: -2.692337
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA5UP9cQo6xMXRFUGBwV6WoQqzMA8VIcII"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

const Contact = () => {

    return(
      <section className='magicMargin'>
       <h1>Kontakt:</h1>
       <p>
          Kościuszki 20, <br/>
          55-100 Trzebnica
        </p>

        <div>
          <MyComponent />
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75458.42707036035!2d-2.767192282587624!3d53.77033709999582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0ccb0b7b3c4d%3A0xd68703fb79b28721!2sPreston!5e0!3m2!1sen!2suk!4v1678831222780!5m2!1sen!2suk" width="300" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>     
        </div>
      </section>
    )
  };
  
  export default Contact;