const database = {
    orderBuilder: {},
    paints: [ {
        id: 1,
        color: "Silver",
        price: 200.00
    },
    {
        id: 2,
        color: "Midnight Blue",
        price: 350.00
    },
    {
        id: 3,
        color: "Firebrick Red",
        price: 500.00
    },
    {
        id: 4,
        color: "Spring Green",
        price: 300.00
    }],
    interiors: [{
        id: 1,
        material: "Fabric",
        color: "Beige",
        price: 300.00
    },
    {
        id: 2,
        material: "Fabric",
        color: "Charcoal",
        price: 375.00
    },
    {
        id: 3,
        material: "Leather",
        color: "White",
        price: 650.00
    },
    {
        id: 4,
        material: "Leather",
        color: "Black",
        price: 500.00
    }],
    deals: [{
        id: 1,
        name: "Basic",
        price: 900.00
    },
    {
        id: 2,
        name: "Navigation",
        price: 100.00
    },
    {
        id: 3,
        name: "Visibility",
        price: 1500.00
    },
    {
        id: 4,
        name: "Ultra",
        price: 2500.00
    }],
    wheels: [{
        id: 1,
        size: 17,
        color: "Silver",
        price: 1000.00
    },
    {
        id: 2,
        size: 17,
        color: "Black",
        price:1500.00
    },
    {
        id: 3,
        size: 18,
        color: "Silver",
        price: 1000.00
    },
    {
        id: 4,
        size: 18,
        color: "Black",
        price: 1500.00
    }],
    customOrders: [{
        id: 1,
        paintId: 2,
        interiorId: 4,
        dealId: 3,
        wheelId: 4,
        timestamp: 1614659931693
    }]
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getDeals = () => {
    return database.deals.map(deal => ({...deal}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getCustomOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}
export const setWheel = (wheelId) => {
    database.orderBuilder.wheelId = wheelId
}
export const setPaint = (paintId) => {
    database.orderBuilder.paintId = paintId
}
export const setInterior = (interiorId) => {
    database.orderBuilder.interiorId = interiorId
}
export const setDeal = (dealId) => {
    database.orderBuilder.dealId = dealId
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}