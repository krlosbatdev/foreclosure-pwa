import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AmplifySignOut }  from '@aws-amplify/ui-react';

const Navbar = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems, { edge: 'left' });
  });

  return (
    <Fragment>
      <nav className='z-depth-0'>
        <div className='nav-wrapper'>
          <a href='/' className='brand'>
            foreclosu<span>res</span>
          </a>
          <a
            href='#!'
            data-target='slide-out'
            className='left sidenav-trigger'
          >
            <i className='material-icons'>menu</i>
          </a>
          <ul className='left hide-on-med-and-down'>
            <li>
              <Link to='/'>Home</Link>
            </li>

          </ul>
        </div>
      </nav>

      <ul id='slide-out' className='sidenav'>
        <li>
          <Link to='/' className='waves-effect sidenav-close'>
            <i className='material-icons'>home</i>Home
          </Link>
        </li>
        <li>
        <AmplifySignOut />
      </li>

      </ul>

    </Fragment>
  );
};

export default Navbar;