
import { foodTruck } from "./foodTruck.js"


// use a query selector to get a reference to container
const mainContainer = document.querySelector("#container")
// store the HTML form all other modules here  
const renderAllHTML = async () => {
    // modify the container and inject all HTML into it which is stored in foodTruck(), must invoke here
//    must be async and await bc foodTruck is awaiting the fetch calls made to the API in all other modules, fetching data from JSON 
    mainContainer.innerHTML = await foodTruck()
}

// add eventListener to the DOM with perams ("purchaseComboButton" and renderAllHTML) saying if the purchaseCombo button is clicked then update the renderAllHTML and invoke
document.addEventListener("purchaseComboButton", event => {renderAllHTML()} ) 

// invoke 
renderAllHTML()

    
 











