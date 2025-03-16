//-----------Inicio de variables globales-----------

let listaAmigos=[];

//-----------Fin de variables globales-----------


// -----------Esta es la funcion principal-----------
function agregarAmigo() {
    console.log('boton funcionando')
    let inputUsuario = document.getElementById('amigo'); //esto invoca al input
    let texto = inputUsuario.value.trim(); //esto corta los espacios y deja solamente el texto

    if (texto === ''){
        alert('Por favor, agrega un nombre a la lista c:.')
    } else{
        if (listaAmigos.includes(texto)){
            alert(`${texto} ya está en la lista`);
            borrar();
        }else{
            listaAmigos.push(texto);
            console.log(listaAmigos); 
            borrar();
        }
    }
}

function borrar(){
    document.getElementById('amigo').value = '';
    console.log('funciona borrado')
}