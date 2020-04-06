import React from 'react'
import Nav from './Nav'
import Accordion from 'react-bootstrap/Accordion'
import About from './About'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Lilly from '../Images/Lillian.jpeg'
 
 export default class AccordionClass extends React.Component{
    
    about = () => {
        return <Card />
    }
    
    
    render(){
         return(
        
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        About Lillian Bitner 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='aboutCard'>
                            <li>Colorado Native</li>
                            <li>Passion for healthcare, nutrition, fitness, and the environment</li>
                            <li>16-year competitive soccer player</li>
                            <li>Sunshine enthusiast</li>
                            <li>Obsessive Hall n'Oats Fan</li>
                            <div className='image'> 
                            <Card.Img alt='Lillian' src={Lilly} />
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

         )
     }
 }
 
 
//  <Accordion defaultActiveKey="0">

//         <Accordion.Toggle as={Nav} eventKey="0">Hello</Accordion.Toggle>
//         <Accordion.Collapse as={Nav} eventKey="0">Hello</Accordion.Collapse>
  
//     </Accordion>