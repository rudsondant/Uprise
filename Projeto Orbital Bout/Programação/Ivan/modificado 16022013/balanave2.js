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


//Destrói o objeto na colisão com tudo, mas checa antes se o colisor é a nave. Se esse for o caso, o HP da mesma será reduzido.
function OnCollisionEnter(collision : Collision) {
    if(collision.transform.tag == "Nave2" && !transform.collider.isTrigger){    
        transform.collider.isTrigger = true;
    }
    if(collision.transform.tag == "balanave2" && !transform.collider.isTrigger){    
        transform.collider.isTrigger = true;
    }
}
 
function OnTriggerEnter(trigCollision : Collider){
    if(trigCollision.transform.tag == "Nave1" && transform.collider.isTrigger){    
        transform.collider.isTrigger = false;
        gameObject.GetComponent(Nave).LevarDano(dano);
        Destroy(gameObject);
    }
    else if(transform.collider.isTrigger){
    	transform.collider.isTrigger = false;
    	Destroy(gameObject);
    	}
}