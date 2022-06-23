import React, { useState } from 'react';

import styled from 'styled-components';

const Button = styled.button`
  color: darkred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkred;
  border-radius: 3px;
`;

function ArmDrone() {
    fetch('http://localhost:8081/arm', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
}


function ArmButton() {

    const [drone, setDrone] = useState(0)
    

    return (
        <div>
            <Button
                onClick={() => ArmDrone()}>Arm Drone</Button>
        </div>
    )
}

export default ArmButton
