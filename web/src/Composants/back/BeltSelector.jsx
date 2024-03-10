import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Belt from "./Belt";

const BeltSelector = ({ onBeltSelect }) => {
    
    const [selectedBelt, setSelectedBelt] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
    // useEffect(() => {
    //     console.log(selectedBelt);
    //     console.log(showModal)
    // }, [selectedBelt, showModal]);

    // useEffect(() => {
    //     setShowModal(true);
    // }, []);

    // Données des ceintures
    const kidsData = [
        { ceinture: 'white', barette: '', second:'', keup:'15', name: 'Blanche' },
        { ceinture: 'yellow', barette: '', second:'', keup:'14', name: 'Jaune' },
        { ceinture: 'yellow', barette: 'orange', second:'', keup:'13', name: 'Jaune 1 barette' },
        { ceinture: 'orange', barette: '', second:'', keup:'12', name: 'Orange' },
        { ceinture: 'orange', barette: 'green', second:'', keup:'11', name: 'Orange 1 barette' },
        { ceinture: 'green', barette: '', second:'', keup:'10', name: 'Verte' },
        { ceinture: 'green', barette: 'purple', second:'', keup:'9', name: 'Verte 1 barette' },
        { ceinture: 'purple', barette: '', second:'', keup:'8', name: 'Violette' },
        { ceinture: 'purple', barette: 'blue', second:'', keup:'7', name: 'Violette 1 barette' },
        { ceinture: 'blue', barette: '', second:'', keup:'6', name: 'Bleue' },
        { ceinture: 'blue', barette: 'red', second:'', keup:'5', name: 'Bleue 1 barette' },
        { ceinture: 'blue', barette: 'red', second:'red', keup:'4', name: 'Bleue 2 barettes' },
        { ceinture: 'red', barette: '', second:'', keup:'3', name: 'Rouge' },
        { ceinture: 'red', barette: 'black', second:'', keup:'2', name: 'Rouge 1 barette' },
        { ceinture: 'red', barette: 'black', second:'black', keup:'1', name: 'Rouge 2 barettes' },
    ];

    const adultData = [
        { ceinture: 'white', barette: '', second:'', keup:'10', name: 'Blanche', poomsae : 1 },
        { ceinture: 'yellow', barette: '', second:'', keup:'9', name: 'Jaune', poomsae : 2 },
        { ceinture: 'yellow', barette: 'blue', second:'', keup:'8', name: 'Jaune 1 barette', poomsae :3 },
        { ceinture: 'yellow', barette: 'blue', second:'blue', keup:'7', name: 'Jaune 2 barettes', poomsae :4 },
        { ceinture: 'blue', barette: '', second:'', keup:'6', name: 'Bleue', poomsae :5 },
        { ceinture: 'blue', barette: 'red', second:'', keup:'5', name: 'Bleue 1 barette', poomsae : 6},
        { ceinture: 'blue', barette: 'red', second:'red', keup:'4', name: 'Bleue 2 barettes', poomsae :6 },
        { ceinture: 'red', barette: '', second:'', keup:'3', name: 'Rouge', poomsae : 7},
        { ceinture: 'red', barette: 'black', second:'', keup:'2', name: 'Rouge 1 barette', poomsae : 8},
        { ceinture: 'red', barette: 'black', second:'black', keup:'1', name: 'Rouge 2 barettes', poomsae : 8},
        { ceinture: 'black', dan:"1", keup:'-', name: '1er Dan', poomsae : 9},
        { ceinture: 'black', dan:"2", keup:'-', name: '2eme Dan', poomsae : 10},
    ];

    // Gestionnaire de sélection de ceinture
    const handleBeltSelect = (belt) => {
        setSelectedBelt(belt);
        setShowModal(false);
        onBeltSelect(belt)
    };

    // Gestionnaire de fermeture de la modal
    const handleClose = () => {
        setShowModal(false);
    };

    return (
         <div className=''>
            <div className='d-flex justify-content-center my-5'>
                <button className='btn btn-primary' onClick={() => setShowModal(true)}>
                    Sélectionner une ceinture
                </button>
            </div>
            {showModal &&
                <div className="card">
                    <div className="card-body d-flex">
                        <div className='w-50'>
                            <h1 className='text-center'>Enfants</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Keup</th>
                                        <th>Ceintures</th>
                                        <th>Couleurs </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kidsData.map((belt, index) => (
                                        <tr key={index} onClick={() => handleBeltSelect(belt)}>
                                            <td>{belt.keup}</td>
                                            <td>{belt.name}</td>
                                            <td><Belt ceinture={belt.ceinture} barette={belt.barette} second={belt.second}  /></td> 
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='w-50'>
                            <h1 className='text-center'>Adultes</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Keup</th>
                                        <th>Ceintures</th>
                                        <th>Couleurs </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {adultData.map((belt, index) => (
                                        <tr key={index} onClick={() => handleBeltSelect(belt)}>
                                            <td>{belt.keup}</td>
                                            <td>{belt.name}</td>
                                            <td><Belt ceinture={belt.ceinture} barette={belt.barette} second={belt.second} dan={belt.dan}/></td> 
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                            <button onClick={handleClose} className="btn btn-secondary">Fermer</button>
                        </div>
                </div>
            }
        </div>
    );
}

export default BeltSelector;
