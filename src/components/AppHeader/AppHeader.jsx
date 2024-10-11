import React, { PureComponent } from "react";
import "./appHeader.css";

const AppHeader = () => {
  return (
    <nav class="navbar">
      <ul>
        <li>
          <a href="/about">Про нас</a>
        </li>
        <li>
          <a href="/examples">Шаблони та приклади</a>
        </li>
        <li>
          <a href="/resources">Ресурси для навчання</a>
        </li>
        <li>
          <a href="/contacts">Контакти</a>
        </li>
        <li>
          <a href="/login" class="login-button">
            Увійти
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default AppHeader;
