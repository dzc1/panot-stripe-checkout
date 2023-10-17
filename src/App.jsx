import { BrowserRouter, Link, Routes } from "react-router-dom";
import routes from "./routes/routes";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul className="app-ul">
            <li className="app-li">
              <Link to="/">Home</Link>
            </li>
            <li className="app-li">
              <Link to="/about">About</Link>
            </li>
            <li className="app-li">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
