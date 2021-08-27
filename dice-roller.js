// array de frequencia
const count = []
for ( let i = 0; i < 13; i++){
    count.push(0)
}
//mobile first
let mobile = window.matchMedia(("max-width: 800px"));
function mobilefirst(mobile){
    if (mobile.matches){
        document.body.style.backgroundColor = "lightblue";
    }
    else{
        document.body.style.backgroundColor = "lightgreen";
    }
}
mobilefirst(mobile)
mobile.addEventListener('resize', mobilefirst(mobile))

//equacao para gerar numero inteiro aleatorio dentro de um intervalo : x >= min || x<max
const randomroll = (min, max) => Math.floor(Math.random() * (max - min)) + min;

//equacao para mostrar o maior numero de um array
function greaterNumber(array) {
    let greater = 0
    for (let i = 0; i < array.length ; i++){
        if ( array[i]> greater){
            greater = array[i]
        }
    }
    return greater
}


// rolagem de 2 dados , soma e adicao da frenquencia no array de frequencia.
for( let i = 0 ; i <1000 ; i++){
    let dicethrow1 = randomroll(1, 7);
    let dicethrow2 = randomroll(1, 7);
    let sum = dicethrow1 + dicethrow2;
    count[sum] += 1;
}

// display de um header na div Resultados

let resultsHeader = document.createElement("h2")
resultsHeader.className = "resultados__h2"

let headerText = document.createTextNode("Rolados 1000 pares de dados, obtemos :")
resultsHeader.appendChild(headerText)

let header = document.getElementById("resultados")
header.appendChild(resultsHeader)

// Exibicao dos resultados na div Resultados
for (let j = 2 ; j < count.length; j++){
    let newDiv = document.createElement("div");
    newDiv.className = "results";

    let text = document.createTextNode( j + " : " + count[j]);
    newDiv.appendChild(text);

    let destination = document.getElementById("resultados");
    destination.appendChild(newDiv);
}
// Display de um header na div grafico.

let gH = document.createElement("h2")
gH.className = "grafico__h2"

let gT = document.createTextNode("De maneira mais grafica podemos observar ")
gH.appendChild(gT)

let gHH = document.getElementById("grafico")
gHH.appendChild(gH)

let maxWidth = 330
// Criacao das divs bars na div grafico.
for (let j = 2 ; j < count.length; j++){
    let percent = greaterNumber(count);
    let newDiv = document.createElement("div");
    newDiv.className = "bar";
    newDiv.style.width = (count[j] / percent) * maxWidth +"px";
    newDiv.style.backgroundColor = "#454545"

    let text = document.createTextNode(j + " : " + count[j]);
    newDiv.appendChild(text);

    let destination = document.getElementById("grafico");
    destination.appendChild(newDiv);
}


