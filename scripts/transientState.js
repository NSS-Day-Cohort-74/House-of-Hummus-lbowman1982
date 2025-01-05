

// var set equal to an object with the properties, now foreign keys,  of the primary keys in each of the objects in each array in the database, in order to create a new array of objects, when POSTed and turned into permanentState a primary key 1, 2, 3 will be auto added to each of the objects 

const transientState = {
    "vegetableId": 0,
    "entreeId": 0,
    "sideId": 0
    
}



export const setEntreeChoice = (entreeChoice) => {
    transientState.entreeId = entreeChoice
    
   
}



export const setSideChoice = (sideChoice) => {
    transientState.sideId = sideChoice 

}



// this fun creates an object containing the choice of veg selected with the radio button, signaled by the change event, that object has the value of the property vegId named and is now stored in the above var transientState 
export const setVegetableChoice = (vegetableChoice) => {
    transientState.vegetableId = vegetableChoice
    

}




// this fun is async bc it contains a fetch req made to the API , saveMonthlySales returns a new object stored in var postOptions, this is a POST that contains the object stored in transientState var  JSON.stringify which converts an the values of the javascript object transientState which has properties of all int, into a JSON string, then a fetch req is made to the API to get the data that was just posted and added to the purchases array in database.  dispatchEvent is added to to dispatch*****the info stored in transientState this is a customEvent w peram of the purchaseComboButton which is in the purchaseCombo mod  
export const saveMonthlySales = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

     const response = await fetch("http://localhost:8088/purchases", postOptions)
    const customEvent = new CustomEvent("purchaseComboButton")
    document.dispatchEvent(customEvent)
}