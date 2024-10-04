import React from 'react'
import { BsFillLightningChargeFill } from "react-icons/bs";
import { SiTarget } from "react-icons/si";
import { IoIosRefresh } from "react-icons/io";
import './ResultSpeed.scss'
//!! додати функціонал перезавантаження (створити на верхньому рівні функцію яка зкидуватиме таймер та оновлюватиме тест та інші значення)

const ResultSpeed = ({ numberCharactersEntered, numberOfWrongCharacters }) => {

    function calculatePercentage(total, part) {
        if (total > 0) {
            const percentage = (part / total) * 100;
            return percentage.toFixed(2);
        }
        return 100

    }
    const total = numberCharactersEntered + numberOfWrongCharacters
    const percentageOfCorrectSymbols = calculatePercentage(total, numberCharactersEntered)
    return (
        <div className='result'>
            <div className='result-info'>
                {/** speed section */}
                <div className='result-card orange'>
                    <h4>
                        <BsFillLightningChargeFill />
                        <span>Швидкість</span>
                    </h4>
                    <p><span>{numberCharactersEntered}</span> зн./хв</p>
                </div>
                {/** precision section */}
                <div className='result-card violet'>
                    <h4>
                        <SiTarget />
                        <span>Точність</span>
                    </h4>
                    <p><span>{percentageOfCorrectSymbols}</span> %</p>
                </div>
            </div>
            {/** start again section */}
            <button>
                <IoIosRefresh style={{ width: '30px', height: "30px" }} />
            </button>
        </div>
    )
}

export default ResultSpeed