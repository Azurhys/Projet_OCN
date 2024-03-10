import React, { useState, useEffect } from 'react';

const FlipCard = ({ data, titre, resetCount }) => {
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

    useEffect(() => {
        // Remettre à zéro les cartes sélectionnées lors d'un nouveau tirage
        setSelectedCards([]);
    }, [resetCount]);

    const makeTextBold = (text) => {
        // Vérifiez si le texte est défini avant de tenter de le mettre en gras
        if (text) {
            // Utilisez une expression régulière avec la fonction replace pour mettre en gras les occurrences de "JOUTCHOUM SEUGUI" et autres
            const boldText = text.replace(/(JOUTCHOUM SEUGUI|AP KOUBI SEUGUI|DWITT KOUBI SEUGUI|AP SEUGUI|DWITT KOA SEUGUI|BEUM SEUGUI)/g, '<br><b>$1</b>');
            // Renvoie le texte avec les occurrences mises en gras
            return <div dangerouslySetInnerHTML={{ __html: boldText }} />;
        }
        // Si le texte est indéfini, renvoyer simplement une chaîne vide
        return '';
    };
    
    return ( <div>
                <div className='d-flex flex-column '>
                    {data && data.map((item, index) => (
                        <div className='m-5'>
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