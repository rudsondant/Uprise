/*------------------------------------------------------------------------------------------------------
Programador: Fernanda Monteiro
Data de Criação: 16/02/2013; Ultima Alteração: 16/02/2013
--------------------------------------------------------------------------------------------------------
Script criado para o projeto Orbital Bout da Equipe UpRise
Este script cria um menu para a escolha do canhão, selecionando apenas dois destes canhões.
-------------------------------------------------------------------------------------------------------*/


#pragma strict
var i : int;
var eixoX : float;
var eixoY : float;
var cont : int;

var btnTexture : Texture2D[];
var btnClicked : boolean[];

var windowRect : Rect;


function Start () {

btnClicked = new boolean[4];

}

function Update () {

eixoX = Screen.width;
eixoY = Screen.height;

windowRect = Rect (0.5*eixoX-((0.5*eixoY)/2), 0.5*eixoY-((0.5*eixoY)/2), 0.5*eixoY, 0.5*eixoY);


}

function OnGUI(){

windowRect = GUI.Window (0, windowRect, DoMyWindow, "");

}

function DoMyWindow (windowID : int) {
	
	    if (GUI.Button(Rect((1.0/3.0)*(0.5*eixoY),0,(1.0/3.0)*(0.5*eixoY),(1.0/3.0)*(0.5*eixoY)), btnTexture[0])){
			if(cont < 2){	    	
		    	if(btnClicked[0] == false){
		    		btnClicked[0] = true;
		    		cont +=1;
		    		}
		    	else{
		    		btnClicked[0] = false;
		    		cont -= 1;
		    	}
		    }
		    else if(btnClicked[0] == true){
		    	btnClicked[0] = false;
		    	cont -= 1;
		    }
		}
		if (GUI.Button(Rect((2.0/3.0)*(0.5*eixoY),(1.0/3.0)*(0.5*eixoY),(1.0/3.0)*(0.5*eixoY),(1.0/3.0)*(0.5*eixoY)), btnTexture[1])){
			if(cont < 2){	    	
					if(btnClicked[1] == false){
			    		btnClicked[1] = true;
			    		cont +=1;
			    		}
			    	else{
			    		btnClicked[1] = false;
			    		cont -= 1;
			    		}
			}
			else if(btnClicked[1] == true){
		    	btnClicked[1] = false;
		    	cont -= 1;
		    }
		}			
		
			
		if (GUI.Button(Rect((1.0/3.0)*(0.5*eixoY),(2.0/3.0)*(0.5*eixoY),(1.0/3.0)*(0.5*eixoY),(1.0/3.0)*(0.5*eixoY)), btnTexture[2])){
			if(cont < 2){	    	
				if(btnClicked[2] == false){
		    		btnClicked[2] = true;
		    		cont +=1;
		    		}
		    	else{
		    		btnClicked[2] = false;
		    		cont -= 1;
		    	}
		    }
		    else if(btnClicked[2] == true){
		    	btnClicked[2] = false;
		    	cont -= 1;
		    }
		}
		if (GUI.Button(Rect(0,(1.0/3.0)*(0.5*eixoY),(1.0/3.0)*(0.5*eixoY),(1.0/3.0)*(0.5*eixoY)), btnTexture[3])){
			if(cont < 2){	    	
				if(btnClicked[3] == false){
		    		btnClicked[3] = true;
		    		cont +=1;
		    		}
		    	else{
		    		btnClicked[3] = false;
		    		cont -= 1;
		    	}
		    }
		    else if(btnClicked[3] == true){
		    	btnClicked[3] = false;
		    	cont -= 1;
		    }
		}
	
	
}
