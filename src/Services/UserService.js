const BASER_URL = "http://localhost:8080/api/user";

const requestObj = {
    method:"POST",
    body: "",
    headers: {
        "Content-Type": "application/json",
    }
}

const registerUser = async function (email, password, fullname, username) {
    const url = `${BASER_URL}/register`;
    const request = requestObj;
    const userRegisterDto = {
        email: email,
        password: password,
        fullname: fullname,
        username: username
    }

    request.body = JSON.stringify(userRegisterDto);

    return fetch(url, request).then( resp => resp.json() );
}

const loginUser = async function (username, password) {
    const url = `${BASER_URL}/login`;
    const request = requestObj;
    const dtoLogin = {
        username: username,
        password: password
    }

    request.body = JSON.stringify(dtoLogin);

    return fetch( url, request ).then( resp => resp.json() ); 

}


export default {registerUser, loginUser};