import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const PROD_URL = 'http://10.0.2.2:3000/api/products';

const productContext = createContext({
  messages: [],
});

productContext.displayName = 'productCtx';

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get(PROD_URL)
      .then((res) => {
        if (res.data.length === 0) return;
        // let formattedExpenses = res.data.map((expense) => {
        //   let date = new Date(expense.date);
        //   let formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
        //     '0' + date.getDate()
        //   ).slice(-2)}`;
        //   return { ...expense, date: formattedDate };
        // });
        // setExpenses(formattedExpenses);
        console.log('res.data: ', res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.warn('ERROR: ', err);
      });
  }, []);

  const prodCtxValues = { products };

  return <productContext.Provider value={prodCtxValues}>{children}</productContext.Provider>;
};

export function useProductContext() {
  return useContext(productContext);
}
