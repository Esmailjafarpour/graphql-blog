
import {Routes , Route ,Navigate } from "react-router-dom";


//components
import Layout from "./components/layout";
import HomePage from './components/home/HomePage';
import Blogs from "./components/blogs/ShowAllBlogs";
import BlogPage from "./components/blogs/BlogPage";
import Authors from "./components/auther/ShowAllAuthors";
import AuthorPage from "./components/auther/AuthorPage";
import NotFound from './NotFound'

import ScrollToTop from "./components/shared/ScrollToTop";

function App() {

  return (
      <Layout>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blogs/:slug" element={<BlogPage/>}/>
          <Route path="/authors" element={<Authors/>}/>
          <Route path="/authors/:slug" element={<AuthorPage/>}/>
          <Route path="/NotFound" element={<NotFound/>}/>
          <Route path="/*" element={<Navigate to="/NotFound"/>}/>
        </Routes>
      </Layout>
  );
}

export default App;
