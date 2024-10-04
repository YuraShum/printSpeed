import React, { useEffect, useRef, useState } from 'react'
import { getRandomText } from '../../utils/getRandomText'
import './TextInputSection.scss'

const TextInputSection = () => {
    const randomtext = getRandomText()
    const [text, setText] = useState(randomtext)
    const [currentInputText, setCurrentInputText] = useState('')
    const [isBlurred, setIsBlurred] = useState(false)
    const textareaRef = useRef(null)

    const adjustTextareaHeight = () => {
        const element = document.querySelector('textarea')
        element.style.height = 'auto';
        element.style.height = paragraphElement().scrollHeight + 'px';
    };

    useEffect(() => {
        adjustTextareaHeight()
        const handleClick = () => {
            setIsBlurred(true)
        }
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [])

    

    const paragraphElement = () => {
        return document.querySelector('.text-input-chars')
    }

    const handleChangeInputText = (event) => {
        const input = event.target.value
        let correctText = ''
        for (let i = 0; i < input.length; i++) {
            if (input[i] === text[i]) {
                correctText += input[i]
            }
            else {
                break
            }
        }
        setCurrentInputText(correctText)
    }

    const handleResumeTyping = (event) => {
        event.stopPropagation();
        setIsBlurred(false)
        textareaRef.current.focus()
    }

    return (
        <div className='text-section'>
            {isBlurred && (
                <button 
                    onClick={handleResumeTyping}
                    className='resume-button'>
                    Продовжити друк
                </button>
            )}
            <div className={`text-input-section ${isBlurred ? 'blurred' : ''}`}>
                <p className='text-input-chars'>
                    {text.split('').map((char, index) => (
                        <span
                            key={index}
                            className={index < currentInputText.length ? 'correct' : ''}>
                            {char}
                        </span>
                    ))}
                </p>
                <textarea
                
                    ref={textareaRef}
                    value={currentInputText}
                    onChange={handleChangeInputText}
                    readOnly={isBlurred}
                ></textarea>
            </div>
        </div>
    )
}

export default TextInputSection