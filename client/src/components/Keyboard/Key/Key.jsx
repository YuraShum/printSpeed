import React, { useEffect } from 'react'

const Key = ({ config, rowIndex, keyPressed }) => {

  const uniqueChar = rowIndex < 1 ?
    Array.from(new Set([config.keyNameEn, config.symbolEnUpper, config.symbolUkUpper])) :
    Array.from(new Set(getUniqueCharWithoutUpperCase([config.keyNameEn, config.symbolEnUpper, config.symbolUkUpper])))

  const isPressedKey = uniqueChar.includes(keyPressed.toUpperCase());

  function getUniqueCharWithoutUpperCase(arayChar) {
    return arayChar.map(char => {
      if (/[a-zA-Zа-яА-Я]/.test(char)) {
        return char.toUpperCase()
      }
      return char;
    })
  }

  return (
    <div
      className='key'
      style={{ color: config.darkerColor, backgroundColor: config.backgroundColor, opacity: isPressedKey ? 0.5 : 1 }}>
      {uniqueChar.map((char, index) => (
        <p key={char} className={char === 'SPACE' ? '' : `key-p-${index}`}>{char}</p>
      ))}
    </div>
  )
}

export default Key