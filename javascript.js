'use strict';
//Variaveis 

let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//Eventos onclick
btnVendas.addEventListener('click',venda,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',planilha,false);

//funcoes functions
function venda(e){
    if (document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);

    }else{
        if (document.getElementById('mista').checked) {
            somaMista = somaMista + 1;
            vendaMista = vendaMista + 29.60;
            document.getElementById('resultadoMista').innerHTML = somaMista;
            document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
        }else{
            if (document.getElementById('calabresa').checked) {
                somaCalabresa = somaCalabresa + 1;
                vendaCalabresa = vendaCalabresa + 22.50;
                document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
                document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
            }
        }
    }
}

//======================================================================================================
//funcoes functions
function estorno(e){
    if (document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 25.00;
        if (somaMussarela < 0) {
            somaMussarela = 0;
            vendaMussarela = 0.00;
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);

    }else{
        if (document.getElementById('mista').checked) {
            somaMista = somaMista - 1;
            vendaMista = vendaMista - 29.60;
            if (somaMista < 0) {
                somaMista = 0;
                vendaMista = 0.00;
            }
            document.getElementById('resultadoMista').innerHTML = somaMista;
            document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
        }else{
            if (document.getElementById('calabresa').checked) {
                somaCalabresa = somaCalabresa - 1;
                vendaCalabresa = vendaCalabresa - 22.50;
                if (somaCalabresa <0) {
                    somaCalabresa =0;
                    vendaCalabresa = 0.00;
                }
                document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
                document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
            }
        }
    }
}