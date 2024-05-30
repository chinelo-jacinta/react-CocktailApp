import React from 'react';
import { useContext, useState, useEffect } from 'react';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const Context = ({ children }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [cocktails, setCocktails] = useState([]);
  console.log(searchItem);
  // fetch data
  const fetchData = async () => {
    // if (!searchItem) return;
    try {
      const response = await fetch(`${url}${searchItem}`);
      const data = await response.json();
      setLoading(true);

      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((items) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            items;
          return {
            id: idDrink,
            name: strDrink,
            Image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchItem]);
  return (
    <AppContext.Provider
      value={{
        setUser,
        user,
        name,
        setLastName,
        lastName,
        setName,
        loading,
        setSearchItem,
        cocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, Context };
