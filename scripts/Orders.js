import { getCustomOrders, getPaints, getDeals, getInteriors, getWheels } from "./database.js"


const buildOrderListItem = (order) => {
const paints = getPaints()
const deals = getDeals()
const interiors = getInteriors()
const wheels = getWheels()
const customOrders = getCustomOrders()



const foundPaint = paints.find(
    (paint) => {
        return paint.id === order.paintId
    }
)

const foundDeal = deals.find(
    (deal) => {
        return deal.id === order.dealId
    }
)

const foundInterior = interiors.find(
    (interior) => {
        return interior.id === order.interiorId
    }
)

const foundWheel = wheels.find(
    (wheel) => {
        return wheel.id === order.wheelId
    }
)

const totalCost = foundPaint.price + foundDeal.price + foundInterior.price + foundWheel.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}



export const Orders = () => {
  
    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}