/*------------------------------------------------------------------------------------------------------
Programador: Lucas Cassiano
Data de Criação: 02/02/2013; Ultima Alteração: 04/02/2013
--------------------------------------------------------------------------------------------------------
Script criado para o projeto Orbital Bout da Equipe UpRise
Este script Indica quando há colisão da Nave ou bala com o solo e a velocidade do contato. 
Funciona ainda para decrescer a "vida" da Nave
*Deve ser um componente do objeto que representa o "solo" da cena
-------------------------------------------------------------------------------------------------------*/
#pragma strict
//Variáveis globais
var velocidadeMax:float; //velocidade até onde o contato não tira vida
var dano:float; //Dano causado pelo contato extremo
private var NaveScript:Nave;

function OnCollisionEnter(colisor : Collision) {
	if(colisor.gameObject.tag=="Nave"){
    	if (colisor.relativeVelocity.magnitude > velocidadeMax){
        	NaveScript=colisor.gameObject.GetComponent("Nave");
        	NaveScript.LevarDano(dano);       	
        }
	}
	//print("Nave Colidiu com o Solo, Com velocidade:"+colisor.relativeVelocity.magnitude);
}
