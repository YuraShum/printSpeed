import { typingTexts } from "../data/textConfig"

export const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * typingTexts.length)
    return typingTexts[randomIndex]
}