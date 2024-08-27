import getToken from "./GetToken"
const BASE_URL = "http://localhost:8080/api/rel"

const getRequestWithToken = () => {
  const acessToken = getToken();
  return {
      method:"GET",
      headers: {
          'Authorization': `Bearer ${acessToken}`,
          'Content-Type': 'application/json'
      }
  }
}

const getCardsByDeckId = async (deckId) => {
    const url = `${BASE_URL}/justid/${deckId}`

    const request = getRequestWithToken();

    return fetch(url, request)
}

const saveRelCardDeck = (cardId, deckId) => {
  const url = `${BASE_URL}`
  
  const body = {
    deckId: deckId,
    cardId: cardId
  };

  const request = {...getRequestWithToken(), method: "POST", body: JSON.stringify(body) }

  console.log("Fazendo o request do rel com o body: ",request)

  return fetch (url, request)
}

const saveAllCardsRel = async (listOfDtos) => {
  const url = `${BASE_URL}/saverels`;

  const request = {...getRequestWithToken(), method: "POST"}
  request.body = JSON.stringify(listOfDtos);

  console.log("Fazendo o request do rels com o body: ",request)

  return fetch (url, request);
}

const minusOneQtd = async (id) => {
  const url = `${BASE_URL}/removeoneqtd/${id}`;
  const requestObj = getRequestWithToken();
  const request = {...requestObj, method : "PATCH"};
  
  return fetch (url, request);
}


export default {getCardsByDeckId, saveRelCardDeck, saveAllCardsRel, minusOneQtd}