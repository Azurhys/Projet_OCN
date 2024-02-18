import React from 'react';

const Belt = ({ceinture, barette, second}) => {
  // Définir les styles du rectangle
  const beltStyle = {
    width: '100%', // Largeur du rectangle
    height: '2em', // Hauteur du rectangle
    backgroundColor: ceinture, // Couleur de fond du rectangle
    display: 'flex', // Utilisation de flexbox
    flexDirection: 'row',
  };

  const baretteStyle = {
    width: '5%', // Largeur du rectangle de la barette
    height: '100%', // Hauteur du rectangle de la barette
    backgroundColor: barette, // Couleur de fond du rectangle de la barette
    position: 'relative', 
    top: 0, // Aligner le haut du rectangle de la barette avec le haut de la ceinture
    left: '90%', // Aligner le rectangle de la barette à droite de la ceinture
  };

  const secondStyle = {
    width: '5%', // Largeur du rectangle de la barette
    height: '100%', // Hauteur du rectangle de la barette
    backgroundColor: second, // Couleur de fond du rectangle de la barette
    position: 'relative', 
    top: 0, // Aligner le haut du rectangle de la barette avec le haut de la ceinture
    left: '75%', // Aligner le rectangle de la barette à droite de la ceinture
    zIndex: 1,
  };

  return (
    <div style={beltStyle}>
        {barette && <div style={baretteStyle} />}
        {second && <div style={secondStyle} />}
    </div>
  );
};

export default Belt;
