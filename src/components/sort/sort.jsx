import * as React from "react";

const Sort = () => {
  return (
    <section className="main__sort sort">
      <div className="sort__name">
          Сортировать по:
      </div>
      <ul className="sort__list">
        <li className="sort__item">
          <span>Дате</span>
          <a className="sort__link sort__link--down"></a>
          <a className="sort__link sort__link--up"></a>
        </li>
        <li className="sort__item">
          <span>Популярности</span>
          <a className="sort__link sort__link--down"></a>
          <a className="sort__link sort__link--up"></a>
        </li>
      </ul>
    </section>
  );
};

export default Sort;
