const BASE_URL = "http://localhost:8080/api/deck";

const requestObj = {
    method:"POST",
    body: "",
    headers: {
        "Content-Type": "application/json",
    }
}

// {
//     "userId": 0,
//     "name": "string",
//     "imageId": 0
// }

const registerByUsername = (username, deckName, imageId) => {
    const url = `${BASE_URL}/register`;
    const request = requestObj;
    const body = {
        "username": username,
        "name": deckName,
        "imageId": imageId
    }
    request.body = JSON.stringify(body);
    return fetch (url, request);
}

export default {registerByUsername};
