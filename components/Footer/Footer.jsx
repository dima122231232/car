import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container">
            <p className="footer__copyright">
                © 2026 LiveLane Inc. Dealer-only network.
            </p>
            <ul className="footer__list">
                <li className="footer__item">
                    <a href="#" className="footer__link">Terms</a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__link">Privacy</a>
                </li>
                <li className="footer__item">
                    <a href="#" className="footer__link">Status</a>
                </li>
            </ul>
        </div>
    </footer>
  );
};

export default Footer;