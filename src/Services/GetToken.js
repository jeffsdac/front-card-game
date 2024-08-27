const getToken = () => {
    console.log("PEGANDO TOKEN");
    let count = 0;
    let tokenAcess = localStorage.getItem('token');
    while(tokenAcess === null && count < 1000){
        tokenAcess = localStorage.getItem('token');
        count++;
    }
    return tokenAcess;
}

export default getToken;

