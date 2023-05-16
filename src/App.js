import './App.scss';
import Header from './componetns/Header';
import TableUsers from './componetns/TableUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
      <div className='app-container'> 
          <Header/>
          <Container>
          
            <TableUsers/>
          </Container>
        
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    
    </>
  )
    
}

export default App;
