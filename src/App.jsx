import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Single from "./pages/Single";
import SinglePage from "./pages/[Product]/Single";
import MultiPage from "./pages/[Product]/Multi";
import Pantum from "./pages/[Product]/Pantum";
import Where from "./pages/Links/Where";
import Servicing from "./pages/Links/Servicing";
import Support from "./pages/Links/Support";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/warranty-registration" element={<Login />} />
        <Route path="/products" element={<Single />} />
        <Route path="/single-function" element={<SinglePage />} />
        <Route path="/mutli-function" element={<MultiPage />} />
        <Route path="/pantum-color" element={<Pantum />} />
        <Route path="/where-to-buy" element={<Where />} />
        <Route path="/servicing" element={<Servicing />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
