import Home from "./components/Home";
import CategoryMovies from "./pages/CategoryMovies";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routePath } from "./constants/route";



function App() {
  return (
    <Router>

      <Routes>

      <Route path={routePath.home} element={<Home/>} />

      

      </Routes>

    </Router>
  );
}

export default App;
