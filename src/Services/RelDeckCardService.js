const BASE_URL = "http://localhost:8080/api/rel"

const requestObj = {
    method:"POST",
    body: "",
    headers: {
        "Content-Type": "application/json",
    },
  mode: 'cors',
}

const getCardsByDeckId = async (deckId) => {
    const url = `${BASE_URL}/justid/${deckId}`

    const request = {
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors' 
      }

    return fetch(url, request)
}

const saveRelCardDeck = (cardId, deckId) => {
  const url = `${BASE_URL}`
  
  const body = {
    deckId: deckId,
    cardId: cardId
  }

  const request = requestObj;

  request.body = JSON.stringify(body);

  console.log("Fazendo o request do rel com o body: ",request)

  return fetch (url, request)
}

const saveAllCardsRel = async (listOfDtos) => {
  const url = `${BASE_URL}/saverels`;

  const request = requestObj;

  request.body = JSON.stringify(listOfDtos);


  console.log("Fazendo o request do rels com o body: ",request)

  return fetch (url, request);
}

const minusOneQtd = async (id) => {
  const url = `${BASE_URL}/removeoneqtd/${id}`;
  const request = {...requestObj, method : "PATCH"};
  
  return fetch (url, request);
}


export default {getCardsByDeckId, saveRelCardDeck, saveAllCardsRel, minusOneQtd}