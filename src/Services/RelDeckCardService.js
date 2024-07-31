const BASE_URL = "http://localhost:8080/api/rel"

const requestObj = {
    method:"POST",
    body: "",
    headers: {
        "Content-Type": "application/json",
    }
}

const getCardsByDeckId = async (deckId) => {
    const url = `${BASE_URL}/${deckId}`

    const request = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors' 
      }

    return fetch(url, request)
}


export default {getCardsByDeckId}