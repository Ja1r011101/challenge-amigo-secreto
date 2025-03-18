//-----------Inicio de variables globales-----------

let arregloAmigos=[];

//-----------Fin de variables globales-----------


// -----------Esta es la funcion principal-----------
function agregarAmigo() {
    console.log('boton funcionando')
    let inputUsuario = document.getElementById('amigo'); //esto invoca al input
    let texto = inputUsuario.value.trim(); //esto corta los espacios y deja solamente el texto

    if (texto === ''){
        alert('Por favor, agrega un nombre a la lista c:')
    } else{
        if (arregloAmigos.includes(texto)){
            alert(`${texto} ya está en la lista`);
            borrar();
        }else{
            arregloAmigos.push(texto);
            console.log(arregloAmigos);
            mostrarNombres();
            borrar();
        }
    }
}

function sortearAmigo(){

    if (arregloAmigos.length === 0){
        alert('Aun no hay amigos que sortear');
    } else{
        let indiceGanador = Math.floor(Math.random() * arregloAmigos.length);
        let ganador =arregloAmigos[indiceGanador];
        let resultado = document.getElementById("resultado");

        resultado.innerHTML =`<li>El ganador es: ${ganador}</li>`
    }
}

function mostrarNombres() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; //esto evita que la lista sea duplicada en cada uso
    arregloAmigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function borrar(){
    document.getElementById('amigo').value = '';
    console.log('funciona borrado')
}