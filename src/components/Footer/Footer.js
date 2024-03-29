import React from 'react';

import iconGithubPath from '../../images/icon-github.png';
import iconTelegramPath from '../../images/icon-telegram.png';
import {
  footerCopyRightText,
  footerMenuLinkMainPageText,
  footerMenuLinkYPText,
  footerMenuLinkMainPage,
  footerMenuLinkYP,
  footerMenuLinkGH,
  footerMenuLinkFB,
  footerMenuLinkTG,
  linkToEmptySection,
} from '../../utils/constants';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__info">
        &copy;
        {footerCopyRightText}
      </p>
      <div className="footer__links">
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <a className="footer__menu-item_link" href={linkToEmptySection}>{footerMenuLinkMainPageText}</a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-item_link" href={footerMenuLinkYP} target="_blank" rel="noreferrer">
              {footerMenuLinkYPText}
            </a>
          </li>
        </ul>
        <ul className="footer__social">
          <li className="footer__social-item">
            <a className="footer__social-item_link" href={footerMenuLinkGH} target="_blank" rel="noreferrer">
              <img className="footer__social-item-image" src={iconGithubPath} alt="Иконка Github" />
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-item_link" href={footerMenuLinkTG} target="_blank" rel="noreferrer">
              <img className="footer__social-item-image" src={iconTelegramPath} alt="Иконка Telegram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
