const contentJoke = document.getElementById("joke")
const btn = document.getElementById("btn")
const url = "https://v2.jokeapi.dev/joke/Any?type=single"


let getJoke = () => {
    contentJoke.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
    .then(item => { 
        contentJoke.textContent = `${item.joke}`
        contentJoke.classList.add("fade")
    })
}

btn.addEventListener("click", getJoke)
getJoke()