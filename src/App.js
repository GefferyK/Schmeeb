import { Navbar, Container }  from 'react-bootstrap';
import { ActivityCard } from './Components/ActivityCard';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center">
        <Container>
          <Navbar.Brand href="#">SCHMEEEEB</Navbar.Brand>
        </Container>
      </Navbar>
      <ActivityCard />
    </div>
  );
}

export default App;
