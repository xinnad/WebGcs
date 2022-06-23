import React, { useState } from 'react';

import styled from 'styled-components';

const Button = styled.button`
  color: blue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkred;
  border-radius: 3px;
`;

function DisarmDrone() {
    fetch('http://localhost:8081/disarm', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
}


function DisarmButton() {    

    return (
        <div>
            <Button
                onClick={() => DisarmDrone()}>Disarm Drone</Button>
        </div>
    )
}

export default DisarmButton
