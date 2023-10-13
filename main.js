// Pega o ID canvas no HTML
let canvas = document.getElementById("canvas");
// Pegamos o contexto do desenho, esse é o método que retorna um desenho, usar o parametro 2d  significa que o objeto que será redenrizado será bidimensional
let contexto = canvas.getContext("2d");
// Variável que vamos usar para identificar se estamos desenhando 
let desenhando = false;

canvas.addEventListener("mousedown", function(event){
    //vamos usar o metodo addEventtListener para ouvir nosso mouse, ele irá identificar quando clicarmos 
    desenhando = true; //o desenhando se torna verdade
    contexto.beginPath();
    //a variavel contexto recebe o metodo beginPath(); esse metodo significa que um novo caminho será criado
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    //nessa função vamos dizer como o contexto irá funcionar. o clientX vai fornecer as cordenadas horizontais enquanto o canvas.offLeft vai retornar a medida em pixel, a mesma coisa acontece com o Y de froma vertical
    contexto.strokeStyle = corLinha;
    //estiliza a cor da linha padrão 
})

canvas.addEventListener("mousemove", function(event){
    //essa função identifica quando movemos o mouse 
    if(desenhando){
        //esse if vai identificar se estamos clicando enquanto movemos o mouse
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        //ele vai identificar toda a linha que estamos tracando enquanto clicamos e movemos o mouse
        contexto.stroke();
        //ele traça a linha
    }
})

canvas.addEventListener("mouseup", function(event){
    //essa função identifica quando não estamos mais clicando no mouse
    desenhando = false;

})

//forma retÂngulos (utilizei para pintar o fundo)
var tela = document.getElementById("canvas");
var pincel = tela.getContext('2d');

pincel.fillStyle = 'white'; //escolhe a cor do fundo
pincel.fillRect(0, 0, 900, 700); //escolhe o tamanho do retangulo que deseja pintar 

var desenha = false;


//paleta de cores 
let corLinha = "black"; //cor da linha padrão

function definirCorLinha(cor) {
    corLinha = cor;
    //atualize o valor do input de seleção de cor da linha

}

//preenchimento 
let modoPreenchimento = false;

function ativarModoPreenchimento() {
    modoPreenchimento = !modoPreenchimento; // Inverte o estado do modo de preenchimento
}

canvas.addEventListener("click", function(event) {
    if (modoPreenchimento) {
        contexto.fillStyle = corLinha; // Define a cor de preenchimento igual à cor da linha
        contexto.fill(); // Preenche a área
    }
}); 

