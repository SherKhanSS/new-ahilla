import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer__wrapper">
      <div className="footer__top">
        <div className="footer__description">
          Независимый аналитический проект «Ахилла»
          <br/>
          Перепечатка материалов сайта возможна только
          при условии активной гиперссылки
        </div>
        <div className="footer__feedback feedback">
          <span className="feedback__description">Напишите нам:</span>
          <ul className="feedback__list">
            <li className="feedback__item">
              <a className="feedback__link" href="mailto:ahilla.ru@gmail.com">ahilla.ru@gmail.com,</a>
            </li>
            <li className="feedback__item">
              <a className="feedback__link" href="#">ВКонтакте,</a>
            </li>
            <li className="feedback__item">
              <a className="feedback__link" href="#">Facebook,</a>
            </li>
            <li className="feedback__item">
              <a className="feedback__link" href="#">Twitter,</a>
            </li>
            <li className="feedback__item">
              <a className="feedback__link" href="#">Живой Журнал</a>
            </li>
          </ul>
        </div>
        <div className="footer__help help">
          <span className="help__description">Помочь проекту:</span>
          <ul className="help__list">
            <li className="help__item">
              <a className="help__link" href="https://money.yandex.ru/to/410013762179717">
                Яндекс-кошелек: 410013762179717
              </a>
            </li>
            <li className="help__item">
              <a className="help__link">
                Карта Сбербанка: 4276 1600 2495 4340
              </a>
            </li>
            <li className="help__item">
              <a className="help__link" href="https://www.paypal.me/helpahilla">
                PayPal
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__opinion">
            Мнение авторов может не совпадать с мнением редакции.
            За достоверность информации ответственность несут авторы.
        </div>
      </div>
      <div className="footer__copyright">Copyright © 2017 Ahilla.ru</div>
    </div>
  </footer>
  );
};

export default Footer;
