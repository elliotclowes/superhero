import axios from 'axios';
import { useState, useEffect } from 'react';

export const fetchSuperhero = async (id) => {
  const response = await axios.get(`http://localhost:5000/api/${id}`);
  return response.data;
};

export const useFetchSuperheroes = () => {
  const [superhero1, setSuperhero1] = useState(null);
  const [superhero2, setSuperhero2] = useState(null);

  useEffect(() => {
    const getRandomId = () => Math.floor(Math.random() * 731) + 1;
    
    const fetchSuperheroes = async () => {
      let fetchedSuperhero1 = await fetchSuperhero(getRandomId());

      while (hasNullPowerstats(fetchedSuperhero1)) {
        fetchedSuperhero1 = await fetchSuperhero(getRandomId());
      }

      let fetchedSuperhero2 = await fetchSuperhero(getRandomId());

      while (hasNullPowerstats(fetchedSuperhero2) || fetchedSuperhero2.id === fetchedSuperhero1.id) {
        fetchedSuperhero2 = await fetchSuperhero(getRandomId());
      }
      
      setSuperhero1(fetchedSuperhero1);
      setSuperhero2(fetchedSuperhero2);
    };

    const hasNullPowerstats = (superhero) => {
      return Object.values(superhero.powerstats).some((value) => value === null);
    };

    fetchSuperheroes();
  }, []);

  return { superhero1, superhero2 };
};

export default useFetchSuperheroes;
