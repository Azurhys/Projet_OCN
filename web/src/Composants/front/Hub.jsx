import { NavLink } from "react-router-dom";
import { useState } from 'react';

const Hub = () => {
    // Créer un état pour suivre le survol de chaque tuile
    const [hoveredTiles, setHoveredTiles] = useState(Array(4).fill(false));

    const tileStyle = {
        width: '50vw',
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3em',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'white',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative', // Position relative pour contenir la couche colorée
        overflow: 'hidden', // Cacher le dépassement pour assurer que le texte ne déborde pas
    };

    const overlayStyle = {
        position: 'absolute', // Position absolue pour recouvrir complètement la tuile
        top: 0,
        left: 0,
        width: '100%', // Largeur de la tuile
        height: '100%', // Hauteur de la tuile
        backgroundColor: 'rgba(0, 0, 0, 0.9)', // Couleur de fond semi-transparente
        opacity: 0, // Initialiser l'opacité à 0
        transition: 'opacity 0.3s ease', // Transition douce pour l'opacité
    };

    const textStyle = {
        position: 'absolute', // Position absolue pour placer le texte sur la tuile
        top: 0, // Alignement vertical
        left: 0, // Alignement horizontal
        width: '100%', // Largeur de la tuile
        height: '100%', // Hauteur de la tuile
        display: 'flex', // Utilisation de flexbox
        alignItems: 'center', // Centrer verticalement
        justifyContent: 'center', // Centrer horizontalement
        opacity: 0, // Initialiser l'opacité à 0
        transition: 'opacity 0.3s ease', // Transition douce pour l'opacité
    };

    // Gestionnaire de survol de la tuile
    const handleTileHover = (index) => {
        setHoveredTiles(hoveredTiles.map((_, i) => i === index)); // Mettre à jour l'état du survol de la tuile spécifique
    };

    // Gestionnaire de sortie de survol de la tuile
    const handleTileLeave = () => {
        setHoveredTiles(Array(4).fill(false)); // Réinitialiser l'état du survol de toutes les tuiles
    };

    const menuOptions = [
        { title: 'Poomsae', link: '/poomsae', img: '/poomsae.jpg' },
        { title: 'Kibon', link: '/kibon', img:'/kibon.jpg'},
        { title: 'Theorie', link: '/theorie', img:'/theorie.png' },
        { title: 'Evaluation', link: '/evaluation', img:'/evaluation.png'},
    ];

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', justifyContent: 'center', minHeight: '100vh' }} className="m-0 p-0 vw-100">
            {menuOptions.map((option, index) => (
                <NavLink 
                    key={index} 
                    to={option.link} 
                    style={tileStyle} 
                    onMouseEnter={() => handleTileHover(index)} 
                    onMouseLeave={handleTileLeave}
                >
                    <div style={{ ...tileStyle, backgroundImage: `url(${option.img})` }}>
                        <div style={{ ...(hoveredTiles[index] ? overlayStyle : {}), ...textStyle, opacity: hoveredTiles[index] ? 1 : 0 }}>{option.title}</div>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default Hub;
