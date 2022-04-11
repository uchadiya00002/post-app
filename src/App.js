import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./routes/homepage/HomePage";
import { Route, Routes } from "react-router-dom";
import UpdatePostRoute from "./routes/updatepost/UpdatePostRoute";
import UpdateComment from "./routes/UpdateComment";

function App() {
  return (
    <div className="container px-3 mx-auto bg-gray-900 min-h-screen">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/updatepost/:id" element={<UpdatePostRoute />} />
        <Route exact path="/updatecomment/:id" element={<UpdateComment />} />
      </Routes>
    </div>
  );
}

export default App;
