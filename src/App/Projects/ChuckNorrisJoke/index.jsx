import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import ChuckNorrisJokeApp from './ChuckNorrisJokeApp';
import './ChuckNorrisJokeApp.css';
import chuckNorris from '../../Images/projects/chuckNorris.png';

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState('There it no joke yet.');
  const [count, setCount] = useState(0);

  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const handleClick = (count) => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className="page-path">
        <Link to="/dashboard">Strona główna</Link>
        <p>&nbsp;&gt;&nbsp;</p>
        <Link to="/projects">Projekty</Link>
        <p>&nbsp;&gt;&nbsp;Żart Norrisa</p>
      </div>
      <h1>Losowy żart Chucka Norrisa</h1>
      <div className="chuck-norris-container">
        <img className="chuck-norris-photo" src={chuckNorris} />
        <div className="date-joke-button-container">
          <p className="date">{`Current date: ${day}-${month}-${year}`}</p>
          <ChuckNorrisJokeApp joke={joke} setJoke={setJoke} count={count} />
          <button onClick={() => handleClick(count)}>Get new joke</button>
        </div>
      </div>
    </div>
  );
};

export default ChuckNorrisJoke;
