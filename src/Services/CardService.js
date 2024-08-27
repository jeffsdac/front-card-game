import getToken from "./GetToken"
const BASE_URL = "http://localhost:8080/api/card"

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

const getById = async  (id) => {
    const request = getRequestWithToken();
    return fetch(`${BASE_URL}/${id}`, request); 
}

const getAll = async () => {
    const request = getRequestWithToken();
    return fetch (`${BASE_URL}/findall`, request);
}

const getByType = async (cardType) => {
    const request = getRequestWithToken();
    //'http://localhost:8080/api/card/type?cardType=NECRO' 
    return fetch(`${BASE_URL}/type?cardType=${cardType}`, request)
}

export default {getById, getAll, getByType};