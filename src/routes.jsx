import App from './App';
import ErrorPage from './ErrorPage';
import Shop from './components/Shop';
import Checkout from './components/Checkout';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shop',
    element: <Shop />,
  },
  {
    path: 'checkout',
    element: <Checkout />,
  },
];

export default routes;
