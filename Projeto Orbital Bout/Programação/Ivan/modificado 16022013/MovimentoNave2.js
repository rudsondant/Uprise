/*------------------------------------------------------------------------------------------------------
Programador: Ivan Barreto
Alterado por: Lucas Cassiano
Data de CriaÃ§Ã£o: 28/01/2013; Ultima AlteraÃ§Ã£o: 16/02/2013
--------------------------------------------------------------------------------------------------------
Script criado para o projeto Orbital Bout da Equipe UpRise
Este script implementa o Movimento da Nave, que possui:
- Velocidade
- Frenagem (variável que decresce a velocidade horizontal)

Deve ser um Componente do objeto Nave (apenas do jogador)
-------------------------------------------------------------------------------------------------------*/
#pragma strict

public var ativo:boolean=true;

var nave:Nave2;

var velocidade:float=10; //Acessa a variÃ¡vel velocidade da Nave.js
var velocidadeMax:float=20;
var frenagem:float=0.5;

var gravidade:float=9.1;

function Start(){
	nave=GetComponent("Nave");
}

function Update(){
	//lendo a cada quadro o valor da velocidade da nave (pensando no fato dela poder variar no decorrer do jogo);
	velocidade=nave.velocidade;
	//Gravidade
	rigidbody.AddForce (0, -gravidade, 0);
	//StartCoroutine("Estabilizador");
}
