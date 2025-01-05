import { saveMonthlySales } from "./transientState.js"


// fun that adds a click eventListener to DOM with peram of "click" and the handlePurchaseClick fun below, it returns the actual button in the form of a string template to show on the DOM  
export const purchaseCombo = () => {
    document.addEventListener("click", handlePurchaseComboClick)
    
return `<button id="purchase">Purchase Combo</button>`
    
}   

// fun that handles the clickEvent above that conditions if the clickEvent.target.id is exactly equal to the string"purchase the return the new object saveMonthlySales that is being stored in transientState, must invoke this var
const handlePurchaseComboClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        saveMonthlySales()
    }
}