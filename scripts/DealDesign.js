import { getDeals } from "./database.js"

const deals = getDeals()

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