const BASE_URL = "http://localhost:8080/api/card"

const getById = async  (id) => {
    return fetch(`${BASE_URL}/${id}`) 
}

const getAll = async () => {
    return fetch (`${BASE_URL}/findall`);
}

const getByType = async (cardType) => {
    //'http://localhost:8080/api/card/type?cardType=NECRO' 
    return fetch(`${BASE_URL}/type?cardType=${cardType}`)
}

export default {getById, getAll, getByType};