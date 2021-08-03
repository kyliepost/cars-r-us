import { PaintDesign } from "./PaintDesign.js"
import { InteriorDesign } from "./InteriorDesign.js"
import { DealDesign } from "./DealDesign.js"
import { WheelDesign } from "./WheelDesign.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="options">
            <section class="paintColors choices">
                <h2>Paint Colors</h2>
                ${PaintDesign()}
            </section>
            <section class="interiorOptions choices">
                <h2>Interior</h2>
                ${InteriorDesign()}
            </section>
            <section class="dealOptions choices">
                <h2>Packages</h2>
                ${DealDesign()}
            </section>
            <section class="wheelOptions choices">
                <h2>Wheels</h2>
                ${WheelDesign()}
            </section>

            <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
        <h2>Custom Jewelry Orders</h2>
        ${Orders()}
    </article>

        </article>
    `
}