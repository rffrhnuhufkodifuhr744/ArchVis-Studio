import React from "react";
import { Link } from "react-scroll";
import "./appHeader.css";

const AppHeader = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">Головна</a>
        </li>
        <li>
          <a href="/aboutAV">Про нас</a>
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
      </ul>
      <a href="/login" className="login-button">
        Увійти
      </a>
    </nav>
  );
};

export default AppHeader;
