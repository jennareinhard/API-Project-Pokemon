var pokemon = document.querySelector('ul')
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const section = document.querySelector('section');


searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault()
    fetch('https://pokeapi.co/api/v2/pokemon/' + searchTerm.value)
        .then(
            function (response) {
                console.log(response)
                return response.json();
            }
        )
        .then(
            function (json) {
                displayResults(json)
            }
        )
}
function displayResults(results){
    console.log(results)
    while(section.firstChild){
        section.removeChild(section.firstChild);
    }
    let name = document.createElement("h1");
    //1 
    let abilities = document.createElement('p');
    let base = document.createElement('h2');
    let sprites = document.createElement('img');
    let weight = document.createElement('p');
    let stats = document.createElement('p');
    let height = document.createElement('p');
    let types = document.createElement('p')

    abilities.textContent = "Abilities: " + results.abilities[0].ability.name;
    for(let i = 1; i < results.abilities.length; i++){
        //console.log(results.abilities[i].ability.name);
        abilities.textContent += ", " + results.abilities[i].ability.name;
    }

    types.textContent = "Types: " + results.types[0].type.name;
    for(let i = 1; i < results.types.length; i++){
        //console.log(results.types[i].type.name);
        types.textContent += ", " + results.types[i].type.name;
    }

    name.textContent = results.name;
//2
    sprites.src = results.sprites.front_default

    base.textContent = results.base;
    sprites.textContent = results.sprites;
    weight.textContent = "Weight: " + results.weight;
    stats.textContent = "Stats: " + results.stats;
    height.textContent = "Height: " + results.height;

    section.appendChild(name)
    // 3
    section.appendChild(abilities)
    section.appendChild(sprites)
    section.appendChild(base)
    section.appendChild(weight)
    section.appendChild(height)
    section.appendChild(types)
}