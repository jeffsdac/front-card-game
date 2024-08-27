import getToken from "./GetToken";
const BASE_URL = "http://localhost:8080/api/deck";

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

const removeById = (deckId) => {
    const url = `${BASE_URL}/${deckId}`
    const request = getRequestWithToken();
    request.method = "DELETE";
    return fetch(url, request);
}


const registerByUsername = (username, deckName, imageId) => {
    const url = `${BASE_URL}/register`;
    
    const request = getRequestWithToken();
    request.method = "POST"

    const body = {
        "username": username,
        "name": deckName,
        "imageId": imageId
    }

    request.body = JSON.stringify(body);


    return fetch (url, request);
}

const updateById = async (id, imageId, deckName) => {
    const url = `${BASE_URL}/${id}`;
    const dto = {
        "imageId": imageId,
        "deckName": deckName
    }
    
    const request = getRequestWithToken();
    request.method="PATCH";
    request.body = JSON.stringify(dto);
    return fetch(url, request);
}

const getByUsername = async (username) => {
    const request = getRequestWithToken();
    return fetch (`http://localhost:8080/api/deck/user/${username}`, request);
}

export default {registerByUsername, removeById, updateById, getByUsername};
