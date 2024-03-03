import Card from 'react-bootstrap/Card';
import Tags from './Tags'

const MyCard = ({img, name, desc, raza, bgColor}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Tags raza={raza} Bg={bgColor} />
      </Card.Body>
    </Card>
  );
}

export default MyCard;