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

var nave:Nave;

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

function FixedUpdate () {
	if(ativo){
		Movimentar();
		Frenagem();
	}
}

function Movimentar(){
	print("A velocidade da Nave é:"+rigidbody.velocity);
	
	if(Input.GetKey(KeyCode.D)){
		if(rigidbody.velocity.x<velocidadeMax){
			rigidbody.AddForce (velocidade, 0, 0);
			yield WaitForSeconds (0.1);
		}
	}
	else if(Input.GetKey(KeyCode.A)){
		if(rigidbody.velocity.x>-velocidadeMax){
			rigidbody.AddForce (-velocidade, 0, 0);
			yield WaitForSeconds (0.1);
		}
	}
	if(Input.GetKey(KeyCode.W)){
		if(rigidbody.velocity.y<velocidadeMax){
			rigidbody.AddForce (0, velocidade, 0);
			yield WaitForSeconds (0.1);
		}
	}
	else if(Input.GetKey(KeyCode.S)){
		if(rigidbody.velocity.y>=-(velocidadeMax+gravidade)){
			rigidbody.AddForce (0, -(gravidade+velocidade), 0);
			yield WaitForSeconds (0.1);
		}
	}
}

function Frenagem(){
	if(Input.GetKey(KeyCode.D)==false){
		if(rigidbody.velocity.x>0){
			rigidbody.AddForce (-frenagem, 0, 0);
			yield WaitForSeconds (0.1);
		}
	}
	else if(Input.GetKey(KeyCode.A)==false){
		if(rigidbody.velocity.x>0){
			rigidbody.AddForce (frenagem, 0, 0);
			yield WaitForSeconds (0.1);
		}
	}



}