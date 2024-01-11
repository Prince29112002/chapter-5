import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Task-A/Home";
import About from "./Task-A/About";
import Contact from "./Task-A/Contact";
import Profile from "./TaskB/Profile";
import Msd from "./TaskB/Msd";
import Jadeja from "./TaskB/Jadeja";
import Virat from "./TaskB/Virat";
import Header from "./Header";
import Error from "./Task-D/Error";
import Search from "./Task-F/Search";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />}>
          <Route path="virat" element={<Virat />} />
          <Route path="jadeja" element={<Jadeja />} />
          <Route path="msd" element={<Msd />} />
        </Route>
        <Route path="search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
