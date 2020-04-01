import React from 'react'
import '../Styling/About.css'
import Lilly from '../Images/Lillian.jpeg'

export default class About extends React.Component{
    render(){
        return(
            <>
            {/* <h1>Lillian Elizabeth Bitner</h1> */}
                <div className='aboutCard'> 
                    <div className='containerAbout'> 
                        <h1>About Lillian</h1>
                        <ul className='aboutList'>
                            <li id='list'>Colorado Native</li>
                            <li id='list'>Passion for healthcare, nutrition, fitness, and the environment</li>
                            <li id='list'>16-year competitive soccer player</li>
                            <li id='list'>Sunshine enthusiast</li>
                            <li id='list'>Obsessive Hall n'Oats Fan</li>
                        </ul>
                    </div>
                    <img id='LillyImage' src={Lilly} alt="Lilly" /> 
                </div>
                <div className='timeline'>
                    <h1>Timeline</h1>
                    <h3 className='timelineTitles'> 2017 Graduated Yale University with a B.S in Molecular Biology - New Haven, CT</h3>
                        <ul className="yaleDescription"> 
                            <li id='list'>Played NCAA Division 1 Soccer at Yale</li>
                            <li id='list'>Worked as Chief Assistant to the Head of College at Yale</li>
                            <li id='list'>Worked as a Research Fellow and Research Assistant at the Yale School of Medicine</li>
                            <li id='list'>Worked as a DJ at athletic events - making customized warmup tapes</li>
                            <li id='list'>Awarded two prizes at graduation for my leadership in the community - name is carved into Yale College</li>
                            <li id='list'>But most of all, made a lot of lifelong friendships</li>
                        </ul>
                    <h3 className='timelineTitles'>2017-2019 Worked as a Research Technician at Memorial Sloan Kettering Cancer Center - New York, NY</h3>
                        <ul className="yaleDescription">
                            <li id='list'>Became an 11-time published scientific author, for collaborative work focused on rare blood cancers</li>
                            <li id='list'>Volunteered at the NewYork-Presbyterian Oncology Unit</li>
                            <li id='list'>Survived living in New York City as a recent graduate</li>
                        </ul>
                    <h3 className='timelineTitles'>2020 Began a Software Engineering bootcamp at the Flatiron School - Denver, CO</h3>
                        <ul className="yaleDescription">
                            <li id='list'>Learned Ruby on Rails, Node, JavaScript, React, CSS, HTML</li>
                            <li id='list'>My world brightened up with the exciting, creative opprotunites in tech</li>
                            <li id='list'>Also made fostered quality friendships</li>
                        </ul>
                </div> 
            </>
        )
    }
}