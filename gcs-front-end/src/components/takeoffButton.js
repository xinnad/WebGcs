import React, { useState } from 'react';

import styled from 'styled-components';

const Button = styled.button`
  color: orange;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkred;
  border-radius: 3px;
`;

function TakeoffDrone() {
    fetch('http://localhost:8081/takeoff', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
}


function TakeoffButton() {    

    return (
        <div>
            <Button
                onClick={() => TakeoffDrone()}>Takeoff Drone</Button>
        </div>
    )
}

export default TakeoffButton
