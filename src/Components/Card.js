import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export default class CardClass extends React.Component{
    render(){
        return( 
        <Card style={{ width: '18rem' }}>
            {/* <ListGroup variant="flush">
                <ListGroup.Item>Colorado Native</ListGroup.Item>
                <ListGroup.Item>Passion for healthcare, nutrition, fitness, and the environment</ListGroup.Item>
                <ListGroup.Item>16-year competitive soccer player</ListGroup.Item>
                <ListGroup.Item>Sunshine enthusiast</ListGroup.Item>
                <ListGroup.Item>Obsessive Hall n'Oats Fan</ListGroup.Item>
            </ListGroup> */}
        </Card>
        )
    }
}