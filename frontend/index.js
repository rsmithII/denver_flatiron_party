const baseURL = 'http://localhost:3000'
const params = new URLSearchParams(window.location.search)

getDrinkList()

function getDrinkList(){

  drinks = ["beer","wine","liquor","mixer"]
  drinks.forEach(drink => {
    getDrinks(drink)
  })

  function getDrinks(drink){
    const currentDrink = drink
    const drinks = fetch(baseURL+`/${drink}s`)
      .then(response => parseJSON(response))
      .then(drinks => {
        const drinksList = document.querySelector(`#${drink}s`)
        drinks.forEach( drink => {
          const li = document.createElement("li")
          li.textContent = `${drink.name}`
          drinksList.appendChild(li)
        })
      })
  }
}

function parseJSON(response) {
    return response.json()
}
