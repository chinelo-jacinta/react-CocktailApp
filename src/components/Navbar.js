import { useState, useRef, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  // const link = useRef(null);
  // const linksContainer = useRef(null);

  // useEffect(() => {
  //   const newHeight = link.current.getBoundingClientRect().height;
  //   console.log(newHeight);
  //   if (showLinks) {
  //     linksContainer.current.style.height = `${newHeight}px`;
  //   } else {
  //     linksContainer.current.style.height = `0px`;
  //   }
  // }, [showLinks]);
  return (
    <>
      <nav>
        <div className='nav-center section'>
          <div className='nav-header'>
            <h3>mixMaster</h3>
            <button
              className='toggle-btn'
              onClick={() => setShowLinks(!showLinks)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
          <div className={`${showLinks ? 'show' : 'links-container'}`}>
            <ul className='nav-links '>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) => {
                    return isActive ? 'link active' : 'link';
                  }}
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  className={({ isActive }) => {
                    return isActive ? 'link active' : 'link';
                  }}
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/login'
                  className={({ isActive }) => {
                    return isActive ? 'link active' : 'link';
                  }}
                >
                  login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
