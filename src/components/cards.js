import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MemeCard from './memeCard';

function Cards({memes}) {
    console.log(memes);
  return (
    <Container fluid="md" className='mx-auto'>
      <Row className="justify-content-center mx-auto mt-4">
        {memes.map(meme => {
            return <Col className='mx-auto mb-3' key={meme.id}><MemeCard memes={meme}/></Col>
        })}
      </Row>
    </Container>
  );
}

export default Cards;