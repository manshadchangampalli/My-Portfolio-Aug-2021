import React from 'react'

function Project(props) {
    
    
    return (

    <div  className={props.class+ " project" }>
            <div className="before">
                <h1>CURTAIN HOUSE</h1>
                <ul>
                    <li >Its an simple website used Reactjs</li>
                    <li>Design - FIGMA</li>
                    <li className="clr">
                        <p>Used Colors</p>
                        <div style={{"background":props.clr1}} ></div>
                        <div style={{"background":props.clr2}} ></div>
                        <div style={{"background":props.clr4}} ></div>
                        <div style={{"background":props.clr3}} ></div>
                    </li>
                </ul>
                {
                    props.design?"": <div className="buttons">
                    <a  href={props.sc}>SOURCE CODE</a>
                <a className="view" href={props.view}>VIEW</a>
                </div>
                }
               
                
            </div>
        </div>
    )
}

export default Project
