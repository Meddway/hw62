import {Link} from 'react-router-dom';

const Contacts = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>ContactContactContactContactContact</p>

      <div className="text-center mt-4 mb-5">
        <Link to="/" className="btn btn-primary">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default Contacts;