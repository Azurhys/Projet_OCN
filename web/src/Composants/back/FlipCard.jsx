import React, { useState } from 'react';

const FlipCard = ({ data, titre }) => {
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
    const makeTextBold = (text) => {
        // Utilisez une expression régulière avec la fonction replace pour mettre en gras les occurrences de "JOUTCHOUM SEUGUI" et "AP KOUBI SEUGUI"
        const boldText = text.replace(/(JOUTCHOUM SEUGUI|AP KOUBI SEUGUI|DWITT KOUBI SEUGUI|AP SEUGUI)/g, '<br><b>$1</b>');
        // Renvoie le texte avec les occurrences mises en gras
        return <div dangerouslySetInnerHTML={{ __html: boldText }} />;
    };
    
    return ( <div>
                <div className='d-flex flex-row '>
                    {data.map((item, index) => (
                        <div className='mx-5'>
                            <div key={index} className={`flip-container ${selectedCards.includes(index) ? 'clicked' : ''}`} onClick={() => handleCardClick(index)}>
                                <div className='flipper'>
                                    <div className="front">
                                        <h1> { titre } </h1>
                                    </div>
                                    <div className="back">
                                        <h3> { titre } </h3>
                                        <b>{item.tchoumbi}</b>
                                        {makeTextBold(item.enchainement_position)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> );
}
 
export default FlipCard;