//-- Quantidade de ingressos
let pista = 100;
let cadeiraInferior = 200;
let cadeiraSuperior = 400;
//-- Chamando a função que defini os textos
textosDosIngressos()

function comprar(){
    //--Recuperando valores: tipo, quantidade
    let tipo = document.getElementById('tipo-ingresso').value
    let quantidade = document.getElementById('qtd').value

    //-- Verificação da quantidade
    if(quantidade <= 0){
        alert("A quantidade é igual ou menor que zero. Altere a quantidade para continuar.")
        return;
    }
    
    //-- Redução dos ingressos
    switch(tipo){
        case "inferior":
            if(quantidade > cadeiraInferior){
                alert("O número desejado para a compra é maior que o número de ingressos disponíveis")
            }
            else{
                if(confirm(`Você realmente deseja comprar ${quantidade} ingressos para a cadeira inferior?`)){
                    cadeiraInferior -= quantidade
                }
                else{
                    alert("Compra não realizada")
                }
            }
        break;
        case "superior":
            if(quantidade > cadeiraSuperior){
                alert("O número desejado para a compra é maior que o número de ingrssos disponíveis")
            }
            else{
                if(confirm(`Você realmente deseja comprar ${quantidade} ingressos para a cadeira superior?`)){
                    cadeiraSuperior -= quantidade
                }
                else{
                    alert("Compra não realizada")
                }
            }
        break;
        case "pista":
            if(quantidade > pista){
                alert("O número desejado para a compra é maior que o número de ingrssos disponíveis")
            }
            else{
                if(confirm(`Você realmente deseja comprar ${quantidade} ingressos para a pista?`)){
                    pista -= quantidade
                }
                else{
                    alert("Compra não realizada")
                }
            }
        break;
    }

    //-- Mudando o texto do número de ingressos
    textosDosIngressos()
}

function textosDosIngressos(){
    //-- Textos da pista, cadeira superior e cadeira inferior presentes no HTML
    let textoPista = document.getElementById('qtd-pista').innerHTML = `${pista}`
    let textoCadeiraInferior = document.getElementById('qtd-inferior').innerHTML = `${cadeiraInferior}`
    let textoCAdeiraSuperior = document.getElementById('qtd-superior').innerHTML = `${cadeiraSuperior}`
}

