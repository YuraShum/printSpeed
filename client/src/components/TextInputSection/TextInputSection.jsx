import React, { useState } from 'react'
import { getRandomText } from '../../utils/getRandomText'
import './TextInputSection.scss'

const TextInputSection = () => {
    const randomtext = getRandomText()
    const [text, setText] = useState(randomtext)
    const [currentInputText, setCurrentInputText] = useState('')
    const [FilledText, setFilledText] = useState()

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
    console.log(text)

    return (
        <div className='text-section'>
            <p>
                {text.split('').map((char, index) => (
                    <span
                        key={index}
                        className={index < currentInputText.length ? 'correct' : ''}>
                        {char}
                    </span>
                ))}
            </p>
            <textarea
                value={currentInputText}
                onChange={handleChangeInputText}>
            </textarea>
        </div>
    )
}

export default TextInputSection