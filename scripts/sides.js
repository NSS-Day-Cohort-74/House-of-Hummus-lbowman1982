// will need a component function that produces HTML for two radio buttons for "yes" and "no"

import { setSideChoice } from "./transientState.js"


export const sideChoice = async () => {
   
        const response = await fetch("http://localhost:8088/sides")
        
        const sides = await response.json()
        
    document.addEventListener("change", handleSideChoiceChange)
        
    let sideRadioButtonHTML = ""
        for (const side of sides) {
            sideRadioButtonHTML += `
            <input type='radio'
            name='sideChoice'
            value='${side.id}'/>
            ${side.title}
            `
                
            }
         
    
        return sideRadioButtonHTML
    }

const handleSideChoiceChange = (changeEvent) => {
    if (changeEvent.target.name === "sideChoice") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSideChoice(convertedToInteger)
    }
}
                