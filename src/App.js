import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Retail from "./routes/Retail";
import Trade from "./routes/Trade";
import LargeErea from "./routes/LargeErea";
import Communaute from "./routes/Communaute";
import Cotransporteur from "./routes/Cotransporteur";
import Consommateurs from "./routes/Consommateurs";
import Faq from "./routes/Faq";
import Career from "./routes/Career";
import FromYourStore from "./routes/FromYourStore";
import BetweenYourStore from "./routes/BetweenYourStore";
import Chariot from "./routes/Chariot";
import Florist from "./routes/Florist";
import Interface from "./routes/Interface";

function App() {
  return (
    <div className="App bg-white m-0 p-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/largeErea" element={<LargeErea />} />
        <Route path="/communauté" element={<Communaute />} />
        <Route path="/cotransporteur" element={<Cotransporteur />} />
        <Route path="/consommateurs" element={<Consommateurs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/career" element={<Career />} />
        <Route path="/fromYourStore" element={<FromYourStore />} />
        <Route path="/betweenYourStore" element={<BetweenYourStore />} />
        <Route path="/chariot" element={<Chariot />} />
        <Route path="/florist" element={<Florist />} />
        <Route path="/interface" element={<Interface />} />
      </Routes>
    </div>
  );
}

export default App;
