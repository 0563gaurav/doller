import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
import Home from './Home'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Header></Header>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          <Footer></Footer>
        </BrowserRouter>
     
    </div>
  );
}

export default App;