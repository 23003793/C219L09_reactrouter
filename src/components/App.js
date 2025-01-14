import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Categories from "./Categories";
import Category from "./Category";
import Session from "./Session"; 
import Header from "./Header";
import Register from "./Register"; // Importing the Register component
import Confirmation from "./Confirmation"; // Importing the Confirmation component

function App() {
  return (
    <div className="app">
      <header className="container">
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech" />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />}>
            <Route path=":sessionId" element={<Session />} />
          </Route>
        </Route>
        <Route path="register" element={<Register />} /> {/* Register Route */}
        <Route path="confirmed" element={<Confirmation />} /> {/* Confirmation Route */}
        <Route
          path="*"
          element={
            <div className="not-found">
              <h1>Page Not Found</h1>
              <a href="/">Go to Home</a>
            </div>
          }
        />
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
