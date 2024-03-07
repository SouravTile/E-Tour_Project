import Card from 'react-bootstrap/Card';



function CardComp({ title,imgsrc }) {


  return (



    <Card style={ { width: '18rem',  align:'center'}}>
       
     <Card.Body>
     <Card.Img variant="top" src={"/"+imgsrc}  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
     <Card.Title>{title}</Card.Title>
     
     
      </Card.Body>
    </Card>
  );
}

export default CardComp;