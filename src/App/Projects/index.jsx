import { Link } from 'react-router-dom';
import { Math } from '../Components/Icons/Projects/Math';
import { Background } from '../Components/Icons/Projects/Background';
import { Server } from '../Components/Icons/Projects/Server';
import { Happy } from '../Components/Icons/Projects/Happy';
import './Projects.css';

export const Projects = () => {
  return (
    <div>
      <div className="page-path">
        <Link to="/dashboard">Strona główna</Link>
        <p>&nbsp;&gt;&nbsp;Projekty</p>
      </div>
      <h1>Projekty</h1>
      <div className="projects-tiles">
        <div>
          <p className="project-tile-title">Kalkulator</p>
          <div className="project-tile-image">
            <Math />
          </div>
          <p className="project-tile-description">Prosty kalkulator</p>
          <Link to="/projects/calculator">Zobacz projekt</Link>
        </div>

        <div>
          <p className="project-tile-title">Kolor tła</p>
          <div className="project-tile-image">
            <Background />
          </div>
          <p className="project-tile-description">
            Zmienia kolor zależnie od wpisanej wartości
          </p>
          <Link to="/projects/change-background-color">Zobacz projekt</Link>
        </div>

        <div>
          <p className="project-tile-title">Łączenie z serwerem</p>
          <div className="project-tile-image">
            <Server />
          </div>
          <p className="project-tile-description">Pobiera dane z serwera</p>
          <Link to="/projects/api-request">Zobacz projekt</Link>
        </div>

        <div>
          <p className="project-tile-title">Żart Chucka Norrisa</p>
          <div className="project-tile-image">
            <Happy />
          </div>
          <p className="project-tile-description">Generuje losowy żart</p>
          <Link to="/projects/chuck-norris-joke">Zobacz projekt</Link>
        </div>
      </div>
    </div>
  );
};
