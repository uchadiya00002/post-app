import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./routes/homepage/HomePage";
import { Route, Routes } from "react-router-dom";
import UpdatePostRoute from "./routes/updatepost/UpdatePostRoute";

function App() {
  return (
    <div className="container px-3 mx-auto ">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/updatepost/:id" element={<UpdatePostRoute />} />
      </Routes>
    </div>
  );
}

export default App;
