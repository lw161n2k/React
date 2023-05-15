import './App.scss';
import Header from './componetns/Header';
import TableUsers from './componetns/TableUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { ModalAddNew } from './componetns/ModalAddNew';
import { useState } from 'react';

function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)
  const handleClose = () => {
    setIsShowModalAddNew(false)

  }
  return (
    <div className='app-container'> 
        <Header/>
        <Container>
          <div className='my-3 add-new'>
            <span><h3>List Users:</h3></span>
            <button className='btn btn-success'
            onClick={()=> setIsShowModalAddNew(true)} >Add new user</button>
          </div>
          <TableUsers/>
        </Container>
        <ModalAddNew
          show={isShowModalAddNew}
          handleClose={handleClose}
        />
    </div>
  )
    
}

export default App;
