import React from 'react'
import '../Styling/About.css'
import Lilly from '../Images/Lillian.jpeg'

export default class About extends React.Component{
    render(){
        return(
            <>
            {/* <h1>Lillian Elizabeth Bitner</h1> */}
            <div className='aboutCard'> 
                <img id='LillyImage' src={Lilly} alt="Lilly" /> 
                    <div className='containerAbout'> 
                    <h4>Colorado Native</h4>
                    <h4>16-year competitive soccer player</h4>
                    <h4>Molecular Biology background</h4>
                    <h4>Passion for healthcare, nutrition, fitness, </h4>
                </div>
            </div>
            </>
        )
    }
}