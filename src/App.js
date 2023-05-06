
import { gql , useQuery } from "@apollo/client";
import {Routes , Route ,Reditect } from "react-router-dom";


//components
import Layout from "./components/layout";
import HomePage from './components/home/HomePage';
import BlogPage from "./components/blogs/BlogPage";
import AuthorPage from "./components/auther/AuthorPage";


function App() {

  return (

      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/blogs/:slug" element={<BlogPage/>}/>
          <Route path="/authors/:slug" element={<AuthorPage/>}/>
        </Routes>
      </Layout>
  
  );
}

export default App;
