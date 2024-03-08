import React, { useState } from 'react';
import useKibon from '../../hooks/useKibons';
import Menu from './Menu';


const Kibon = () => {
    const { data } = useKibon();
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    // Gérer le clic sur la carte
    const handleCardClick = (index) => {
        // Met à jour l'index de la carte sélectionnée
        setSelectedCardIndex(index === selectedCardIndex ? null : index);
    };

    // Si data n'est pas encore disponible, affichez un message de chargement
    if (!data) {
        return <div>Loading...</div>;
    }

    // Une fois que data est disponible, affichez les enchaînements
    return (
        <div>
            <Menu />
            <h1> Kibon :</h1>
            {data.enchainements_membres_superieurs_positions.map((item, index) => (
                <div key={index} className={`flip-container ${index === selectedCardIndex ? 'clicked' : ''}`} onClick={() => handleCardClick(index)}>
                    <div className='flipper'>
                        <div className="front">
                            Membres Supérieurs
                        </div>
                        <div className="back">
                            {item.tchoumbi}: {item.enchainement_position}
                        </div>
                    </div>
                </div>
            ))}

            {data.enchainements_membres_superieurs_inferieurs_positions.map((item, index) => (
                <div key={index}>{item.tchoumbi}: {item.enchainement_position}</div>
            ))}

            {data.enchainements_membres_inferieurs.map((item, index) => (
                <div key={index}>{item.tchoumbi}: {item.enchainement || item.enchainement_position}</div>
            ))}
        </div>
    );
}

export default Kibon;
