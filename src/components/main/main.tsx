import * as React from "react";
import Side from "../side/side"

const Main = () => {
  return (
    <main className="main">
    <div className="main__wrapper">
      <h1 className="visually-hidden">Независимый аналитический проект «Ахилла»</h1>

      <section className="main__content content">

        <section className="content__articles articles">
          <h2 className="articles__title">
            <a className="navigation-link" href="#">Статьи</a>
          </h2>
          <ul className="articles__list">
            <li className="articles__item">
              <img className="articles__picture" src="./img/john_muir.jpg" />
              <div className="articles__wrapper">
                <h3 className="articles__name">Джон Мюр: «Божья любовь проявляется в пейзаже, как в лице»</h3>
                <div className="articles__date-and-autor">
                  30 МАЯ 2020 АХИЛЛА
                </div>
                <div className="articles__description">
                  Из Орловской епархии нам сообщают подробности о ситуации вокруг заболевания коронавирусом причта Ахтырского кафедрального собора Орла. Напомним, что официально подтвержден коронавирус пока только у дьякона собора, Игоря Голикова, который находится в больнице. А вот как ситуация развивалась (информация от очевидцев): с середины мая в соборе начали болеть один за другим клирики. Заболел бывший настоятель собора, 70-летний протоиерей Дмитрий Захаров,
                </div>
                <div className="articles__more">
                  Подробнее »
                </div>
              </div>
            </li>
            <li className="articles__item">
              <img className="articles__picture" src="./img/john_muir.jpg" />
              <div className="articles__wrapper">
                <h3 className="articles__name">Ковид обнаружен у руководителя службы протокола Орловского митрополита</h3>
                <div className="articles__date-and-autor">
                  30 МАЯ 2020 АХИЛЛА
                </div>
                <div className="articles__description">
                  Из Орловской епархии нам сообщают подробности о ситуации вокруг заболевания коронавирусом причта Ахтырского кафедрального собора Орла. Напомним, что официально подтвержден коронавирус пока только у дьякона собора, Игоря Голикова, который находится в больнице. А вот как ситуация развивалась (информация от очевидцев): с середины мая в соборе начали болеть один за другим клирики. Заболел бывший настоятель собора, 70-летний протоиерей Дмитрий Захаров,
                </div>
                <div className="articles__more">
                  Подробнее »
                </div>
              </div>
            </li>
            <li className="articles__item">
              <img className="articles__picture" src="./img/john_muir.jpg" />
              <div className="articles__wrapper">
                <h3 className="articles__name">Царицыно</h3>
                <div className="articles__date-and-autor">
                  30 МАЯ 2020 АХИЛЛА
                </div>
                <div className="articles__description">
                  Из Орловской епархии нам сообщают подробности о ситуации вокруг заболевания коронавирусом причта Ахтырского кафедрального собора Орла. Напомним, что официально подтвержден коронавирус пока только у дьякона собора, Игоря Голикова, который находится в больнице. А вот как ситуация развивалась (информация от очевидцев): с середины мая в соборе начали болеть один за другим клирики. Заболел бывший настоятель собора, 70-летний протоиерей Дмитрий Захаров,
                </div>
                <div className="articles__more">
                  Подробнее »
                </div>
              </div>
            </li>
            <li className="articles__item">
              <img className="articles__picture" src="./img/john_muir.jpg" />
              <div className="articles__wrapper">
                <h3 className="articles__name">Джон Мюр: «Божья любовь проявляется в пейзаже, как в лице»</h3>
                <div className="articles__date-and-autor">
                  30 МАЯ 2020 АХИЛЛА
                </div>
                <div className="articles__description">
                  Из Орловской епархии нам сообщают подробности о ситуации вокруг заболевания коронавирусом причта Ахтырского кафедрального собора Орла. Напомним, что официально подтвержден коронавирус пока только у дьякона собора, Игоря Голикова, который находится в больнице. А вот как ситуация развивалась (информация от очевидцев): с середины мая в соборе начали болеть один за другим клирики. Заболел бывший настоятель собора, 70-летний протоиерей Дмитрий Захаров,
                </div>
                <div className="articles__more">
                  Подробнее »
                </div>
              </div>
            </li>
            <li className="articles__item">
              <img className="articles__picture" src="./img/john_muir.jpg" />
              <div className="articles__wrapper">
                <h3 className="articles__name">Джон Мюр: «Божья любовь проявляется в пейзаже, как в лице»</h3>
                <div className="articles__date-and-autor">
                  30 МАЯ 2020 АХИЛЛА
                </div>
                <div className="articles__description">
                  Из Орловской епархии нам сообщают подробности о ситуации вокруг заболевания коронавирусом причта Ахтырского кафедрального собора Орла. Напомним, что официально подтвержден коронавирус пока только у дьякона собора, Игоря Голикова, который находится в больнице. А вот как ситуация развивалась (информация от очевидцев): с середины мая в соборе начали болеть один за другим клирики. Заболел бывший настоятель собора, 70-летний протоиерей Дмитрий Захаров,
                </div>
                <div className="articles__more">
                  Подробнее »
                </div>
              </div>
            </li>
          </ul>
          <a className="navigation-link articles__next" href="#">Все статьи »</a>
        </section>

        <section className="content__news news">
          <h2 className="news__title">
            <a className="navigation-link" href="#">Новости</a>
          </h2>
          <ul className="news__list">
            <li className="news__item">
              <img className="news__picture" src="./img/ekb-news.jpg" />
              <div className="news__wrapper">
                <h3 className="news__name">«Стройбатя»: «Ахилла», до свидания</h3>
                <div className="news__date-and-autor">
                  30 МАЯ 2020 АХИЛЛА
                </div>
                <div className="news__description">
                  Митрополит Екатеринбургский Кирилл (Наконечный) прокомментировал запрет в служении схиигумена Сергия (Романова). Митрополит посетовал, что, мол, он сам с Романовым дружил, любит его, тот сделал много хорошего, но «свита», восхваляющая «старца», испортила его. Митрополит вчера приехал в монастырь на Ганиной Яме, собирался там встретиться с Романовым, но тот не явился. Митрополит Кирилл отметил, что в Церкви
                </div>
                <div className="news__more">
                  Подробнее »
                </div>
              </div>
            </li>
            <li className="news__item">
              <img className="news__picture" src="./img/ekb-news.jpg" />
              <div className="news__wrapper">
                <h3 className="news__name">Царицино</h3>
                <div className="news__date-and-autor">
                  30 МАЯ 2020 АХИЛЛА
                </div>
                <div className="news__description">
                  Митрополит Екатеринбургский Кирилл (Наконечный) прокомментировал запрет в служении схиигумена Сергия (Романова). Митрополит посетовал, что, мол, он сам с Романовым дружил, любит его, тот сделал много хорошего, но «свита», восхваляющая «старца», испортила его. Митрополит вчера приехал в монастырь на Ганиной Яме, собирался там встретиться с Романовым, но тот не явился. Митрополит Кирилл отметил, что в Церкви
                </div>
                <div className="news__more">
                  Подробнее »
                </div>
              </div>
            </li>
            <li className="news__item">
              <img className="news__picture" src="./img/ekb-news.jpg" />
              <div className="news__wrapper">
                <h3 className="news__name">Ковид обнаружен у руководителя службы протокола Орловского митрополита</h3>
                <div className="news__date-and-autor">
                  30 МАЯ 2020 АХИЛЛА
                </div>
                <div className="news__description">
                  Митрополит Екатеринбургский Кирилл (Наконечный) прокомментировал запрет в служении схиигумена Сергия (Романова). Митрополит посетовал, что, мол, он сам с Романовым дружил, любит его, тот сделал много хорошего, но «свита», восхваляющая «старца», испортила его. Митрополит вчера приехал в монастырь на Ганиной Яме, собирался там встретиться с Романовым, но тот не явился. Митрополит Кирилл отметил, что в Церкви
                </div>
                <div className="news__more">
                  Подробнее »
                </div>
              </div>
            </li>
            <li className="news__item">
              <img className="news__picture" src="./img/ekb-news.jpg" />
              <div className="news__wrapper">
                <h3 className="news__name">«Стройбатя»: «Ахилла», до свидания</h3>
                <div className="news__date-and-autor">
                  30 МАЯ 2020 АХИЛЛА
                </div>
                <div className="news__description">
                  Митрополит Екатеринбургский Кирилл (Наконечный) прокомментировал запрет в служении схиигумена Сергия (Романова). Митрополит посетовал, что, мол, он сам с Романовым дружил, любит его, тот сделал много хорошего, но «свита», восхваляющая «старца», испортила его. Митрополит вчера приехал в монастырь на Ганиной Яме, собирался там встретиться с Романовым, но тот не явился. Митрополит Кирилл отметил, что в Церкви
                </div>
                <div className="news__more">
                  Подробнее »
                </div>
              </div>
            </li>
            <li className="news__item">
              <img className="news__picture" src="./img/ekb-news.jpg" />
              <div className="news__wrapper">
                <h3 className="news__name">«Стройбатя»: «Ахилла», до свидания</h3>
                <div className="news__date-and-autor">
                  30 МАЯ 2020 АХИЛЛА
                </div>
                <div className="news__description">
                  Митрополит Екатеринбургский Кирилл (Наконечный) прокомментировал запрет в служении схиигумена Сергия (Романова). Митрополит посетовал, что, мол, он сам с Романовым дружил, любит его, тот сделал много хорошего, но «свита», восхваляющая «старца», испортила его. Митрополит вчера приехал в монастырь на Ганиной Яме, собирался там встретиться с Романовым, но тот не явился. Митрополит Кирилл отметил, что в Церкви
                </div>
                <div className="news__more">
                  Подробнее »
                </div>
              </div>
            </li>
          </ul>
          <a className="navigation-link news__next" href="#">Все новости »</a>
        </section>

        <Side/>

      </section>

    </div>
  </main>
  );
};

export default Main;
