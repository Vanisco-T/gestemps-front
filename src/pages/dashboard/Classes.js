import React,{useState,useEffect} from 'react'
import axios from 'axios';
import TextExample from '../../component/TextExample';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useCreateSalleMutation } from '../../services/appApi';
import { Alert } from "react-bootstrap";
function Classes() {
     const [salle,setSalle] =useState([]);
     useEffect(() => {
      axios.get("https://gestemp-app.onrender.com/api/salles/").then(({ data }) => setSalle(data));
  }, []);
  const [create, { error, isError }] = useCreateSalleMutation();
    //The sign in function to handle the form
    function handleSalle(e) {
        e.preventDefault();
        axios.post('https://gestemp-app.onrender.com/api/salles/', {
          designation,
          capacite,
          code
        })
        .then(function (response) {
          window.location.reload(false);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [designation,setDesi] = useState('');
  const [capacite,setCapa] = useState(0);
  const [code,setCo] = useState('');


    return (
    <div> 
          <Button variant="success" onClick={handleShow}>Ajouter</Button>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une salle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <Form>
              {isError && <Alert variant="danger">{error.data}</Alert>}
            <Form.Group className="mb-3" >
              <Form.Label>Code</Form.Label>
              <Form.Control type="text" placeholder="Entre le code" value={code} onChange={(e) => setCo(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Capacite</Form.Label>
              <Form.Control type="number" placeholder="Entre la capacite" value={capacite} onChange={(e) => setCapa(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Designation </Form.Label>
              <Form.Control type="text" placeholder="Entre la dessignation" value={designation} onChange={(e) => setDesi(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            fermer
          </Button>
          <Button variant="primary" onClick={handleSalle}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
         <div className="featured-products-container container mt-4">
                  <div className="d-flex justify-content-start flex-wrap">
                      {salle.map((salles) => (
                          <TextExample {...salles} /> 
                      ))}
                  </div>
            </div>
    </div>
  )
}

export default Classes
