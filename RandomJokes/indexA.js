let joke = document.getElementById("joke");
let btn = document.getElementById("btn");

const apiKey = "E4z1lFw+pG0iIHLZna5qFg==g7FDKDiIze1VRnad";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function randomeJoke(){
    try {
        joke.innerText = "Updating...";
        btn.disabled = true;
        btn.innerText = "Please wait..";
        const response = await fetch(apiURL, options);
        const data = await response.json();
       
        btn.disabled = false;
        btn.innerText = "Click for a new Joke";  
        joke.innerText = data[0].joke;      
    } catch (error) {
        joke.innerText = "An error happened, try again later";
        btn.disabled = false;
        btn.innerText = "Click for a new Joke";
        console.log(error);          
    }
   
}

btn.addEventListener("click", randomeJoke);