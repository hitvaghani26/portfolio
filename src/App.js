import './App.css';
import Header from './components/Header';
import { Next } from './components/Next';
import Leftside from './pages/Leftside';
import Main from './pages/Main';
import Prev from "./components/Prev.js"
import MainPage from './pages/MainPage.js';

import {
  BrowserRouter,

  Route,
  Link,
  Routes
} from "react-router-dom";
import Aboutme from './pages/Aboutme.js';
import Contact from './pages/Contact.js';
import Project from "./pages/Project.js"
import NextPrev from './components/NextPrev.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/aboutme' element={<Aboutme />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Project />} />
          <Route path='/' element={<MainPage />} />

        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
