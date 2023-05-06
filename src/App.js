
import { gql , useQuery } from "@apollo/client";
import Layout from "./components/layout"
import HomePage from './components/home/HomePage';


function App() {

  return (

    <>
      <Layout>
        <HomePage/>
      </Layout>
    </>
  
  );
}

export default App;
