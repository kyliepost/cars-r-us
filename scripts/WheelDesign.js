import { getWheels } from "./database.js"

const wheels = getWheels()

export const WheelDesign = () => {
    let html = "<ul>"

    const listItems = wheels.map(wheel => {
        return `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.size} in. ${wheel.color}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html  
}