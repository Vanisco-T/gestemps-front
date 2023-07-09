import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useCreateSalleMutation } from '../../services/appApi';
import { Alert } from "react-bootstrap";
import TextEn from '../../component/TextEn';
function Enseignant() {
     const [salle,setSalle] =useState([]);
     useEffect(() => {
      axios.get("https://gestemp-app.onrender.com/api/teachers/").then(({ data }) => setSalle(data));
  }, []);
  const [create, { error, isError }] = useCreateSalleMutation();
    //The sign in function to handle the form
    function handleSalle(e) {
        e.preventDefault();
        axios.post('https://gestemp-app.onrender.com/api/teachers/', {
          designation: user,
          grade,
          entite
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
  const [user,setUser] = useState(0);
  const [grade,setGrade] = useState('');
  const [entite,setEn] = useState('');


    return (
    <div> 
          <Button variant="success" onClick={handleShow}>Ajouter</Button>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un Enseignant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <Form>
              {isError && <Alert variant="danger">{error.data}</Alert>}
            <Form.Group className="mb-3" >
              <Form.Label>Id Utilisateur</Form.Label>
              <Form.Control type="number" placeholder="Entre l'id" value={user} onChange={(e) => setUser(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Grade</Form.Label>
                <Form.Select value={grade} onChange={(e) => setGrade(e.target.value)}>
                <option key="1" value="assistant">Assistant</option>
                <option key="2" value="docteur">Docteur</option>
                <option key="1" value="professeur">Professeur</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Entite </Form.Label>
              <Form.Control type="text" placeholder="Entre l'entite" value={entite} onChange={(e) => setEn(e.target.value)} />
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
                          <TextEn {...salles} /> 
                      ))}
                  </div>
            </div>
    </div>
  )
}

export default Enseignant
