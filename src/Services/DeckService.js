const BASE_URL = "http://localhost:8080/api/deck";

//http://localhost:8080/api/deck/user/jeffsdac

const findDeckByUsername = (username) => {
    const url = `${BASE_URL}/user/${username}`
    return fetch (url)
}

export default findDeckByUsername;