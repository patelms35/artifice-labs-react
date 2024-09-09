import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeSection from "./components/HomeSection.jsx";
import WebDevPage from "./Pages/Services/WebDevPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/web-dev" element={<WebDevPage />} />
      </Routes>
    </Router>
  );
};

export default App;
