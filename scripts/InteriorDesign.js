import { getInteriors } from "./database.js"

const interiors = getInteriors()

export const InteriorDesign = () => {
    let html = "<ul>"

    const listItems = interiors.map(interior => {
        return `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html  
}