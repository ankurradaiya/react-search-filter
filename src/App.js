import './App.css';
import userData from "./data.json";
import SearchBar from "./Components/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
function App() {
  return (
      <Container>
          <SearchBar placeholder="Search user by ID,address,name.." data={userData} />
      </Container>
  );
}

export default App;
