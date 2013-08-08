#pragma strict
/*------------------------------------------------------------------------------------------------------
Programador: Ivan Barreto
Data de Criação: 02/02/2013; Ultima Alteração: 03/02/2013
--------------------------------------------------------------------------------------------------------
Script criado para o projeto Orbital Bout da Equipe UpRise
Este script será colocado no canhão ou na nave com object intuito de criar os objetos bala, que possui:
- Posição, velocidade e ângulo da bala ao sair do canhão.
- Botão de disparo.
- Não testei ainda pois preciso saber como ficará a questão da rotação do canhão e como ficará o script 
de Fernanda pra usar as variáveis certas.
-------------------------------------------------------------------------------------------------------*/

var nave:Nave;
var bala1: GameObject;
var bala1_in: GameObject;
var posicao : Vector3;
var angulo : float;
//diferença da posição da ponta do canhão até o ponto de criação do objeto bala
var offset : Vector3 = Vector3(0,0,0);
var velocidadebala = 5;
var velocidadenave : Vector3;
var Ponta_Canhao:GameObject;
var miraFake: MiraFake;
var canhao:GameObject;

function Start () {
	nave=GameObject.FindGameObjectWithTag("Nave").GetComponent("Nave");
	miraFake=GetComponent("MiraFake");
}

function FixedUpdate () {
	
	position();
	if(Input.GetKeyDown("g")){
 		atirar();
 		}
	}

function position(){
	//Pegando a velocidade da nave.
	velocidadenave = nave.rigidbody.velocity; 
	//Declarando a posição de saída do tiro
	posicao = Ponta_Canhao.transform.position + offset;
	angulo=miraFake.angulo;
	
}

function atirar(){
		//tirinho = false;
		//Instanciando a bala na posição adequada no canhão.
		bala1_in = Instantiate(bala1, posicao, canhao.transform.rotation);
		//Somando a velocidade da nave à velocidade da bala ao sair do canhão para uma velocidade de projétil
		//verdadeira.
		bala1_in.rigidbody.AddForce (transform.up * velocidadebala);
		bala1_in.rigidbody.velocity = bala1_in.rigidbody.velocity + velocidadenave;
		//Cooldown de 0.2 segundos no total, deixei assim pra facilitar a animação depois, um segundo pra cada uma
		yield WaitForSeconds (2.0);
		//Pode atirar de novo.

}