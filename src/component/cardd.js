import React from 'react';
import {Card} from 'react-bootstrap'
const Cardd = (props) => {
    return (
        <>
          <div>
          <Card style={{ width: '18rem' , marginBottom: "15px"}}>
            <Card.Img className="img-fluid"  src={props.img} />
            <Card.Body>
                <Card.Title>{props.CardTitle}</Card.Title>
                <Card.Text>
                      {props.CardText}
                </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </>
    )
}

export default Cardd
