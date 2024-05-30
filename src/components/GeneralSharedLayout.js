import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
const GeneralSharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default GeneralSharedLayout;
