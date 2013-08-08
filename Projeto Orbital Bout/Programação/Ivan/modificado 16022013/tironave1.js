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
var velocidadebala = 5;
var velocidadenave : Vector3;
var ponta:GameObject;
var canhao:GameObject;
var tempoForca : float = 0;
var tempoRecarga : float = 0;
var forcaBalaPlano : float = 0;
var tempoRecargaArma : int = 2;


function Start () {
	nave=GameObject.FindGameObjectWithTag("Nave").GetComponent("Nave");
}

function FixedUpdate () {
	
	position();
	atirar();
	}

function position(){
	//Pegando a velocidade da nave.
	velocidadenave = nave.rigidbody.velocity; 
	//Declarando a posição de saída do tiro
	posicao = ponta.transform.position;
	}

function atirar(){
		tempoRecarga = tempoRecarga + Time.deltaTime;
		print(tempoRecarga);
		if(tempoRecarga>tempoRecargaArma){
		
			if (Input.GetKey(KeyCode.RightShift)){//Iniciar carregamento de força do tiro
				
				tempoForca = tempoForca + Time.deltaTime;
				print("A forca do Player 1 eh:"+tempoForca);
			}			
			if (Input.GetKeyUp(KeyCode.RightShift)){//Atirar quando barra de espaço for levantada
					if(tempoForca>2){
						forcaBalaPlano = 500;
					}
					else{forcaBalaPlano = 200*tempoForca/2;
					}
					print("galado");
					bala1_in = Instantiate(bala1, posicao, canhao.transform.rotation);
					//Somando a velocidade da nave à velocidade da bala ao sair do canhão para uma velocidade de projétil
					//verdadeira.
					bala1_in.transform.position.z=0;
					bala1_in.rigidbody.AddForce (transform.up * velocidadebala * forcaBalaPlano);
					bala1_in.rigidbody.velocity = bala1_in.rigidbody.velocity + velocidadenave;
					tempoForca = 0;
					tempoRecarga = 0;
			}
		}
	}
		
		