import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import SinglePage from "./pages/singlepage/SinglePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<List/>}/>
        <Route path="/products/:id" element={<SinglePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
