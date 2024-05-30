import { useGlobalContext } from './context';
const Dashboard = () => {
  const { user } = useGlobalContext();
  return (
    <h3 className='section'>
      Hello {user.name} {user.lastName},
    </h3>
  );
};

export default Dashboard;
