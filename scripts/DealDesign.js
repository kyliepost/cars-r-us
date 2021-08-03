import { getDeals, setDeal } from "./database.js"

const deals = getDeals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "deal") {
            setDeal(parseInt(event.target.value))
        }
    }
)


export const DealDesign = () => {
    let html = "<ul>"

    const listItems = deals.map(deal => {
        return `<li>
            <input type="radio" name="deal" value="${deal.id}" /> ${deal.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html   
}