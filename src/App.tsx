import React,{lazy} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' ;
const  ChatBody  = lazy(()=> import("./pages/Components/Chatinterface/index")) ;
import "./App.css" ;
// const Login  = lazy(()=> import("./pages/Login")) ;
// const  Chat  = lazy(()=> import("./pages/Chat")) ;
// const Groups  = lazy(()=> import("./pages/Groups")) ;


 
const App = () => {
  return <BrowserRouter>
  <Routes>
  
    <Route path='/' element={<ChatBody/>} />
    {/* <Route path='/chat/:chatid' element={<Chat/>} />
    <Route path='/groups' element={<Groups/>} />
    <Route path='/login' element={<Login/>} /> */}
  </Routes>
  </BrowserRouter>
}

export default App