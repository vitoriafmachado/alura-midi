function tocaSom(seletorAudio) {

 const elemento =   document.querySelector(seletorAudio);

 if (elemento === null ) {
    alert('Elemento não encontrado')

 
}

if (elemento != null && elemento.localName === 'audio' ) {
    elemento.play();
} else{ console.log('Elemento ou seletor não encontrado!')

}




}



const listaDeTeclas = document.querySelectorAll('.tecla');



//para
for ( let contador = 0; contador < listaDeTeclas.length; contador++) {

    //declarei uma const listadeteclas[contador] assim posso repetir com boa pratica tecla. para não precisar repetir toda a frase
    const tecla = listaDeTeclas[contador];
    const instrumento =  tecla.classList[1];

    //template string
   const idAudio = `#som_${instrumento}`;

   tecla.onclick = function (){

    tocaSom(idAudio);
}

//acionado quando uma tecla é pressionada no teclado. 

tecla.onkeydown = function (evento) {
    if (evento.code =='Space' || evento.code == 'Enter' ) {
    tecla.classList.add('ativa');
    }

}

tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
}

}

