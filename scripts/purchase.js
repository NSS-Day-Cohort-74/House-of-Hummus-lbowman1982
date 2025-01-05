// fun is async bc it needs the info from a expanded fetch call to the API that matches the primary key ID from the veg, sides and entree arrays of objects in the database to the foreign keys of each of the objects in the purchases array that were newly created and POSTed to the database, appropriately to find the corresponding ID in order to target the price of each. and then iterated thru with .map for every one purchase object of purchases array, tacoVar purchaseHTML is assigned to the object and another tacoVar represents the total price when added together, the purchase.veg.price and entree and side parseInt because these are Int and**** the returned object from the .map is in a string template showing exactly what is to be shown on the DOM with the interpolated value of purchase.id which will just be the 1, 2, 3, id added to each new object created and the value of totalPrice that came from the above .map iteration this purchase fun returns the purchaseHTML so when invoked it will show the string template from the .map return  

export const purchase = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=vegetable&_expand=entree&_expand=side")
    const purchases = await response.json()
    
    let totalPrice = 0
    let  purchaseHTML = purchases.map(
        (purchase) => {

            totalPrice += parseInt(purchase.vegetable.price)
                + parseInt(purchase.entree.price)
                + parseInt(purchase.side.price)
            
                return `Receipt #${purchase.id}: ${totalPrice}`
            
        })
    return purchaseHTML
}










