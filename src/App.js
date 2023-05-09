
import { gql , useQuery } from "@apollo/client";
import {Routes , Route ,Reditect } from "react-router-dom";


//components
import Layout from "./components/layout";
import HomePage from './components/home/HomePage';
import Blogs from "./components/blogs/ShowAllBlogs";
import BlogPage from "./components/blogs/BlogPage";
import Authors from "./components/auther/ShowAllAuthors";
import AuthorPage from "./components/auther/AuthorPage";

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
        </Routes>
      </Layout>
  
  );
}

export default App;
