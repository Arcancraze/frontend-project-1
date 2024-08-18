const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apikey = "kUYluBTiqXJ9m776mYkRqw==GfhG6RiO12xYXWfu";

const options ={
    method: "GET",
   headers: { "X-Api-Key": apikey,
   },
};

const URL = "https://api.api-ninjas.com/v1/dadjokes"

async function getjoke(){
   try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
    
        const response = await fetch(URL, options)
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happen Try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error)
    }
   

}

btnEl.addEventListener("click", getjoke)