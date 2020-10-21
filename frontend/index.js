const baseURL = 'http://localhost:3001'

fetch(baseURL)
    .then(parseJSON)
    .then(result => console.log())

function parseJSON(response) {
    return response.json()
}