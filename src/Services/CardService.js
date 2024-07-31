const BASE_URL = "http://localhost:8080/api/card"

const getById = async  (id) => {
    return fetch(`${BASE_URL}/${id}`) 
}

export default {getById};