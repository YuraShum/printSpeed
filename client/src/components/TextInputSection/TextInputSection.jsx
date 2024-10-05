import React, { useEffect, useRef, useState } from 'react'
import { getRandomText } from '../../utils/getRandomText'
import './TextInputSection.scss'
import { IoIosRefresh } from "react-icons/io";
import ResultSpeed from '../ResultSpeed/ResultSpeed';
import { TIME_LEFT } from '../../data/config';

const TextInputSection = () => {
    const randomtext = getRandomText()
    const [text, setText] = useState(randomtext)
    const [currentInputText, setCurrentInputText] = useState('')
    const [isBlurred, setIsBlurred] = useState(false)
    const textareaRef = useRef(null)
    const [wrongCounter, setWrongCounter] = useState(0);
    //!! пр розширені функціоналу можна дозволи токистувачу вибирати тривалість
    const [timeLeft, setTimeLeft] = useState(TIME_LEFT)

    useEffect(() => {
        if (!isBlurred && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevValue => prevValue - 1)
            }, 1000)

            return () => clearInterval(timer)
        }
    }, [timeLeft, isBlurred])
    console.log(timeLeft)

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus()
        }
    }, [text])

    const adjustTextareaHeight = () => {
        const element = document.querySelector('textarea')
        element.style.height = 'auto';
        element.style.height = paragraphElement().scrollHeight + 'px';
    };

    useEffect(() => {
        adjustTextareaHeight()

        const handleClick = (event) => {
            if(!event.target.closest('.timer button')){
                setIsBlurred(true)
            }
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
        const input = event.target.value;
        let correctText = '';
        if (event.nativeEvent.inputType === 'deleteContentBackward') {
            return;
        }
        for (let i = 0; i < input.length; i++) {
            if (input[i] === text[i]) {
                correctText += input[i];
            } else {
                setWrongCounter(prevValue => prevValue + 1)
                break
            }
        }
        setCurrentInputText(correctText);
    };

    const handleResumeTyping = (event) => {
        event.stopPropagation();
        setIsBlurred(false)
        textareaRef.current.focus()
    }

    const handleRestartTyping = (event) => {
        event.stopPropagation()
        setIsBlurred(false)
        setTimeLeft(TIME_LEFT)
        setText(getRandomText())
        setWrongCounter(0)
        setCurrentInputText('')
    }

    return (
        <>
            {timeLeft > 0 ?
                <div className='text-section'>
                    {isBlurred && (
                        <button
                            onClick={handleResumeTyping}
                            className='resume-button'>
                            Продовжити друк
                        </button>
                    )}
                    {/** input text section */}
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
                    {/** timer section */}
                    <div className='timer'>
                        <button
                            onClick={handleRestartTyping}>
                            <IoIosRefresh style={{width: '20px',height: '20px'}}/>
                        </button>
                        <p>{timeLeft} сек</p>
                    </div>
                </div>
                :
                <ResultSpeed numberCharactersEntered={currentInputText.length} numberOfWrongCharacters={wrongCounter} restartTyping={handleRestartTyping} />}
        </>
    )
}

export default TextInputSection