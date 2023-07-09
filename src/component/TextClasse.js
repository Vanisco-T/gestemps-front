import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
function TextClasse({ id, name, capacite,code }) {
    function handleDelete() {
        axios.delete(`https://gestemp-app.onrender.com/api/salles/${id}/`, {
        })
        .then(function (response) {
          window.location.reload(false);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  return (
    <Card style={{ width: '18rem',margin:'5px' }}  >
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Code :{code}</Card.Subtitle>
        <Card.Text>
          Capacite : {capacite}
        </Card.Text>
        <Button 
        style={{marginLeft:"40px",marginRight:"20px",backgroundColor:"green"}}
        >Edit</Button>
        <Button variant="danger"
        style={{backgroundColor:"red"}}
        onClick={handleDelete}
        >Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default TextClasse;