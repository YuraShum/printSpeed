import React, { useEffect, useState } from 'react'
import { keyboardLayout } from '../../data/keyboardConfig'
import Key from './Key/Key'
import './Keyboard.scss'


const Keyboard = () => {
    const [currentKeyDown, setCurrentKeyDown] = useState(null)

    useEffect(() => {
        const handleKeyDown = (event) => {
            setCurrentKeyDown(event.key)
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])
    console.log(currentKeyDown)

    return (
        <>
            {/* keyboard container */}
            <div className='keyboard-conteiner'>
                {keyboardLayout.map((keyboardRow, index) => {
                    return (
                        <div className='keyboard-row' key={index}>
                            {keyboardRow.map(key_object => (
                                <Key
                                    key={key_object.keyNameUk}
                                    config={key_object}
                                    rowIndex={index}
                                    keyPressed={currentKeyDown} />
                            ))}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Keyboard