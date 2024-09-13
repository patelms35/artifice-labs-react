import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeSection from "./components/HomeSection.jsx";
import WebDevPage from "./Pages/Services/WebDevPage.jsx";
import OurWorksPage from './components/OurWorksPage.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/web-dev" element={<WebDevPage />} />
        <Route path="/our-works" element={<OurWorksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
