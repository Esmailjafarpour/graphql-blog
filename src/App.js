import './App.css';
import { gql , useQuery } from "@apollo/client";

const QUERY = gql`
  query {
    authors { name }
  }
`;

function App() {

  const { loading , data } = useQuery(QUERY);
  console.log(data)

  return (
    <div className="App">
       <h1>App </h1>
    </div>
  );
}

export default App;
