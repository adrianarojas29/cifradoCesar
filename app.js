prompt('Inserte una frase')
//creo dos funciones
function caesar(cipher, decipher) {
     var output="";
     decipher = parseInt(decipher);
     for (var i=0; i<cipher.length;i++){
 		output += String.fromCharCode(cipher.charCodeAt(i)+decipher);
     }
     return output;
 }
