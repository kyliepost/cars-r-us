import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
            window.alert(event.target.value)
        }
    }
)

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