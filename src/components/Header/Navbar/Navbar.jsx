import {  NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/Home'
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'text-green-400 underline' : ''
              }
            >
              Home
            </NavLink>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
