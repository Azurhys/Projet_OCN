import React, { useEffect } from "react";
import BeltSelector from "./back/BeltSelector";
import { useState } from "react";

const Poomsae = () => {

    const [randomNumber, setRandomNumber] = useState(null);
    const [selectedKeup, setSelectedKeup] = useState(null);

    const generateRandomNumber = (max) => {
        const randomValue = Math.floor(Math.random() *  (max - 1)) + 1 ;
        setRandomNumber(randomValue);
      };

    return ( <div className="">
        <BeltSelector onBeltSelect={(poomsae) => {
                setSelectedKeup(poomsae);
                generateRandomNumber(poomsae);
            }} />
            {selectedKeup !== null && (
                <p className="poomsae">Poomsae de grade: {selectedKeup}  </p>
                
            )}
            {randomNumber !== null && (
                <p className="poomsae">Poomsae aleatoire: {randomNumber}  </p>
            )}
         </div> );
}
 
export default Poomsae;