import React, { useEffect } from "react";
import BeltSelector from "./back/BeltSelector";
import { useState } from "react";

const Poomsae = () => {
    
    const [randomNumber, setRandomNumber] = useState(null);
    const [selectedKeup, setSelectedKeup] = useState(null);

    const reset_animation = () =>  {
        var el = document.getElementById('random');
        el.style.animation = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = null; 
      }

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
                <p className="poomsae">Poomsae de grade : {selectedKeup}  </p>
                
            )}
            {randomNumber !== null && (
                <div className="poomsae d-flex">
                    <p>Poomsae aleatoire :</p><p className="focus-in-expand mx-4" id='random'> {randomNumber}</p>  </div>
            )}
            {selectedKeup !== null && (
                <button className="btn btn-warning align-self" onClick={() => {generateRandomNumber(selectedKeup)
                    reset_animation()
                    }}>
                    Faire un nouveau tirage
                </button>
            )}
         </div> );
}
 
export default Poomsae;