import { entreeChoice } from "./Entrees.js"

import { purchase } from "./purchase.js"
import { purchaseCombo  } from "./purchaseCombo.js"
import { sideChoice } from "./sides.js"
import { vegetableChoice } from "./Vegetables.js"


// foodTruck is async bc it has the variables that are fetching their data from the API 
export const foodTruck = async () => {
    // taco variable set equal to the function that contains the data of the selected vegetable,from the vegetable mod  
    const vegetableHTML = await vegetableChoice()
    // 
    const entreeRadioButtonHTML = await entreeChoice()
    // 
    const sideRadioButtonHTML = await sideChoice()
    // 
    const tacoPurchaseCombo = purchaseCombo()
    // 
    const totalPurchasePrice = await purchase()
    
    // this is the inner HTML that foodTruck returns, which is invoked in main, it has articles and sections w a class so this HTML can be targeted for CSS changes **********
    return `
    <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
    </header>
       
<article>
        <section class="vegetableOptions">
            <h2>Vegetables</h2>
                ${vegetableHTML}
        </section>
    
        <section class="entreeOptions">
            <h2>Base Dishes</h2>
                ${entreeRadioButtonHTML}
        </section>
    
        <section class+"sideOptions">
            <h2>Sides</h2>
                ${sideRadioButtonHTML}
        </section>
    
    <article>
        <section class="purchaseCombo">
                ${tacoPurchaseCombo}
        </section>
    </article>
    
    <article>
        <section class="purchasedPrice">
        <h2>Monthly Sales</h2>
                ${totalPurchasePrice}
        </section>
    </article>
        
</article>
`
    
}

