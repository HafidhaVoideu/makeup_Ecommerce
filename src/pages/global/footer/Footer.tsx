import "./footer.css";

import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <ul className="footer__list">
          <li>
            <span> skincare</span>
          </li>
          <li>makeup</li>
          <li>skincare</li>
          <li>fragrance</li>
        </ul>
        <ul className="footer__list">
          <li>
            {" "}
            <span> makeup </span>{" "}
          </li>
          <li>makeup</li>
          <li>skincare</li>
        </ul>
        <ul className="footer__list">
          <li>
            <span>supplements</span>
          </li>
          <li>makeup</li>
          <li>skincare</li>
          <li>fragrance</li>
        </ul>
        <ul className="footer__list">
          <li>
            <span>mens</span>
          </li>
          <li>makeup</li>
          <li>skincare</li>
          <li>fragrance</li>
          <li>Bath & Body</li>
        </ul>

        <ul className="footer__list">
          <li>
            <span>customer service</span>
          </li>

          <li>returns</li>
          <li>shipping</li>
          <li>Cult concierge</li>

          <li>Help center! FQAs</li>
        </ul>
        <ul className="footer__list">
          <li>
            <span>Legal</span>
          </li>

          <li>Terms &conditions</li>
          <li>privacy policy</li>
          <li>cookie Policy </li>
          <li>Modern Slavery Policy</li>
          <li>Accessibility</li>
        </ul>

        <ul className="footer__list   span-row-2">
          <li>
            <span>Contact</span>
          </li>
          <li>Fresh</li>
          <li>Tel: +213 22 33 44 55</li>
          <li>Fax:+213 44 88 77 99 </li>
          <li>Addresss: Mourad Rais, 7th Avenue, Algeria</li>
        </ul>
        <ul className="footer__list   span-row-2">
          <li>
            <span>Find Out More</span>
          </li>
          <li>Promotions</li>
          <li>Affiliates</li>
          <li>Refer a friend </li>
        </ul>

        <div className="footer__socials">
          <RiFacebookFill fill="#fdcc58" />
          <RiTwitterFill fill="#fdcc58" />
          <RiInstagramLine fill="#fdcc58" />
        </div>
      </div>

      <p className="footer__rights">
        ©2023 Fresh ALGERIA, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
