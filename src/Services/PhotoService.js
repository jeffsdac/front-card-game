import getToken from "./GetToken";
const BASE_URL = "http://localhost:8080/api/arts";


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

const uploadArt = async (base64img, extension, typeArt) => {
    const url = `${BASE_URL}/upload`;
    
    const art = {
        content: base64img,
        type: extension,
        typeArt: typeArt
    };

    const body = JSON.stringify(art);
    const requestObj = getRequestWithToken();
    requestObj.body = body;
    requestObj.method = "POST";

    return fetch(url, requestObj)
}

const getArtById = async (id) => {
    const request = getRequestWithToken();

    const url = `${BASE_URL}/${id}`

    return fetch(url, request);
}

// URL EXAMPLE: http://localhost:8080/api/arts/type?typeArt=BACKGROUNDDECK
const getArtByType = async (typeImg) => {
    const request = getRequestWithToken();
    console.log("request é: " , request)
    const url = `${BASE_URL}/type?typeArt=${typeImg}`
    return fetch (url, request);
}

export default {uploadArt, getArtById, getArtByType};
