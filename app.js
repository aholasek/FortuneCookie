
var english = new Array("Try Again Later... I'm Sleeping... [Yes, Fortune Cookies Need Their Sleep Too]", "You will be hungry again in one hour.", "When you squeeze an orange, orange juice comes out, because that's what's inside.", "The fortune you seek is in another cookie", "Error 404: Fortune not Found.", "Ignore Previous Cookie", "Pick another Fortune Cookie", "Some fortune cookies contain no fortune", "I wish I knew my own future", "Be careful or you could fall for some tricks today.", "Your love of music will be an important part of your life.", "Adventure can be real happiness.", "Say hello to others. You will have a happier day.", "Good news will come to you by mail. Happiness will bring you good luck.", "In 5 seconds you will breathe.", "Don’t be discouraged, because every wrong attempt discarded is another step forward.", "A pleasant surprise is waiting for you.", "A smooth long journey! Great expectations", "Determination is what you need now.", "Have a beautiful day.", "Now is the time to try something new.", "You look pretty", "You love challenges.", "Your life will get more and more exciting.", "Change is happening in your life, so go with the flow", "A pleasant surprise is waiting for you", "Do not underestimate yourself.");
var spanish = new Array("Intentarlo más tarde ... Estoy durmiendo ... [Sí, Fortune Cookies necesitan dormir Demasiado]", "Usted tendrá hambre de nuevo en una hora.", "Cuando usted exprime una naranja, jugo de naranja sale ., porque eso es lo que hay dentro "," La fortuna que buscas está en otra galleta "," Error 404:. la fortuna no encontrado "," Ignorar Cookies Anterior "," Pick otra galleta de la suerte "," Algunas galletas de la fortuna no contienen la fortuna ", "Me gustaría saber mi propio futuro", "Ten cuidado o te podía caer en algunos trucos en la actualidad.", "Tu amor por la música será una parte importante de su vida.", "aventura puede ser la verdadera felicidad.", "Da la bienvenida a otros. Usted tendrá un día más feliz.", "Buenas noticias vendrá a usted por correo. La felicidad le traerá buena suerte.", "En 5 segundos se respira.", "no se desanime , porque cada intento equivocado descartado es otro paso adelante. "," Una agradable sorpresa te espera. "," Un viaje largo liso! Grandes expectativas "," La determinación es lo que necesita ahora. "," Que tengas un hermoso día. "," Ahora es el momento de probar algo nuevo. "," Te ves bonita "," Amas desafíos. "," Tu vida se volverá más y más emocionante. "," El cambio está sucediendo en su vida, así que ve con la corriente "," Una agradable sorpresa te espera "," No hay que subestimar a ti mismo. ");

function englishClick(){
	random=english;
}
function spanishClick(){
	random=spanish;
}

function fcookie()
{
	var thing = [Math.floor(Math.random() * 27)];
	document.getElementById("cookie").innerHTML = random[thing];
}

    /*var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
    var current = [];

    function rand(n) {
        return (Math.random() * n)|0;
    }
    return function() {
      if (!current.length) current = nums.slice();
      return current.splice(rand(current.length), 1);
    }
();
}*/
