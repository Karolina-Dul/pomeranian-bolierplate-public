import './styles.css';
import { FaqQuestionsItems } from '../Components/FaqQuestionsItems/FaqQuestionsItems';
import { Link } from 'react-router-dom';

export const FaQ = () => {
  return (
    <div className="dashboard-faq">
      <div className="page-path">
        <Link to="/dashboard">Strona główna</Link>
        <p>&nbsp;&gt;&nbsp;FAQ</p>
      </div>
      <h1>FAQ</h1>
      <p className="introduction">
        Tutaj znajdź odpowiedzi na najczęściej zadawane pytania
      </p>
      <FaqQuestionsItems />
    </div>
  );
};
