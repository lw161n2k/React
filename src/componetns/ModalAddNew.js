import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { postCreateUser } from '../services/UserService';
import { toast } from 'react-toastify';


const ModalAddNew = (props) => {
const {show, handleClose, handleUpdateUser} = props;
const [name, setName] = useState("");
const [job, setJob] = useState("");

const handleSaveUser = async () => {
    let res = await postCreateUser(name, job)
    console.log(">>>check state :", "name = ", name, "job = ", job)
    if (res && res.id) {
        handleClose();
        setName("");
        setJob("");
        toast.success("A user is create succeed")
        handleUpdateUser({first_name: name, id: res.id})
    }
    else{
        toast.error("An error!")
    }
}



    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input 
                                type="email" 
                                className="form-control"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Job</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={job}
                                onChange={(event) => setJob(event.target.value)}
                            />
                                
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSaveUser()} >
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export {ModalAddNew}