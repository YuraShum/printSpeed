import React from 'react'

const Key = ({ config, rowIndex }) => {

  const uniqueChar = rowIndex < 1 ?
    Array.from(new Set([config.keyNameEn, config.symbolEnUpper, config.symbolUkUpper])) :
    Array.from(new Set(getUniqueCharWithoutUpperCase([config.keyNameEn, config.symbolEnUpper, config.symbolUkUpper])))

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
      style={{ backgroundColor: config.color }}>
      {uniqueChar.map((char, index) => (
        <p key={char} className={char === 'SPACE' ? '' :`key-p-${index}`}>{char}</p>
      ))}
    </div>
  )
}

export default Key