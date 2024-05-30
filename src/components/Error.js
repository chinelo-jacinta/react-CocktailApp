import { Link } from 'react-router-dom';
const Error = () => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>Oops! Something went wrong.</h1>
      <p>We're sorry, but the page you're looking for could not be found.</p>
      <Link to='/' className='btn '>
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
