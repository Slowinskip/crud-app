import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import About from "./Components/pages/About/About";
import Post from "./Components/pages/Post/Post";
import PostAdd from "./Components/pages/PostAdd/PostAdd";
import PostEdit from "./Components/pages/PostEdit/PostEdit";
import NotFound from "./Components/pages/NotFound/NotFound";
import { Container } from 'react-bootstrap';
import Header from "./Components/views/Header/Header";
import Footer from "./Components/views/Footer/Footer";


function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/edit/:id" element={<PostEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
