import { Navigate } from 'react-router-dom';
import { useGlobalContext } from './context';
const LoginsSharedLayout = ({ children }) => {
  const { user } = useGlobalContext();
  if (!user.name) {
    return <Navigate to='/' />;
  }
  return children;
};

export default LoginsSharedLayout;
