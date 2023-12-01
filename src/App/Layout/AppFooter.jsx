import './styles/footer.css';

const email = 'duljas.karolina@gmail.com';
const phone = '+48 517 100 536';

export function AppFooter() {
  return (
    <footer>
      {/* ! NOWA WERSJA */}
      <div className="text-footer">
        Projekt uzyskał dofinansowanie ze środków Unii Europejskiej z
        Europejskiego Funduszu Rozwoju Regionalnego w ramach projektu grantowego
        „Invest in Pomerania 2020”.
      </div>
      <div className="contact-data">
        <a href={`mailto:${email}`}>{`Email: ${email}`}</a>
        <a href={`tel:${phone}`}>{`Tel: ${phone}`}</a>
      </div>
      {/* ! STARA WERSJA */}
      {/* <div>
//         Projekt uzyskał dofinansowanie ze środków Unii Europejskiej z
//         Europejskiego Funduszu Rozwoju
//       </div>
//       <a href={`mailto:${email}`}>{`Email: ${email}`}</a>
//       <div>
//         Regionalnego w ramach projektu grantowego „Invest in Pomerania 2020”.
//       </div>
//       <a href={`tel:${phone}`}>{`Tel: ${phone}`}</a> */}
    </footer>
  );
}
