import React from 'react'
import { keyboardLayout } from '../../data/keyboardConfig'
import Key from './Key/Key'
import './Keyboard.scss'


const Keyboard = () => {
    return (
        <>
            {/* keyboard container */}
            <div className='keyboard-conteiner'>
                {keyboardLayout.map((keyboardRow, index) => {
                    return (
                        <div className='keyboard-row' key={index}>
                            {keyboardRow.map(key_object => (
                                <Key key={key_object.keyNameUk} config={key_object} rowIndex= {index}/>
                            ))}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Keyboard