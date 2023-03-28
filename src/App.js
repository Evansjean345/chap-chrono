import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Retail from './routes/Retail'
import Trade from "./routes/Trade";
import LargeErea from "./routes/LargeErea";
import Communaute from "./routes/Communaute";
import Cotransporteur from "./routes/Cotransporteur";
import Consommateurs from "./routes/Consommateurs";
import Faq from "./routes/Faq";
import Career from "./routes/Career";

function App() {
  return (
    <div className="App bg-white m-0 p-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/largeErea" element={<LargeErea />} />
        <Route path="/communauté" element={<Communaute />} />
        <Route path="/cotransporteur" element={<Cotransporteur/>} />
        <Route path="/consommateurs" element={<Consommateurs/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/career" element={<Career/>} />
      </Routes>
    </div>
  );
}

export default App;
