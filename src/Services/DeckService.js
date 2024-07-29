const BASE_URL = "http://localhost:8080/api/deck";

const requestObj = {
    method:"POST",
    body: "",
    headers: {
        "Content-Type": "application/json",
    }
}



const removeById = (deckId) => {
    const url = `${BASE_URL}/${deckId}`
    const request = {
        method:"DELETE"
    }

    return fetch(url, request);
}


const registerByUsername = (username, deckName, imageId) => {
    const url = `${BASE_URL}/register`;
    
    const request = requestObj;

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
    
    const request = requestObj;
    request.method="PATCH";
    request.body = JSON.stringify(dto);

    return fetch(url, request);
}

export default {registerByUsername, removeById, updateById};
