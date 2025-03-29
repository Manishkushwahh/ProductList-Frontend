import { BrowserRouter, Routes, Route } from "react-router-dom"
import Body from "./component/Body";
import InsertProduct from "./component/InsertProduct";
import InsertMaterial from "./component/InsertMaterial";
import InsertGrade from "./component/InsertGrade";
import { Provider } from "react-redux";
import store from "./utils/appStore";
import CombinedProduct from "./component/CombinedProduct";
import FinalProduct from "./component/FinalProduct";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <Routes>
            <Route path='/' element={<Body/>}>
              <Route path="/" element={<FinalProduct />} />
              <Route path="/product/add" element={<InsertProduct/>} />
              <Route path="/material/add" element={<InsertMaterial/>} />
              <Route path="/grade/add" element={<InsertGrade/>} />
              <Route path="/combinedproduct" element={<CombinedProduct/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
