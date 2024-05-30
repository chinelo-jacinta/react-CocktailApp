import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useGlobalContext } from './context';
const Logins = () => {
  const { name, setLastName, lastName, setName, setUser } = useGlobalContext();
  const [email, setEmail] = useState('test@test.com');
  const [value, setValue] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const entries = [...formData.entries()];
    // console.log(entries);
    const values = [...formData.values()];
    console.log(values);
    if (values.includes('')) {
      return setValue(true);
      // console.log('please enter all values');
    }
    const object = Object.fromEntries(formData);
    // const keys = [...formData.keys()];
    // console.log(object);
    // e.currentTarget.reset();
    setUser({ name: name, lastName: lastName });
    setName('');
    setLastName('');
    navigate('/dashboard');
  };
  useEffect(() => {
    if (value) {
      const timeoutId = setTimeout(() => {
        setValue(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [value]);
  return (
    <>
      <article>
        <div className='section form-section'>
          <form className='form' action='submit' onSubmit={handleSubmit}>
            {value && <h6>please input all values!</h6>}
            <p>login</p>
            <div className='form-control'>
              <label htmlFor='name'>name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='name'>last name</label>
              <input
                type='text'
                id='last-name'
                name='last-name'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='name'>email</label>
              <input
                type='text'
                id='email'
                name='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <button type='submit' className='btn btn-block'>
              submit
            </button>
          </form>
        </div>
      </article>
    </>
  );
};

export default Logins;
