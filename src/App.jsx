import Intro from "./components/Intro"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import About from './About.jsx';
import Contact from './Contact';
import Work from './Work';
import NavBar from './components/NavBar';

const routes = [
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <Intro />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <NavBar />
        <About />
      </>
    ),
  },
  {
    path: '/work',
    element: (
      <>
        <NavBar />
        <Work />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <NavBar />
        <Contact />
      </>
    ),
  },
];

const router = createBrowserRouter(routes);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
