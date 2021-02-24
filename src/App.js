import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// HOME PAGE
import Navigation from './Components/Header/Nav'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

// PAGES
import Iphone from './Pages/IphonePage/Iphone';
import Mac from './Pages/Mac/Mac';
import ErrorPage from './Pages/ErrorPage/Error';
import Products from './Pages/Productspage/Products'

function App()
{
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:model" exact component={Products} />
          <Route path="/" component={ErrorPage} />
        </Switch>
        {/* <Youtube /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;