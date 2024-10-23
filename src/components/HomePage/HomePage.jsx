import React from "react";
import "./homePage.css";
import AppHeader from "../AppHeader/AppHeader";

const HomePage = () => {
  return (
    <div className="container" id="homePage">
      <AppHeader />
      <div className="content">
        {" "}
        <img src="/img/ArchVis.png" alt="Логотип ArchVis" className="logo" />
        <h1>ДИЗАЙН ВАШОГО ДОМУ У 3D</h1>
        <p>
          <span>Цей курс навчить Вас основам 3D-моделювання,</span>
          <br />
          <span>що дозволить створювати архітектуру, дизайни з нуля</span>
          <br />
          <span>без професійних навичок</span>
        </p>
        <div className="buttons">
          <a href="/start" className="start-btn">
            {" "}
            Старт
          </a>
        </div>
        <div className="arrow-down">
          <a href="/aboutAV">
            <img src="/img/white-down-arrow-png-2.png" alt="Стрілка вниз" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
