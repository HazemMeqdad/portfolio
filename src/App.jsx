import './css/App.css';
import './css/Normalize.css';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Error from './pages/Error';

const Page = () => {
  const routes = useRoutes([
    {path: "/", element: <Home />},
    {path: "*", element: <Error />}
  ]);
  return routes;
}

function App() {
  
  return (
    <Router>
      <Nav />
      <Page />
      <Footer />
    </Router>
  )
}

export default App
