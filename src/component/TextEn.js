import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState,useEffect } from 'react';
function TextEn({ id, user,grade ,entite }) {
    const [data,setData] = useState([]);
    function handleDelete(e) {
        axios.delete(`https://gestemp-app.onrender.com/api/teachers/${id}/`, {
        })
        .then(function (response) {
          window.location.reload(false);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  useEffect(() => {
    axios.get(`https://gestemp-app.onrender.com/api/teachers/${user}/`).then(({ data }) => setData(data));
    console.log(data);
}, []);
  return (
    <Card style={{ width: '18rem',margin:'5px' }}  >
      <Card.Body>
        <Card.Title>{user}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Code :{grade}</Card.Subtitle>
        <Card.Text>
        Entite : {entite}
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

export default TextEn;