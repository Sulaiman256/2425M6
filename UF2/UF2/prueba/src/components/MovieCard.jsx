import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// Componente MovieCard que recibe las propiedades de una película
const MovieCard = ({ title, description, image, method}) => {
  return (
    <Card style={{ width: '18rem' }} className="mb-4">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={method}>
          Seleccionar pelicula
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
