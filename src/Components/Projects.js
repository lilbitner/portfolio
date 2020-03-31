import React from 'react'
import '../Styling/Projects.css'

export default class Projects extends React.Component{
    render() {
        return(
            <>
            <h1>Projects</h1>
            <div className='projectsCard'>
                <div className='Mod3'> 
                    <h3>Euphoria: Workout App</h3>
                </div>
                <div className='Mod4'>
                    <h3>Judith's Barley Bags</h3>
                </div>
                <div className='Mod5'>
                    <h3>RecipeCollector</h3>
                </div>
                
            </div>
            </>
        )
    }
}