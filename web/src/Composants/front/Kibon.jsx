import React, { useEffect, useState } from 'react';
import useKibon from '../../hooks/useKibons';
import Menu from './Menu';
import FlipCard from '../back/FlipCard';
import BeltSelector from '../back/BeltSelector'
import Belt from '../back/Belt';

const Kibon = () => {
    const [selectedGrade, setSelectedGrade] = useState(null);
    const { data } = useKibon({ grade: selectedGrade });
    const [belt, setBelt] =  useState(null);
    const [reload, setReload] = useState(false);
    const [resetCount, setResetCount] = useState(0); 
    
    useEffect(() => {
        if (belt) {
            // Extraire le grade à partir de la ceinture sélectionnée
            const grade = belt.dan ? `${belt.dan}dan` : `${belt.keup}keup`;
            setSelectedGrade(grade);
        }
    }, [belt]);

    const handleReload = () => {
        setReload(!reload);
        setResetCount(resetCount + 1);
    };

    const getRandomItems = (array) => {
        const randomIndexes = [];
        while (randomIndexes.length < 2) {
            const randomIndex = Math.floor(Math.random() * array.length);
            if (!randomIndexes.includes(randomIndex)) {
                randomIndexes.push(randomIndex);
            }
        }
        return randomIndexes.map(index => array[index]);
    };
    
    if (!data) {
        return <div>
            <Menu />
            <BeltSelector onBeltSelect={(belt) => {
                setBelt(belt);
            }} /></div>;
    }

    const randomItemsSuperieurs = getRandomItems(data.enchainements_membres_superieurs_positions);
    const randomItemsMixte = getRandomItems(data.enchainements_membres_superieurs_inferieurs_positions);
    const randomItemsInférieurs = getRandomItems(data.enchainements_membres_inferieurs);

    return (
        <div className=''>
            <Menu />
            <BeltSelector onBeltSelect={(belt) => {
                setBelt(belt);
            }} />
            <div className='d-flex flex-column align-items-center'>
                {belt !== null && (
                    <div className="w-50 m-3">
                        <Belt ceinture={belt.ceinture} barette={belt.barette} second={belt.second} dan={belt.dan}/>
                    </div>
                )}
                <button className="btn btn-warning" onClick={handleReload}>Refaire un tirage</button>
                {data && (
                    <div className='d-flex flex-row'>
                        <FlipCard data={randomItemsSuperieurs} titre={'MEMBRES SUPERIEURS'} resetCount={resetCount} />
                        <FlipCard data={randomItemsMixte} titre={'MEMBRES SUPERIEURS ET INFÉRIEURS'} resetCount={resetCount} />
                        <FlipCard data={randomItemsInférieurs} titre={'MEMBRES INFÉRIEURS'} resetCount={resetCount} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Kibon;
