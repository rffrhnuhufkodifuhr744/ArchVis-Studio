import React from "react";
import "./aboutAvPage.css";

const AboutAvPage = () => {
  return (
    <div className="about-container">
      <br />
      <br />
      <br />
      <br />
      <h1 className="about-title">Що таке ArchVis Studio?</h1>

      <div className="content-wrapper">
        <div className="about-text-container">
          <p className="about-description">
            Просте та ефективне програмне забезпечення для 3D моделювання
            архітектури та дизайну інтер'єру.
          </p>
          <p className="about-text">
            ArchVis Studio пропонує базовий курс навчання 3D моделюванню, який
            орієнтований на створення реалістичних та функціональних інтер'єрів
            і архітектурних проектів. Завдяки простому інтерфейсу та потужним
            інструментам, цей курс допоможе вам освоїти навички проектування,
            моделювання і візуалізації без необхідності в професійних знаннях.
            Ви зможете чітко візуалізувати свої ідеї, отримуючи високоякісні
            результати. ArchVis Studio надає можливість швидко та ефективно
            працювати над проектами, створюючи реалістичні сцени для ваших
            клієнтів або особистих проектів.
          </p>
        </div>
        <img
          className="about-image"
          src="/img/3d-max-realistic-render-house-exterior.jpg"
          alt="План квартири"
        />
      </div>

      <div className="background-full">
        <h1 className="about-title">Що ви зможете робити після курсу?</h1>
        <div className="images-container">
          <img
            className="image"
            src="/img/anime cafe frame-1.png"
            alt="Кафе 1"
          />
          <img className="image" src="/img/6_min.jpg" alt="appartment" />
          <img className="image" src="/img/house_outdoor1.jpg" alt="House" />
          <img
            className="image"
            src="/img/bathroom_luxury_min.jpg"
            alt="Bathroom"
          />
          <img
            className="image"
            src="/img/kitchen_classic_min.jpg"
            alt="Kitchen"
          />
          <img
            className="image"
            src="/img/view in window-4.png"
            alt="Вид з вікна 1"
          />
          <img className="image" src="/img/bedroom_min_2.jpg" alt="Bedroom" />
          <img className="image" src="/img/office_min.jpg" alt="Office" />
          <img className="image" src="/img/classroom1.jpg" alt="Classroom" />
        </div>
      </div>
    </div>
  );
};

export default AboutAvPage;
