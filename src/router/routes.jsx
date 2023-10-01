// V6 of react router standard way is to create a routes object and pass down to createBrowserRouter Api for creating routes
import Home from 'views/home/home.jsx';
import Chat from 'views/chat/chat.jsx';

/*
Typical route object 
interface RouteObject {
  path?: string;
  index?: boolean;
  children?: React.ReactNode;
  caseSensitive?: boolean;
  id?: string;
  loader?: LoaderFunction;
  action?: ActionFunction;
  element?: React.ReactNode | null;
  Component?: React.ComponentType | null;
  errorElement?: React.ReactNode | null;
  ErrorBoundary?: React.ComponentType | null;
  handle?: RouteObject["handle"];
  shouldRevalidate?: ShouldRevalidateFunction;
  lazy?: LazyRouteFunction<RouteObject>;
}
*/
// This contains all the routes in route Array with the properties as above
// Here we can also define child elements through children property
export const RoutesArray = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/chat',
                element: <Chat />,
            },
        ],
    },
];
