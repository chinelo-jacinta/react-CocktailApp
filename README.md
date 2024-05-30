# React Router 6

#### React Course

[My React Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF)

#### Support

Find the App Useful? [You can always buy me a coffee](https://www.buymeacoffee.com/johnsmilga)

#### Run Complete Project

- index.js

```js
// import App from './App';
import App from './final/App';
```

#### Docs

[React Router Docs](https://reactrouter.com/docs/en/v6/getting-started/overview)

#### Install

```sh
npm install react-router-dom@6
```

#### First Pages

- App.js

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>home page</div>} />
        <Route
          path='testing'
          element={
            <div>
              <h2>testing </h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

#### Components

- App.js

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

#### Links

- Home.js, About.js

```js
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to='/about' className='btn'>
        About
      </Link>
      <a href="">
    </div>
  );
};
export default Home;
```

#### Error Page

- App.js

```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
```

- Error.js

```js
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <h2>404</h2>
      <p>page not found</p>
      <Link to='/'>back home</Link>
    </section>
  );
};
export default Error;
```

#### Nested Pages

- will refactor few times

- App.js

```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

#### Shared Layout

- Home.js

```js
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page</h2>
      <Outlet />
    </section>
  );
};
export default Home;
```

#### Navbar

- Navbar.js

```js
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
    </nav>
  );
};
export default Navbar;
```

- Home.js

```js
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Home = () => {
  return (
    <>
      <Navbar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default Home;
```

#### Index Routes

- Index routes render in the parent routes outlet at the parent route's path.
- Index routes match when a parent route matches but none of the other children match.
- Index routes are the default child route for a parent route.
- Index routes render when the user hasn't clicked one of the items in a navigation list yet.

- copy Home.js content
- SharedLayout.js

```js
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout;
```

- Home.js

```js
const Home = () => {
  return (
    <section className='section'>
      <h2>Home Page</h2>
    </section>
  );
};
export default Home;
```

- App.js

```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

#### NavLink (style)

- StyledNavbar.js

```js
import { NavLink } from 'react-router-dom';

<nav className='navbar'>
  <NavLink
    to='/about'
    style={({ isActive }) => {
      return { color: isActive ? 'red' : 'grey' };
    }}
  >
    Home
  </NavLink>
</nav>;
```

#### NavLink (className)

- StyledNavbar.js

```js
<nav className='navbar'>
  <NavLink
    to='/'
    className={({ isActive }) => (isActive ? 'link active' : 'link')}
  >
    Home
  </NavLink>
</nav>
```

#### Reading URL Params

- App.js

```js
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

#### Single Product

- SingleProduct.js

```js
import { Link, useParams } from 'react-router-dom';
import products from '../data';
const SingleProduct = () => {
  const { productId } = useParams();

  return (
    <section className='section product'>
      <h2>{productId}</h2>
      <Link to='/products'>back to products</Link>
    </section>
  );
};

export default SingleProduct;
```

#### Products Page

- Products.js

```js
import { Link } from 'react-router-dom';
import products from '../data';
const Products = () => {
  return (
    <section className='section'>
      <h2>products</h2>
      <div className='products'>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
```

#### Single Product

- SingleProduct.js

```js
import { Link, useParams } from 'react-router-dom';
import products from '../data';
const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;

  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products'>back to products</Link>
    </section>
  );
};

export default SingleProduct;
```

#### useNavigate()

[ (?.) or Optional Chaining Explained](https://youtu.be/PuEGrylM1x8)

- App.js

```js
function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<SingleProduct />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='dashboard' element={<Dashboard user={user} />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

- Login.js

```js
 import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate('/dashboard');
  };

```

[ (?.) or Optional Chaining Explained](https://youtu.be/PuEGrylM1x8)

- Dashboard.js

```js
const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};
export default Dashboard;
```

#### Protected Route

- App.js

```js
<Route
  path='dashboard'
  element={
    <ProtectedRoute user={user}>
      <Dashboard user={user} />
    </ProtectedRoute>
  }
/>
```

- ProtectedRoute.js

```js
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;
```
import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const [loading, setloading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();
  const fetchData = async () => {
    try {
      const data = await fetch(`${url}${id}`);
      const response = await data.json();
      console.log(response.drinks);
      if (response.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strGlass: glass,
          strCategory: category,
          strAlcoholic: info,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = response.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
        console.log(newCocktail);
      } else {
        setCocktail(null);
      }
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };
  useEffect(() => {
    setloading(true);
    fetchData();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className='secton-title'>no cocktails to display</h2>;
  }
  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;
  return (
    <section>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name} </h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item},</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
