import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function ParkMap() {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY })

    if (!isLoaded) {
        return <div>Loading ...</div>
    }

    return <Map />
}

function Map() {
    return <GoogleMap zoom={10} center={{lat: 29.95862, lng: -95.42057}} mapContainerClassName="map-container"></GoogleMap>
}