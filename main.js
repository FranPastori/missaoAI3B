const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


let perguntas = [
    {
        enunciado: "Esse é o texto que adicionamos por javasript",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "texto da pergunta",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },

     {
        enunciado: "texto da pergunta",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
     {
        enunciado: "texto da pergunta",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },

];


let atual = 0; 
let perguntaAtual;

function mostraPergunta(){

    perguntaAtual = perguntas[atual];

    caixaPergunta.textContent = perguntas.enunciado;

}

mostraPergunta();
