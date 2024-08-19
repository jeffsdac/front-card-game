const BASE_URL = "http://localhost:8080/api/deck";
const token = localStorage.getItem('token');

// const requestObj = {
//     method:"POST",
//     body: "",
//     headers: {
//         "Content-Type": "application/json",
//     }
// }

const getRequestWithToken = (authToken) => {
    return {
        method:"GET",
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    }
}



const removeById = (deckId) => {
    const url = `${BASE_URL}/${deckId}`
    const request = getRequestWithToken(token);
    request.method = "DELETE";
    return fetch(url, request);
}


const registerByUsername = (username, deckName, imageId) => {
    const url = `${BASE_URL}/register`;
    
    const request = getRequestWithToken(token);
    request.method = "POST"

    const body = {
        "username": username,
        "name": deckName,
        "imageId": imageId
    }

    request.body = JSON.stringify(body);

    console.log(request.body);
    return fetch (url, request);
}

const updateById = async (id, imageId, deckName) => {
    const url = `${BASE_URL}/${id}`;

    const dto = {
        "imageId": imageId,
        "deckName": deckName
    }
    
    const request = getRequestWithToken(token);
    request.method="PATCH";
    request.body = JSON.stringify(dto);

    return fetch(url, request);
}

const getByUsername = async (username) => {
    const request = getRequestWithToken(token);
    return fetch (`http://localhost:8080/api/deck/user/${username}`, request);
}

export default {registerByUsername, removeById, updateById, getByUsername};
