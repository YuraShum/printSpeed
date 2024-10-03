import React from 'react'
// потрібен клас пальця, клас руки(Права чи ліва та колір)

const Finger = ({ name, color, rotate}) => {
    return (
        <div>
            <div className={`finger ${name} ${rotate}`}>
                <div 
                className='finger-color' 
                style={{ backgroundColor: color }}></div>
            </div>
        </div>
    )
}

export default Finger