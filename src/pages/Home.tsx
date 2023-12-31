import React from 'react';
import Toolbar from '../components/Toolbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="container mt-5">
      <Toolbar aboutUsLink="/aboutUs" contactsLink="/contacts" />
      <h2 className="text-center text-primary mt-4">Добро пожаловать в историю создания JS</h2>
      <p className="text-center text-muted lead mt-2">Изучите и узнайте больше о методах программирования</p>

      <div className="info-section mt-5">
        <h5 className="text-primary">JavaScript</h5>
        <p>
          JavaScript (/ˈdʒɑːvɑːˌskrɪpt/; аббр. JS /ˈdʒeɪ.ɛs./) — мультипарадигменный язык программирования.
          Поддерживает объектно-ориентированный, императивный и функциональный стили.
          Является реализацией спецификации ECMAScript (стандарт ECMA-262).
        </p>

        <p>
          JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.
          Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.
        </p>

        <h5 className="text-primary">Основные архитектурные черты</h5>
        <p>
          Основные архитектурные черты:
          динамическая типизация, слабая типизация, автоматическое управление памятью, прототипное программирование,
          функции как объекты первого класса.
        </p>

        <p>На JavaScript оказали влияние многие языки, при разработке была цель сделать язык похожим на Java.
          Языком JavaScript не владеет какая-либо компания или организация, что отличает его от ряда языков
          программирования, используемых в веб-разработке
        </p>

        <h5 className="text-primary">Название «JavaScript»</h5>
        <p>Название «JavaScript» является зарегистрированным товарным знаком корпорации Oracle в США.</p>

        <p>Самая первая реализация JavaScript была создана Бренданом Эйхом (англ. Brendan Eich) в компании Netscape, и с
          тех пор обновляется, чтобы соответствовать ECMA-262 Edition 5 и более поздним версиям.
          Название JavaScript было получено 4 декабря 1995 года.
          Анонс JavaScript со стороны представителей Netscape и Sun состоялся накануне выпуска второй бета-версии
          Netscape Navigator.
          В нём декларируется, что 28 лидирующих ИТ-компаний выразили намерение использовать в своих будущих продуктах
          JavaScript как объектный скриптовый язык с открытым стандартом.
        </p>

        <h5 className="text-primary">Популярность</h5>
        <p>В статье «The World’s Most Misunderstood Programming Language Has Become the World’s Most Popular Programming
          Language»
          (с англ.«Самый неправильно понятый язык программирования в мире стал самым популярным в мире языком
          программирования»)
          Дуглас Крокфорд утверждает, что лидирующую позицию JavaScript занял в связи с развитием AJAX, поскольку
          браузер стал превалирующей системой доставки приложений.
          Он также констатирует растущую популярность JavaScript, то, что этот язык встраивается в приложения, отмечает
          значимость языка.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
