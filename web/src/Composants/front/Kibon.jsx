import React, { useState } from 'react';
import useKibon from '../../hooks/useKibons';
import Menu from './Menu';
import FlipCard from '../back/FlipCard';
import BeltSelector from '../back/BeltSelector'

const Kibon = () => {
    const { data } = useKibon();
    const [selectedCards, setSelectedCards] = useState([]);

    // Gérer le clic sur la carte
    const handleCardClick = (index) => {
        // Vérifie si la carte a déjà été sélectionnée
        const isSelected = selectedCards.includes(index);
        if (isSelected) {
            // Retire la carte de la liste des cartes sélectionnées si elle est déjà sélectionnée
            setSelectedCards(selectedCards.filter((cardIndex) => cardIndex !== index));
        } else {
            // Ajoute la carte à la liste des cartes sélectionnées si elle n'est pas déjà sélectionnée
            setSelectedCards([...selectedCards, index]);
        }
    };

    // Si data n'est pas encore disponible, affichez un message de chargement
    if (!data) {
        return <div>Loading...</div>;
    }

    // Une fois que data est disponible, affichez les enchaînements
    return (
        <div>
            <Menu />
            <BeltSelector />
            <FlipCard data={data.enchainements_membres_superieurs_positions} titre={'MEMBRES SUPERIEURS'} /> 
        </div>
    );
}

export default Kibon;
