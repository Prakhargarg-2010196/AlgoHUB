// // Helps in creating routes config
import { RoutesArray } from '~/router/routes.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const Routes = createBrowserRouter(RoutesArray);
const Router = () => <RouterProvider router={Routes} />;
export default Router;
