import './styles.css';
import { ReactComponent as LogoSVG } from '../../Images/start-it-logo.svg';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div className="logo-pomeranian">
      <Link to="/dashboard">
        <LogoSVG />
      </Link>
    </div>
  );
};
