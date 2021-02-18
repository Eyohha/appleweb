import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import First from './Components/Main/First-Box/First'
import Notice from './Components/Main/Notice/Notice'
import Second from './Components/Main/Second-Box/Second'
import Third from './Components/Main/Third-box/Third'
import Fourth from './Components/Main/Fourth-Box/Fourth/Fourth'
import Fifth from './Components/Main/Fifth-Box/Fifth'
import Sixth from './Components/Main/Sixth-Box/Sixth'
import Youtube from './YoutubeAPI/Youtube'

// HOME PAGE
import Navigation from './Components/Header/Nav'
// import Main from './Components/Main'
import Footer from './Components/Footer/Footer'

// PAGES
import Iphone from './Pages/IphonePage/Iphone';
import Mac from './Pages/Mac/Mac';
import ErrorPage from './Pages/ErrorPage/Error';
import Products from './Pages/Productspage/Products'




// function App()
// {
//   return (
//     <div>
//       <Nav />
//       <Notice />
//       <First />
//       <Second />
//       <Third />
//       <Fourth />
//       <Fifth />
//       <Sixth />
//       {/* <Youtube /> */}
//       <Iphone />
//       <Mac />
//       <ErrorPage />
//       <Footer />
//     </div>
//   );
// }

// export default App;


function App()
{
  return (
    <Router>
      <div>
        <Navigation />

        {/* <Route path="/" >
            <Notice />
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Sixth />
          </Route> */}
        <Route path="/" exact component={Notice} />
        <Route path="/" exact component={First} />
        <Route path="/" exact component={Second} />
        <Route path="/" exact component={Third} />
        <Route path="/" exact component={Fourth} />
        <Route path="/" exact component={Fifth} />
        <Route path="/" exact component={Sixth} />

        <Switch>
          <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:model" exact component={Products} />
          {/* <Route path="/" component={ErrorPage} /> */}
        </Switch>

        {/* <Youtube /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;