fetch ('https://rickandmortyapi.com/api/character/?page=')

    .then(response => response.json())
    .then(data => personajes(data))
    .catch(err => console.log('error', err))

//const mostrarData = (data) => {
//    console.log(data)
//}
function personajes(data) {
    console.log(data)
    characters = document.querySelector("#cardHolder");
    data.results.map(item =>{
        divItem = document.createElement('div')
        divItem.innerHTML = `
        <div class="card">
            <img src="${item.image}">
            <h2>${item.name}</h2>
            <ul>
                <li><span>Specie: ${item.species}</span></li>
                <li><span>Status: ${item.status}</span></li>
            </ul>
        </div>
        `
        characters.appendChild(divItem);
    })
}


function cerrar() {
    document.querySelector('.alerta').style.display = 'none';
}


/*window.alert('alerta', 
    function() { 
        let nombre = 'Luis';
        const contAlert = document.createElement('div');
        contAlert.innerHTML = `
        <div class="alerta">
            <h2>¡Hola!</h2>
            <span>Esta ingresando a la pagina de consumo API realizada por ${nombre}</span>
            <button onclick="cerrar();">Cerrar</button>
        </div>
        `
        contAlert.classList.add('alerta');
}, false);*/

window.addEventListener('load', function popUp(){
    let nombre = "Luis";
    const contPopup = document.createElement('div');
    contPopup.innerHTML = `
    <div class="alerta">
        <h2>¡Hola!</h2>
        <span>Esta ingresando a la pagina de consumo API realizada por ${nombre}</span>
        <button onclick="cerrar();">Cerrar</button>
    </div>
    `
    contPopup.classList.add('contAlert');
    console.log(contPopup)
} ) 



/*
const alert1 = function { 
    let nombre = 'Luis';
    const contAlert = document.createElement('div');
    contAlert.innerHTML = `
    <div class="alerta">
        <h2>¡Hola!</h2>
        <span>Esta ingresando a la pagina de consumo API realizada por ${nombre}</span>
        <button onclick="cerrar();">Cerrar</button>
    </div>
    `
    contAlert.classList.add('alerta');
}
*/