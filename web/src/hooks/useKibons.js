import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { database } from '../firebase/config';

const useKibon = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      // Récupérer une référence à l'index Kibon dans la base de données Firebase
      const kibonRef = ref(database, '/kibon');
  
      // Écouter les modifications en temps réel sur l'index Kibon
      const unsubscribe = onValue(kibonRef, (snapshot) => {
        setData(snapshot.val());
      });
  
      // Nettoyer l'écouteur d'événements lors du démontage du composant
      return () => {
        unsubscribe(); // Désabonner de tous les écouteurs sur l'index Kibon
      };
    }, []);
  
    return data;
  };

export default useKibon;