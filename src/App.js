import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhone13ProMax1 from "./pages/IPhone13ProMax1";
import IPhone13ProMax4 from "./pages/IPhone13ProMax4";
import IPhone13ProMax3 from "./pages/IPhone13ProMax3";
import IPhone13ProMax2 from "./pages/IPhone13ProMax2";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-13-pro-max-4":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-13-pro-max-3":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-13-pro-max-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IPhone13ProMax1 />} />
      <Route path="/iphone-13-pro-max-4" element={<IPhone13ProMax4 />} />
      <Route path="/iphone-13-pro-max-3" element={<IPhone13ProMax3 />} />
      <Route path="/iphone-13-pro-max-2" element={<IPhone13ProMax2 />} />
    </Routes>
  );
}
export default App;
