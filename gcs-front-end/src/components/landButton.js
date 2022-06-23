import React, { useState } from 'react';

import styled from 'styled-components';

const Button = styled.button`
  color: green;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkred;
  border-radius: 3px;
`;

function LandDrone() {
    fetch('http://localhost:8081/land', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
}


function LandButton() {    

    return (
        <div>
            <Button
                onClick={() => LandDrone()}>Land Drone</Button>
        </div>
    )
}

export default LandButton
