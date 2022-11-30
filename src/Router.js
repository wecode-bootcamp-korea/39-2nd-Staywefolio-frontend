import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Mypage from './pages/Mypage/Mypage';
import Payment from './pages/Payment/Payment';
import RoomList from './pages/RoomList/RoomList';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import LoginCode from './pages/Login/LoginCode';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking/:roomId" element={<Booking />} />
        <Route path="/auth/kakao" element={<LoginCode />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/room-list" element={<RoomList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
