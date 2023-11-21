import './css/App.css';
import './css/Normalize.css';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

const Page = () => {
  const routes = useRoutes([
    {path: "/", element: <Home />},
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
