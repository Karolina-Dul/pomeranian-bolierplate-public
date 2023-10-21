import { useEffect } from 'react';

const API_URL = 'https://api.chucknorris.io/jokes/random';

const ChuckNorrisJokeApp = ({ joke, setJoke, count }) => {
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
  }, [count]);

  return <div className="chuck-norris-joke">{joke}</div>;
};

export default ChuckNorrisJokeApp;
