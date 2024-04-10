import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Headphones from './pages/Headphones';
import Root from './pages/Root';
import Seakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Home from './pages/Home';
import { createContext, useEffect, useState } from 'react';
import productsdata from './data.json';
import { CartItemType, GlobalStateType, IData } from './interfaces';
import ProductDetail from './pages/ProductDetail';


// export type CartItemType = {
//   id: number;
//   price: number;
//   img: string;
//   quantity: number;
//   totalPrice: number;
//   cartItemName: string;
// }

// type GlobalStateType = {
//   screenWidth: number;
//   category: string[];
//   sidebar: boolean;
//   setCart: React.Dispatch<React.SetStateAction<boolean>>;
//   cart: boolean;
//   toggleSidebar: () => void;
//   data: IData[];
//   setSidebar: (value: React.SetStateAction<boolean>) => void;
//   setCartItems: (volue: CartItemType[]) => void;
//   // setCartItems:  React.Dispatch<React.SetStateAction<IData[] | CartItemProps[]>>
//   cartItems: CartItemType[];
//   // increase: (value: CartItemType) => void;
// }



export const GlobalState = createContext<GlobalStateType | null>(null);


function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [data, setData] = useState<IData[]>([]);
  const [sidebar, setSidebar] = useState(false)
  const [cart, setCart] = useState(false)
  const [cartItems, setCartItems] = useState<CartItemType[]>([])


  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }


  let category: string[] = [];

  data.forEach((item) => {
    if (!category.includes(item.category)) {
      category.push(item.category);
    }

  });


  useEffect(() => {
    setData(productsdata as IData[]);
  }, []);



  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />

        <Route path='headphones' >
          <Route index element={<Headphones />} />
          <Route path='/headphones/productdetail' element={<ProductDetail />} />
        </Route>


        <Route path='speakers'>
          <Route index element={<Seakers />} />
          <Route path='/speakers/:productdetail' element={<ProductDetail />} />
        </Route>


        <Route path='earphones' >
          <Route index element={<Earphones />} />
          <Route path='/earphones/:productdetail' element={<ProductDetail />} />
        </Route>
      </Route>
    )
  );



  return (
    <div className='App w-full flex flex-col items-center'>
      <GlobalState.Provider value={{
        screenWidth,
        category,
        sidebar,
        setCart,
        cart,
        toggleSidebar,
        data,
        setSidebar,
        setCartItems,
        cartItems,
      }}>
        <RouterProvider router={router}></RouterProvider>
      </GlobalState.Provider>
    </div>
  );
}

export default App;
