import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer.jsx'
import WatchPage from './components/WatchPage.jsx'
import { Provider } from 'react-redux'
import store from './utils/store.js'
import SearchResults from './components/SearchResults.jsx'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      },
      {
        path:"watchpage",
        element:<SearchResults/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={appRouter}/>
      
    </Provider>
  </StrictMode>,
)
