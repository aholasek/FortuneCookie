
var english = new Array("option a","option b");
var chinese = new Array("option a","option b");
var spanish = new Array("option a","option b");

function englishClick(){
	random=english;
}
function chineseClick(){
	random=chinese;
}
function spanishClick(){
	random=spanish;
}

function fcookie()
{
	var random = new Array("Try Again Later... I'm Sleeping... [Yes, Fortune Cookies Need Their Sleep Too]", "You will be hungry again in one hour.", "When you squeeze an orange, orange juice comes out, because that's what's inside.", "The fortune you seek is in another cookie", "Error 404: Fortune not Found.", "Ignore Previous Cookie", "Pick another Fortune Cookie", "Some fortune cookies contain no fortune", "I wish I knew my own future", "Be careful or you could fall for some tricks today.", "Your love of music will be an important part of your life.", "Adventure can be real happiness.", "Say hello to others. You will have a happier day.", "Good news will come to you by mail. Happiness will bring you good luck.", "In 20 seconds you will breathe.", "Don’t be discouraged, because every wrong attempt discarded is another step forward.", "A pleasant surprise is waiting for you.", "A smooth long journey! Great expectations", "Determination is what you need now.", "Have a beautiful day.", "Now is the time to try something new.", "You look pretty", "You love challenges.", "Your life will get more and more exciting.", "Change is happening in your life, so go with the flow", "A pleasant surprise is waiting for you", "Do not underestimate yourself.");
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
