import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./page/Main";
import Login from "./page/Login";
import Info from "./page/Info";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="info" element={<Info />} />
      </Route>
    </Routes>
  );
}

export default App;
