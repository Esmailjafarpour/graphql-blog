
import { gql , useQuery } from "@apollo/client";
import {Routes , Route ,Reditect } from "react-router-dom";


//components
import Layout from "./components/layout";
import HomePage from './components/home/HomePage';
import BlogPage from "./components/blogs/BlogPage";
import AuthorPage from "./components/auther/AuthorPage";

import ScrollToTop from "./components/shared/ScrollToTop";


function App() {

  return (

      <Layout>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/blogs/:slug" element={<BlogPage/>}/>
          <Route path="/authors/:slug" element={<AuthorPage/>}/>
        </Routes>
      </Layout>
  
  );
}

export default App;
