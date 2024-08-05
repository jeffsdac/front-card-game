const BASE_URL = "http://localhost:8080/api/arts";

const requestObj = {
    method:"POST",
    body: "",
    headers: {
        "Content-Type": "application/json",
    }
}

const uploadArt = async (base64img, extension, typeArt) => {
    const url = `${BASE_URL}/upload`
    
    const art = {
        content: base64img,
        type: extension,
        typeArt: typeArt
    }

    const body = JSON.stringify(art)
    requestObj.body = body
 //   console.log(body);

    return fetch(url, requestObj)
}

const getArtById = async (id) => {
    const url = `${BASE_URL}/${id}`
    console.log(url)

    return fetch(url);
}

// URL EXAMPLE: http://localhost:8080/api/arts/type?typeArt=BACKGROUNDDECK
const getArtByType = async (typeImg) => {
    const url = `${BASE_URL}/type?typeArt=${typeImg}`
    return fetch (url);
}

export default {uploadArt, getArtById, getArtByType};
