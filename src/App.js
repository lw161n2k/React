import './App.scss';
import Header from './componetns/Header';
import TableUsers from './componetns/TableUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className='app-container'> 
        <Header/>
        <Container>
        <TableUsers/>
        </Container>
    </div>
  )
    
}

export default App;
