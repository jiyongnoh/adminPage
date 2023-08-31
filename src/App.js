import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info" element={<Info />} />
        */}
      </Route>
    </Routes>
  );
}

export default App;
