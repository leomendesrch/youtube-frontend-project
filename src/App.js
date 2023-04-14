import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import UseHamburguerContext from "./hook/useHamburguerContext";
import Home from "./pages/Home/home";
import Library from "./pages/Library/library";
import { useState } from "react";
import Shorts from "./pages/Shorts/shorts";
import Subscriptions from "./pages/Subscriptions/subscriptions";


function App() {
  const { openMenu, setOpenMenu } = UseHamburguerContext()
  const [ openShortsContainer, setOpenShortsContainer ] = useState(false)
  
  return (
    <BrowserRouter>
    <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu}></Header>
      <div style={{ width: '100%', display: "flex", height: '100%'}}>
        <Menu openMenu={openMenu} />
        <div style={{ width: '100%', padding: '20px 32px', boxSizing: "border-box", display: "flex", justifyContent: "center", height: '100'}}>
        <Routes>
          <Route path="/" element={<Home openMenu={openMenu} openShortsContainer={openShortsContainer} setOpenShortsContainer={setOpenShortsContainer}/>}/>
          <Route path="/library" element={<Library openMenu={openMenu}></Library>} />
          <Route path="/shorts" element={<Shorts></Shorts>} />
          <Route path="/subscriptions" element={<Subscriptions></Subscriptions>} />
        </Routes>
        </div>
      </div > 
      
    </div>
    </BrowserRouter>
  );
}


export default App;
