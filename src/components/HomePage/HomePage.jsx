import React, { PureComponent } from "react";
import "./homePage.css";
import AppHeader from "../AppHeader/AppHeader";

const HomePage = () => {
  return (
    <div class="container">
      <AppHeader />
      <div class="content">
        <img src="/img/ArchVis.png" alt="Логотип ArchVis" className="logo" />
        <h1>ДИЗАЙН ВАШОГО ДОМУ У 3D</h1>
        <p>
          <span>Цей курс навчить Вас основам 3D-моделювання,</span>
          <br />
          <span>що дозволить створювати архітектуру, дизайни з нуля</span>
          <br />
          <span>без професійних навичок</span>
        </p>
        <div class="buttons">
          <a href="#" class="start-btn">
            Старт
          </a>
        </div>
        <div class="arrow-down">
          <a href="#about">
            <img src="/img/white-down-arrow-png-2.png" alt="Стрілка вниз" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
