import React,{useState,useEffect} from 'react'
import axios from 'axios';
import TextClasse from '../../component/TextClasse';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function Classe() {
     const [salle,setSalle] =useState([]);
     useEffect(() => {
      axios.get("https://gestemp-app.onrender.com/api/classes/").then(({ data }) => setSalle(data));
      getFiliere()
      getNiveau()
  }, []);

    function getFiliere(){
        axios.get("https://gestemp-app.onrender.com/api/filieres/").then(({ data }) => setData(data));
    }
    function getNiveau(){
        axios.get("https://gestemp-app.onrender.com/api/niveaux/").then(({ data }) => setData1(data));
    }

  //The sign in function to handle the form
    function handleSalle(e) {
        e.preventDefault();
        axios.post('https://gestemp-app.onrender.com/api/classes/', {
          name:designation,
          capacite,
          code,
          filiere,
          niveau
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
  const [filiere,setFi] = useState('');
  const [niveau,setNi] = useState('');
  const [data,setData] = useState([]);
  const [data1,setData1] = useState([]);

    return (
    <div> 
          <Button variant="success" onClick={handleShow}>Ajouter</Button>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une classe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <Form>
           <Form.Group className="mb-3" >
              <Form.Label>Nom </Form.Label>
              <Form.Control type="text" placeholder="Entre le Nom" value={designation} onChange={(e) => setDesi(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Code</Form.Label>
              <Form.Control type="text" placeholder="Entre le code" value={code} onChange={(e) => setCo(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Capacite</Form.Label>
              <Form.Control type="number" placeholder="Entre la capacite" value={capacite} onChange={(e) => setCapa(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Selectionner la Filiere </Form.Label>
                    <Form.Select value={filiere} onChange={(e) => setFi(e.target.value)}>
                        {data.map(item => {
                            return (<option key={item.id} value={item.id}>{item.titre}</option>);
                        })}
                    </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label> Selectionner le Niveau </Form.Label>
              <Form.Select value={niveau} onChange={(e) => setNi(e.target.value)}>
                        {data1.map(item => {
                            return (<option key={item.id} value={item.id}>{item.titre}</option>);
                        })}
                    </Form.Select>
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
                          <TextClasse {...salles} /> 
                      ))}
                  </div>
            </div>
    </div>
  )
}

export default Classe
