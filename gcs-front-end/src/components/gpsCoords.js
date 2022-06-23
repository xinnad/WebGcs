import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const PrettyText = styled.label`
  color: darkred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkred;
  border-radius: 3px;
`;

const GPS_REST_ENDPOINT = "http://localhost:8081/gps"
const DEFAULT_POSITION_STATE = {"latitude_deg":0,"longitude_deg":0,"absolute_altitude_m":0,"relative_altitude_m":0}

function GpsCoords() {

    const [gpsPos, setGpsPos] = useState(DEFAULT_POSITION_STATE)

    useEffect( () => {
        
        const timer = setInterval(async () => {
            const res = await fetch(GPS_REST_ENDPOINT);
            const newGpsPos = await res.json();
            setGpsPos(newGpsPos)
        }, 500);

        return () => clearInterval(timer);
    },[]);

    return (
        <div>
            <PrettyText>{gpsPos.latitude_deg}, {gpsPos.longitude_deg}, {gpsPos.absolute_altitude_m}</PrettyText>
        </div>
    )
}

export default GpsCoords
