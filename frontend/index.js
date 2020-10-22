const baseURL = 'http://localhost:3000'

getDrinkList()
getDrinkKinds()

function getDrinkList(){

  const drinks = ["beer","wine","liquor","mixer"]
  drinks.forEach(drink => {
    getDrinks(drink)
  })

  function getDrinks(drink){
    const currentDrink = drink
    fetch(baseURL+`/${drink}s`)
      .then(response => parseJSON(response))
      .then(drinks => {
        const drinksList = document.querySelector(`#${drink}s`)
        drinks.forEach( drink => {
          const li = document.createElement("li")
          const kind = (drink.kind) ? `${drink.kind}` : ""
          li.innerHTML = `<b>${drink.name}</b>` +" <br /> "+`${kind} - requested by: ${drink.requested}`
          drinksList.appendChild(li)
        })
      })
  }
}

function getDrinkKinds(){
  const existingKinds = []

  const drinks = ["wine","liquor"]
  drinks.forEach(drink => {
    const dropdown = document.querySelector(`#${drink}s-kinds`)
    fetch(baseURL+`/${drink}s`)
      .then(response => parseJSON(response))
      .then(drinks => {
        drinks.forEach(drink => {
          if(!existingKinds.includes(drink.kind)){
            const option = document.createElement("option")
            option.textContent = drink.kind
            option.value = drink.kind
            existingKinds.push(drink.kind)
            dropdown.appendChild(option)
          }
        })
      })
  })
}

function parseJSON(response) {
    return response.json()
}
