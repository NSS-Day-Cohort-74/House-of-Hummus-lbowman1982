import { setVegetableChoice } from "./transientState.js"



//async fun that fetches data from API 
// add eventListener to DOM peram= "change" and fun to handle change 
export const vegetableChoice = async () => {
    document.addEventListener("change", handleVegetableChoiceChange)
     
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()   
    // tacoVar = empty string
    let vegetableHTML = ""
    // fun to iterate each vegetable object using .map w peram of return w its own peram of singular vegetable
    const vegetableChoiceDivStringArray = vegetables.map(
        (vegetable) => {
            
      // return a string template, in a div, <input radio buttons with name of vegetable and value interp veg.id endInput/> input is innerHTML and inside div is what will actually show on DOM veg.type
            return `
            <div>
            <input type='radio'
            name='vegetable'
            value='${vegetable.id}'/>
            ${vegetable.type}
            </div>
            `
            
        })
        // now the empty string, tacoVar is added and set equal to the var from the .map fun.join("") to push the data first into and string and then into an array
        vegetableHTML += vegetableChoiceDivStringArray.join("")
        
        // return this array of iterated objects, each one as a radio button 
        return vegetableHTML
    }
    
    // async fun bc the info needed came from an API fetch,  fun handles the change of selected veg radio buttons, w peram of changeEvent  conditioning that if the changeEvent.target.name is exactly equal to the string "veg" return the object stored in setVegetableChoice imported from transientState, set to var conToInt then parseInt w peram(changeEvent.target.value, which is the veg.id from the radio button string template...because the actual data sent to the DOM had the value of vegId which is an int, this is the data that is sent to transientState as the int veg.id and stored in setVegChoice, creating a new object to be stored there until the DOM hears another change, it will clear that data from the state and will create another object, and so on, the transientState mod will specify which and how any of that data will be turned into permanentState   )
const handleVegetableChoiceChange = async (changeEvent) => {
    if (changeEvent.target.name === "vegetable") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setVegetableChoice(convertedToInteger)
    }
}

