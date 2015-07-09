
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
	var random = new Array("Try Again Later... I'm Sleeping... [Yes, Fortune Cookies Need Their Sleep Too]", "You will be hungry again in one hour.", "When you squeeze an orange, orange juice comes out, because that's what's inside.", "The fortune you seek is in another cookie", "Error 404: Fortune not Found.", "Ignore Previous Cookie", "Pick another Fortune Cookie", "Some fortune cookies contain no fortune", "I wish I knew my own future", "Be careful or you could fall for some tricks today.", "Your love of music will be an important part of your life.", "Adventure can be real happiness.", "Say hello to others. You will have a happier day.", "Good news will come to you by mail. Happiness will bring you good luck.", "In 20 seconds you will breath.", "Don’t be discouraged, because every wrong attempt discarded is another step forward.");
	var thing = [Math.floor(Math.random() * 16)];
	document.getElementById("cookie").innerHTML = random[thing];
}
