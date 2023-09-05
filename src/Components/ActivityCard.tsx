import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ActivityCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Activity Title</Card.Title>
        <Card.Text>
          members
        </Card.Text>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
  );
}