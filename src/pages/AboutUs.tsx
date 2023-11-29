import {Link} from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="container mt-3">
      <h4 className="text-center text-bg-info text-light">О Нас</h4>
      <h5 className="text-center">Команда 'NoNameCompany', по исследованию JavaScript и TypeScript.</h5>

      <div>
        <h4>Наша Миссия</h4>
        <p>Делиться знаниями о JavaScript и TypeScript</p>
      </div>

      <h5 className="text-primary">JavaScript</h5>
      <p>
        JavaScript (/ˈdʒɑːvɑːˌskrɪpt/; аббр. JS /ˈdʒeɪ.ɛs./) — мультипарадигменный язык программирования.
        Поддерживает объектно-ориентированный, императивный и функциональный стили.
      </p>

      <img
        src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LyZcwuLWv2FArOumCxobpA.png"
        alt="JavaScript Image"
        className="img-fluid rounded mt-3"
        style={{ maxWidth: '400px', maxHeight: '300px' }}
      />

      <h5 className="text-primary mt-3">TypeScript</h5>
      <p>
        TypeScript - язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений,
        расширяющее возможности JavaScript
      </p>

      <img
        src="https://blog.toothpickapp.com/content/images/2022/08/ts_logo.png"
        alt="TypeScript Image"
        className="img-fluid rounded mt-3"
        style={{ maxWidth: '400px', maxHeight: '300px' }}
      />
      <div className="text-center mt-4 mb-5">
        <Link to="/" className="btn btn-primary">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;