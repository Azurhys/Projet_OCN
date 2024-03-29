import React from 'react';

const Belt = ({ceinture, barette, second, dan}) => {
  // Définir les styles du rectangle
  const beltStyle = {
    width: '100%', // Largeur du rectangle
    height: '2em', // Hauteur du rectangle
    backgroundColor: ceinture, // Couleur de fond du rectangle
    display: 'flex', // Utilisation de flexbox
    flexDirection: 'row',
    border: '1px solid',
    
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

  const danStyle = {
    position: 'relative', // Position absolue pour positionner le chiffre
    top: 0, // Aligner verticalement au centre
    left: '90%', // Aligner horizontalement au centre
    color: 'yellow', // Couleur du chiffre
    fontWeight: 'bold', // Police en gras
    fontSize: '1em', // Taille de la police
  };

  return (
    <div style={beltStyle} >
        {barette && <div style={baretteStyle} />}
        {second && <div style={secondStyle} />}
        {dan && (
          <p style={danStyle}>
            {dan} {/* Afficher le chiffre jaune */}
          </p>
        )}
    </div>
  );
};

export default Belt;
