import * as React from "react";
import DzIcon from "../social-media-icons/dz-icons";
import FbIcon from "../social-media-icons/fb-icons";
import InIcons from "../social-media-icons/in-icons";
import LjIcon from "../social-media-icons/lj-icons";
import TgIcon from "../social-media-icons/tg-icons";
import TvIcon from "../social-media-icons/tv-icons";
import VkIcon from "../social-media-icons/vk-icons";
import YuIcon from "../social-media-icons/yu-icons";

const Social = (props) => {
  return (
    <section className="side__social social">
    <h2 className="social__title">
      МЫ В СОЦСЕТЯХ:
    </h2>
    <ul className="social__list">
      <li className="social__item">
        <a className="social__link social__link--vkontakte" href="https://vk.com/ahilla_ru">
          <VkIcon />
        </a>
      </li>
      <li className="social__item">
        <a className="social__link social__link--facebook" href="https://www.facebook.com/groups/ahilla/">
          <FbIcon />
        </a>
      </li>
      <li className="social__item">
        <a className="social__link social__link--telegram" href="https://t.me/ahilla_ru">
          <TgIcon />
        </a>
      </li>
      <li className="social__item">
        <a className="social__link social__link--twitter" href="https://twitter.com/ahilla_ru">
          <TvIcon />
        </a>
      </li>
      <li className="social__item">
        <a className="social__link social__link--livejournal" href="https://ahilla-ru.livejournal.com/">
          <LjIcon />
        </a>
      </li>
      <li className="social__item">
        <a className="social__link social__link--instagram" href="https://www.instagram.com/ahilla.ru/">
          <InIcons />
        </a>
      </li>
      <li className="social__item">
        <a className="social__link social__link--youtube" href="https://www.youtube.com/c/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9%D0%9F%D0%BB%D1%83%D0%B6%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2">
          <YuIcon />
        </a>
      </li>
      <li className="social__item">
        <a className="social__link social__link--youtube" href="https://zen.yandex.ru/ahilla">
          <DzIcon />
        </a>
      </li>
    </ul>
  </section>
  )
};

export default Social;
