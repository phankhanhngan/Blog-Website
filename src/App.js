import React from 'react';
import TopBar from './components/topbar/TopBar';
import LoginRegister from "./pages/login_register/Login_Register";
import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Single from "./pages/single/Single";

function App() {
    const user = true;
  return (
          <div className="App">
              <TopBar/>
              <BrowserRouter>
                  <Routes>
                      <Route exact path="/" element={<Home/>} />
                      <Route path="/auth" element={<LoginRegister/>} />
                      <Route path="/write" element={user ? <Write/> : <LoginRegister/>}/>
                      <Route path="/setting" element={user ? <Setting/> : <LoginRegister/>}/>
                      <Route path="/post/:postId" element={<Single/>}/>
                  </Routes>
              </BrowserRouter>
          </div>
  );
}

export default App;
