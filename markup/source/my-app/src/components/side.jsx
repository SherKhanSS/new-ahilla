import React from "react";
import Social from "./social";

const Side = () => {
  return (
    <section className="content__side side">

    <section className="side__tags tags">
      <h2 className="tags__title">
        <a className="navigation-link" href="navigation-link">ПОИСК ПО МЕТКАМ</a>
      </h2>
      <div className="tags__wrap">
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">Адексей Плужников</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">ахила</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">ксения волянская</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">православие цемента</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">рпц</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">упц</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">украина</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">видео</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">добро и зло</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">иерархия</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">история</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">парадоксы православия</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">патриарх кирил</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">реформа рпц</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">священники</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">системопоклонство</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">финансы церкви</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">христианство</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">человечное</a>
        <a className="tags__link" href="https://ahilla.ru/tag/aleksej-pluzhnikov/">чувства верующих</a>
      </div>
      <a className="tags__all navigation-link" href="#">Все метки</a>
    </section>

    <section className="side__video video">
      <h2 className="video__title">
        <a className="navigation-link" href="https://www.youtube.com/channel/UCWm7n9tJUS9VsdirHPCU9pw">Наш канал на youtube</a>
      </h2>
      <ul className="video__list">
        <li className="video__item">
          <h3 className="video__name">
            Екатеринбург, храм на драме, хроника протестов
          </h3>
          <div className="video__wrap">
            <iframe title="Екатеринбург, протесты в сквере у театра драмы" src="https://www.youtube.com/embed/videoseries?list=PLYFpMn8XTK_BIIaljFQPLooRxcUw_celf" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
          </div>
        </li>
        <li className="video__item">
          <h3 className="video__name">
            Походы с Ахиллой
          </h3>
          <div className="video__wrap">
            <iframe title="Походы с Ахиллой" src="https://www.youtube.com/embed/videoseries?list=PLYFpMn8XTK_B1c2rB955Cb3CNdPeQSvM0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
          </div>
        </li>
      </ul>
    </section>

    <Social />

    <section className="side__popular popular">
      <h2 className="popular__title">
        САМОЕ ИНТЕРЕСНОЕ:
      </h2>
      <ul className="popular__list">
        <li className="popular__item">
          <a className="popular__link" href="#">«Я надеюсь на революцию в РПЦ»</a>
          <div className="popular__views">
            <span className="popular__view">- просмотров:</span>
            <span className="popular__count">106 107</span>
          </div>
        </li>
        <li className="popular__item">
          <a className="popular__link" href="#">«Джон Мюр: «Божья любовь проявляется в пейзаже, как в лице»»</a>
          <div className="popular__views">
            <span className="popular__view">- просмотров:</span>
            <span className="popular__count">106 107</span>
          </div>
        </li>
        <li className="popular__item">
          <a className="popular__link" href="#">«Стройбатя»: «Ахилла», до свидания»</a>
          <div className="popular__views">
            <span className="popular__view">- просмотров:</span>
            <span className="popular__count">106 107</span>
          </div>
        </li>
        <li className="popular__item">
          <a className="popular__link" href="#">«Царицыно»</a>
          <div className="popular__views">
            <span className="popular__view">- просмотров:</span>
            <span className="popular__count">106 107</span>
          </div>
        </li>
        <li className="popular__item">
          <a className="popular__link" href="#">«Я надеюсь на революцию в РПЦ»</a>
          <div className="popular__views">
            <span className="popular__view">- просмотров:</span>
            <span className="popular__count">106 107</span>
          </div>
        </li>
        <li className="popular__item">
          <a className="popular__link" href="#">«Я надеюсь на революцию в РПЦ»</a>
          <div className="popular__views">
            <span className="popular__view">- просмотров:</span>
            <span className="popular__count">106 107</span>
          </div>
        </li>
        <li className="popular__item">
          <a className="popular__link" href="#">«Джон Мюр: «Божья любовь проявляется в пейзаже, как в лице»»</a>
          <div className="popular__views">
            <span className="popular__view">- просмотров:</span>
            <span className="popular__count">106 107</span>
          </div>
        </li>
        <li className="popular__item">
          <a className="popular__link" href="#">«Стройбатя»: «Ахилла», до свидания»</a>
          <div className="popular__views">
            <span className="popular__view">- просмотров:</span>
            <span className="popular__count">106 107</span>
          </div>
        </li>
        <li className="popular__item">
          <a className="popular__link" href="#">«Царицыно»</a>
          <div className="popular__views">
            <span className="popular__view">- просмотров:</span>
            <span className="popular__count">106 107</span>
          </div>
        </li>
        <li className="popular__item">
          <a className="popular__link" href="#">«Я надеюсь на революцию в РПЦ»</a>
          <div className="popular__views">
            <span className="popular__view">- просмотров:</span>
            <span className="popular__count">106 107</span>
          </div>
        </li>
      </ul>
    </section>

    <section className="mock">
      <img src="sourse/my-app/src/img/z.png" alt="" />
      <img src="./img/z.png" alt="" />
    </section>

  </section>
  )
}

export default Side;
