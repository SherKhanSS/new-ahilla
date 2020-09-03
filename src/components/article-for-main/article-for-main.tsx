import * as React from "react";

const formatDate = (date) => {
  const MONTH_NAMES = [
    `Января`,
    `Февраля`,
    `Марта`,
    `Апреля`,
    `Мая`,
    `Июня`,
    `Июля`,
    `Августа`,
    `Сентября`,
    `Октября`,
    `Ноября`,
    `Декабря`,
  ];

  return `
    ${date.getDate()}
    ${MONTH_NAMES[date.getMonth()]}
    ${date.getFullYear()} `;
};

const ArticleForMain = (props) => {
  const {name, author, image, date, views, category, tags, content} = props.article;
  return (
    <li className="articles__item">
      <img className="articles__picture" src={image} />
      <div className="articles__wrapper">
        <h3 className="articles__name">{name}</h3>
        <div className="articles__date-and-autor">
          {formatDate(date)}{author}
        </div>
        <div className="articles__description">
                  Из Орловской епархии нам сообщают подробности о ситуации вокруг заболевания коронавирусом причта Ахтырского кафедрального собора Орла. Напомним, что официально подтвержден коронавирус пока только у дьякона собора, Игоря Голикова, который находится в больнице. А вот как ситуация развивалась (информация от очевидцев): с середины мая в соборе начали болеть один за другим клирики. Заболел бывший настоятель собора, 70-летний протоиерей Дмитрий Захаров,
        </div>
        <div className="articles__more">
                  Подробнее »
        </div>
      </div>
    </li>
  );
};

export default ArticleForMain;
