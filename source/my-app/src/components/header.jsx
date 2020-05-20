import React from "react";

export const Header = () => {
  return <header className="page-header">
  <div className="page-header__wrapper">
    <a className="page-header__logo">
      <svg className="page-header__logo-svg" width="200" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 530.3 105.4"><g stroke="#000" stroke-miterlimit="10"><path d="M120.3.6c-5.6 1-37.6 31.9-41.6 35.5s-8.8 8.6-11.4 8.9S56 40.6 48 40.7s-13.4 9.6-6.6 9.4 17 3.3 15.4 5S12 90 4.4 95.9s-1.8 7.6-1.8 7.6c7.6 4.9 14.1-4.6 17.4-7s42.1-37.4 46.3-37.6c4.2-.3 28.2 25.1 35.8 31.3s14.6-5.1 16-10.5c1.9-7.4 10.2-50.9 13.5-64.5S123.8 0 120.3.6zM110 67.1c-2 8-4.4 7.7-6.6 6.3-3-1.9-26.9-22.2-26.9-22.2-2.7-3.6 26.5-28.2 32.7-34s10.8-4.9 10.5-.8c-.3 4.2-6.8 39.4-9.7 50.7zM208.9 44.4c1.8-4.6-2.8-5.8-7.4-2.9S177.9 57 176.3 57.8s-3-3.8-.9-9.3 3.1-5.5 5.1-8.7-2.4-5-7.6-2.7-9.8 10.3-9.8 16.6c0 6.4-1.2 11.7-2.4 12.8s-25.3 16.7-29.2 20.2c-1.3 1.2-3.5 8.9 5.5 4.8 9.3-4.3 21.4-16 23-16.6s4.8 16.5 23.9 18c19.1 1.5 17.5-4.8 17.3-6.9-.1-1.3-7.5 3.3-13.9-.9S172.2 73 174.4 68.5s32.8-19.5 34.5-24.1zM284 83.1c-4 .6-8.9 1.4-8.8-3.3s13.4-23.6 22.6-32.4-1.5-7.5-5.5-7-57.8 42.9-67.6 37.8c-2.3-1.2 26.6-31.5 30.3-35.3 3.6-3.8 4.1-8.1 0-11.1-5.1-3.8-10.5 6-10.5 6-5.5 8.7-39.8 43.3-35.2 53 5.3 11.4 72.1-36.4 66.5-30s-21.4 26.7-14.5 29.6c6.9 2.9 26.7-7.9 22.7-7.3zM354.3 81.3c-4-1.3-2-8.6.9-14.6s14.6-21.9 18-25.3-3.5-4.5-11.3-2.3-19.6 12.1-26 17.4-26.4 20.5-31 24.3c-3.3 2.6-11.7 2.1-15 2.8-2.5.5-3.6 1.6-4 3.9 0 0 2.3 3.9 10.3 3.5 9.5-.4 32.3-23.6 38.6-27.6 6.4-4.1 14.1-10.6 16.8-10.6S333.3 76.9 339 87.5c3.5 6.5 15 3.5 20.3-2.5 3.8-4.4.7-1.9-5-3.7zM432.8 81.3c-4-1.3-2-8.6.9-14.6s14.6-21.9 18-25.3-3.5-4.5-11.3-2.3-19.6 12.1-26 17.4-26.4 20.5-31 24.3c-3.3 2.6-11.7 2.1-15 2.8-2.5.5-3.6 1.6-4 3.9 0 0 2.3 3.9 10.3 3.5 9.5-.4 32.3-23.6 38.6-27.6 6.4-4.1 14.1-10.6 16.8-10.6S411.9 77 417.6 87.6c3.5 6.5 15 3.5 20.3-2.5 3.7-4.5.6-2-5.1-3.8zM524.2 52.7c7.4-7.8 6.7-8.5 2.5-8s-9.9 5.3-7 1.1 2.5-9.5-3.1-11.1c-7.5-2.2-30.9 11.3-55 30.5S447 90.4 447 90.4c2.5 1.1 6.6 1 12-.6 6.6-1.9 22.1-10 27.3-13s21.1-14.9 18.9-12.1-10.5 15-10.8 21.3 4.5 7.3 13.3 6.8c8.7-.5 18.7-8.6 10.7-7.5-8 1.1-11.6 0-11.4-5.1s9.8-19.7 17.2-27.5zm-50.1 25.5c-6.3 3.9-15.8 7.9-17.3 6-6.5-8.5 45.8-46.7 55.8-43.7 2.5.7 1.3 3.3-.7 6.4-7.9 12.6-31.4 27.4-37.8 31.3z"/></g>
      </svg>
    </a>
    <nav className="page-header__main-nav main-nav main-nav--closed main-nav--nojs">
      <button className="main-nav__toggle" type="button"></button>
      <ul className="main-nav__list site-list">
        <li className="site-list__item site-list__item--active">
          <a>Главная</a>
        </li>
        <li className="site-list__item">
          <a href="form.html">Новости</a>
        </li>
        <li className="site-list__item site-list__sub-menu">
          <a href="#">Мысли</a>
          <span className="site-list__img"></span>
          <ul className="sub-menu">
            <li className="sub-menu__item">
              <a href="#">Колонка редактора</a>
            </li>
            <li className="sub-menu__item">
              <a href="#">Блоги</a>
            </li>
            <li className="sub-menu__item">
              <a href="#">Комментарии</a>
            </li>
            <li className="sub-menu__item">
              <a href="#">Нам пишут</a>
            </li>
            <li className="sub-menu__item">
              <a href="#">Вопросы и ответы</a>
            </li>
          </ul>
        </li>
        <li className="site-list__item site-list__sub-menu">
          <a href="#">Истории</a>
          <span className="site-list__img"></span>
          <ul className="sub-menu">
            <li className="sub-menu__item">
              <a href="#">Культура</a>
            </li>
            <li className="sub-menu__item">
              <a href="#">Религия</a>
            </li>
            <li className="sub-menu__item">
              <a href="#">Проза</a>
            </li>
            <li className="sub-menu__item">
              <a href="#">Общество</a>
            </li>
            <li className="sub-menu__item">
              <a href="#">Мониторинг СМИ</a>
            </li>
          </ul>
        </li>
        <li className="site-list__item">
          <a href="#">Проекты</a>
        </li>
        <li className="site-list__item">
          <a href="#">Авторы</a>
        </li>
        <li className="site-list__item">
          <a href="#">Наши книги</a>
        </li>
        <li className="site-list__item">
          <a href="#">Контакты</a>
        </li>

        <div className="page-header__search search search--closed search--nojs">
          <button className="search-toggle">
          </button>
          <div className="search-form">
            <form className="ty" action="https://ahilla.ru/" method="get" accept-charset="utf-8">
              <input type="search" className="form-control" name="s" value placeholder="Введите запрос..."/>
            </form>
          </div>
        </div>
      </ul>
    </nav>
  </div>
</header>;
};

