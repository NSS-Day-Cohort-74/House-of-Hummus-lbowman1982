

import { setEntreeChoice } from "./transientState.js"


export const entreeChoice = async () => {
    let entreeRadioButtonHTML = ""

    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()
    
    document.addEventListener("change", handleEntreeChoiceChange)
    for (const entree of entrees) {
       
        entreeRadioButtonHTML += `
        <input type='radio'
        name='entreeChoice'
        value='${entree.id}'/>
        ${entree.name}
        `
            
        }
     

    return entreeRadioButtonHTML
}

const handleEntreeChoiceChange = (changeEvent) => {
    if (changeEvent.target.name === "entreeChoice") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setEntreeChoice(convertedToInteger)
    }
}