import {Link} from 'react-router-dom';
import React from 'react';

interface Props {
  aboutUsLink: string;
  contactsLink: string;
}

const Toolbar: React.FC<Props> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="d-flex justify-content-center mt-4">
        <Link to="/aboutUs" className="btn btn-primary mx-2">About us</Link>
        <Link to="/сontacts" className="btn btn-primary mx-2">Contacts</Link>
      </div>
    </nav>
  );
};

export default Toolbar;