#pragma strict
/*------------------------------------------------------------------------------------------------------
Programador: Ivan Barreto
Data de Criação: 02/02/2013; Ultima Alteração: 03/02/2013
--------------------------------------------------------------------------------------------------------
Script criado para o projeto Orbital Bout da Equipe UpRise
Este script será colocado nos prefabs instanciados das balas das naves, que possui:
- Destruição na colisão com objetos
- Redução de HP da nave ao colidir com a bala
-------------------------------------------------------------------------------------------------------*/
var dano : int;
dano = 20;
var Nave: GameObject;
var Bala : GameObject;


//Destrói o objeto na colisão com tudo, mas checa antes se o colisor é a nave. Se esse for o caso, o HP da mesma será reduzido.

function update(){
	ignoreCollision("Nave");

	ignoreCollision("Bala");
	}
	
function ignoreCollision(tag : String) {

  var objects = GameObject.FindGameObjectsWithTag(tag);

  for (o in objects) {

    if (o.GetComponent("Collider") && o != gameObject)

      Physics.IgnoreCollision(collider, o.collider);

  }

}
