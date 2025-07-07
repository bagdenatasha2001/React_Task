
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import News from './Components/News';
import Contact from './Components/Contact';
import About from './Components/About';
import Users from './Components/Users';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    { 
      path:'/',
      element:<> <Navbar/><Home/></> 
    },
     { 
      path:'/Home',
      element:<> <Navbar/><Home/></> 
    },

    {
       path:'/News',
      element: <><Navbar/><News/></>
    },
     {
       path:'/Contact',
      element: <>< Navbar/> <Contact/></>
    },
     {
       path:'/About',
      element:<><Navbar/><About/></> 
    },
    {
       path:'/Users',
      element:<><Navbar/><Users/></> 
    }
  ])
  return (
   <>
   
 <RouterProvider router={router}/>
   </>
  );
}

export default App;




