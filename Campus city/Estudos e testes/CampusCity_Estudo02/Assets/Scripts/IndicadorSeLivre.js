/*----------------------------------------------------------------------------------#
Programador: Lucas Cassiano
Data de criação: 22/05/2013
Ultima Alteração: 22/05/2013
# Indica se pode ser construído no local ou não
Se o mouse passar por cima e estiver "livre", fica da cor A; Caso contrário da cor B.
Quando mouse sai, fica da cor O;
-------------------------------------------------------------------------------------*/
#pragma strict

private var corO:Color=Color.white;
private var corA:Color=Color(0,0.8,0.3,1);
private var corB:Color=Color(1,0,0,0.5);
public var posM:Vector2; //Posicao na matriz
private var mudouCor:boolean=false;

function OnMouseEnter(){
	if(transform.tag=="livre"){
		transform.renderer.material.color=corA;
		
	}
	else{
		transform.renderer.material.color=corB;
		var filho1=transform.GetChild(0);
		var filho2=filho1.transform.GetChild(0);
		filho2.transform.renderer.material.color=Color(1,1,1,0.5);
		mudouCor=true;
	}

}

function OnMouseExit(){
	
	transform.renderer.material.color=corO;
	if(mudouCor){
		var filho1=transform.GetChild(0);
		var filho2=filho1.transform.GetChild(0);
		filho2.transform.renderer.material.color=Color.white;
		mudouCor=false;
	
	}
}