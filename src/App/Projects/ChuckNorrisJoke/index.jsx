import React from 'react';
import { Link } from 'react-router-dom';
import ChuckNorrisJokeApp from './ChuckNorrisJokeApp';

const ChuckNorrisJoke = () => {
  return (
    <div>
      <div className="page-path">
        <Link to="/dashboard">Strona główna</Link>
        <p>&nbsp;&gt;&nbsp;</p>
        <Link to="/projects">Projekty</Link>
        <p>&nbsp;&gt;&nbsp;Żart Norrisa</p>
      </div>
      <h1>Losowy żart Chucka Norrisa</h1>
      <img src="https://static.wikia.nocookie.net/banialukipl/images/d/dd/C74461ae2a9917a2482ac7b53f195b3c6e2fdd59e778c673256fb29d1b07f181.jpg/revision/latest?cb=20180122200051&path-prefix=pl" />
      <ChuckNorrisJokeApp />
    </div>
  );
};

export default ChuckNorrisJoke;
