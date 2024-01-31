function encrypt(){
	var texto=document.getElementById("input").value.toLowerCase();
	var textoCifrado=texto.replace(/e/igm,"enter");
	var textoCifrado=textoCifrado.replace(/i/igm,"imes");
	var textoCifrado=textoCifrado.replace(/a/igm,"ai");
	var textoCifrado=textoCifrado.replace(/o/igm,"ober");
	var textoCifrado=textoCifrado.replace(/u/igm,"ufat");

	document.getElementById("munheco").style.display="none";
	document.getElementById("text").style.display="none";
	document.getElementById("text2").innerHTML=textoCifrado;
	document.getElementById("copy").style.display="show";
	document.getElementById("copy").style.display="inherit";

}
function desencrypt() {
	var texto=document.getElementById("input").value.toLowerCase();
	var textoCifrado=texto.replace(/enter/igm,"e");
	var textoCifrado=textoCifrado.replace(/imes/igm,"i");
	var textoCifrado=textoCifrado.replace(/ai/igm,"a");
	var textoCifrado=textoCifrado.replace(/ober/igm,"o");
	var textoCifrado=textoCifrado.replace(/ufat/igm,"u");

	document.getElementById("munheco").style.display="none";
	document.getElementById("text").style.display="none";
	document.getElementById("text2").innerHTML=textoCifrado;
	document.getElementById("copy").style.display="show";
	document.getElementById("copy").style.display="inherit";
	
}
function copy(){
	var contenido=document.querySelector("#text2");
	contenido.select();
	document.execCommand("copy");
	alert("Texto copiado");
}