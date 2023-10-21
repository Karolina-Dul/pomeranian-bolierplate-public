import { useEffect, useState } from 'react';

const API_URL = 'https://api.chucknorris.io/jokes/random';

const ChuckNorrisJokeApp = () => {
  const [joke, setJoke] = useState('There it no joke yet.');
  useEffect(() => {
    const generateJoke = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) throw Error('Cos=ś poszło nie tak');
        const data = await response.json();
        setJoke(data.value);
        console.log(data.value);
      } catch (err) {
        console.log('error: ', err);
      } finally {
      }
    };

    generateJoke();
  }, []);

  return <div>{joke}</div>;
};

export default ChuckNorrisJokeApp;
