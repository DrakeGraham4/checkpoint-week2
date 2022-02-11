let clickUpgrades = {
    arrows: {
        price: 10,
        quantity: 0,
        multiplier: 1
    },

    lovebombs: {
        price: 10,
        quantity: 0,
        multiplier: 10
    }
};

let automaticHearts = {
    cupids: {
        price: 10,
        quantity: 0,
        multiplier: 20
    },

    sirens: {
        price: 10,
        quantity: 0,
        multiplier: 50
    }

}




let hearts = 0;

function mineHearts() {
    console.log('hearts', hearts);
    hearts++
    for (const key in clickUpgrades) {
        hearts += clickUpgrades[key].multiplier * clickUpgrades[key].quantity
    }
    update()
}

function update() {
    document.getElementById('hearts').innerText = hearts.toString()
    document.getElementById('arrows').innerText = clickUpgrades.arrows.quantity.toString()
    document.getElementById('lovebombs').innerText = clickUpgrades.lovebombs.quantity.toString()
    document.getElementById('cupids').innerText = automaticHearts.cupids.quantity.toString()
    document.getElementById('sirens').innerText = automaticHearts.sirens.quantity.toString()
}

function buyArrows(){
    if (hearts >= clickUpgrades.arrows.price) {
        hearts -= clickUpgrades.arrows.price
        clickUpgrades.arrows.quantity++
        clickUpgrades.arrows.price *= 2
        
        update()
}
}

function buyLoveBombs(){
    if (hearts >= clickUpgrades.lovebombs.price) {
        hearts -= clickUpgrades.lovebombs.price
        clickUpgrades.lovebombs.quantity++
        clickUpgrades.lovebombs.price *= 2
        
        update()
}
}

function buySirens() {
    if (hearts >= automaticHearts.sirens.price) {
        hearts -= automaticHearts.sirens.price
        automaticHearts.sirens.quantity++
        automaticHearts.sirens.price *= 2
        
        update()
    }

}


function buyCupids() {
    if (hearts >= automaticHearts.cupids.price) {
        hearts -= automaticHearts.cupids.price
        automaticHearts.cupids.quantity++
        automaticHearts.cupids.price *= 2
        
        update()
    }

}

function collectAutomaticHearts() {
    
    for (const key in automaticHearts) {
        hearts += automaticHearts[key].multiplier * automaticHearts[key].quantity
    }
    update()
}


function startInterval() {
    setInterval(collectAutomaticHearts, 4000)
}

startInterval()