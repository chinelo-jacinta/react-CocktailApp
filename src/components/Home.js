import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';

const Home = () => {
  const { loading, setSearchItem, cocktails } = useGlobalContext();
  const name = useRef('');

  const searchCocktail = (event) => {
    event.preventDefault();
    setSearchItem(name.current.value);
  };

  if (loading) {
    return <div className='loader'></div>;
  }

  return (
    <section className='section'>
      <section className='search-form'>
        <form className='home-form'>
          <input type='text' id='name' ref={name} onChange={searchCocktail} />
          <button>search</button>
        </form>
      </section>
      {!cocktails.length ? (
        <h5 className='empty-cart'>No Matching Cocktails Found...</h5>
      ) : (
        <div className='cart'>
          {cocktails.map((items) => {
            const { id, name, Image, info, glass } = items;
            return (
              <div key={id} className='carts'>
                <img src={Image} alt={name} />
                <div className='drinks-details'>
                  <h1>{name}</h1>
                  <h6>{glass}</h6>
                  <p>{info}</p>
                  <Link to={`/products/${name}`} className='carts-button'>
                    details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Home;
