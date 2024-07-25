const BASE_URL = "http://localhost:8080/api/arts";

const requestObj = {
    method:"POST",
    body: "",
    headers: {
        "Content-Type": "application/json",
    }
}

const uploadArt = async (base64img, extension) => {
    const url = `${BASE_URL}/upload`
    
    const art = {
        content: base64img,
        type: extension
    }

    const body = JSON.stringify(art)
    requestObj.body = body

    return fetch(url, requestObj)
}

export default {uploadArt};
