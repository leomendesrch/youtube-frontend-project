import Login from "./pages/Login/login";
import SignUp from "./pages/SignUp/signup";
import Home from "./pages/Home/home";
import Library from "./pages/Library/library";
import Shorts from "./pages/Shorts/shorts";
import Subscriptions from "./pages/Subscriptions/subscriptions";

import Header from "./components/header/header";
import Menu from "./components/menu/menu";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./context/userContext";
import { DropDownMenuStore } from "./context/dropDownMenuContext";
import { CategoryBarStore } from "./context/categoryBarContext";
import { MainContainer, PageContainer } from "./app.style";
import DropDownMenu from "./components/dropDownMenu/dropDownMenu";
import ChannelPage from "./pages/Channel/channel";
import { VideosStorage } from "./context/videosContext";
import SearchPage from "./pages/Search/search";


function App() {

  return (
  <BrowserRouter>
    <VideosStorage>
      <CategoryBarStore>
        <DropDownMenuStore>
          <UserStorage>
            <div className="App">
              <Header></Header>
              <MainContainer>
                <Menu />
                <PageContainer>
                <DropDownMenu />
                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/library" element={<Library/>} />
                    <Route path="/shorts" element={<Shorts />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signup" element={<SignUp/>}/> 
                    <Route path="/channel" element={<ChannelPage />}/> 
                    <Route path="/search" element={<SearchPage />}/> 
                  </Routes>
                </PageContainer>
                </MainContainer>
            </div>
          </UserStorage>
        </DropDownMenuStore>
      </CategoryBarStore>
    </VideosStorage>
  </BrowserRouter>
  );
}


export default App;
