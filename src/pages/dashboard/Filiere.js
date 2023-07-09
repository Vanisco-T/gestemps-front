import React,{useState,useEffect} from 'react'
import axios from 'axios';
import TextFiliere from '../../component/TextFiliere';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function Filiere() {
     const [salle,setSalle] =useState([]);
     useEffect(() => {
      axios.get("https://gestemp-app.onrender.com/api/filieres/").then(({ data }) => setSalle(data));
  }, []);
    //The sign in function to handle the form
    function handleSalle(e) {
        e.preventDefault();
        axios.post('https://gestemp-app.onrender.com/api/filieres/', {
          titre:designation,
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
  const [code,setCo] = useState('');


    return (
    <div> 
          <Button variant="success" onClick={handleShow}>Ajouter</Button>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une Filiere</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Code</Form.Label>
              <Form.Control type="text" placeholder="Entre le code" value={code} onChange={(e) => setCo(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Titre </Form.Label>
              <Form.Control type="text" placeholder="Entre le Titre" value={designation} onChange={(e) => setDesi(e.target.value)} />
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
                          <TextFiliere {...salles} /> 
                      ))}
                  </div>
            </div>
    </div>
  )
}

export default Filiere
