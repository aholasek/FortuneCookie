function fcookie()
{
	var English = new Array("Try Again Later... I'm Sleeping... [Yes, Fortune Cookies Need Their Sleep Too]", "1", "2", "3");
	var Spanish = new Array("Trate mas tarde", "Uno", "Dos", "Tres");
	var  a = list[English], b = list(Spanish);
	list[Spanish] = a;
	list[English] = b;
	var thing = [Math.floor(Math.random() * 4)];
	document.getElementById("cookie").innerHTML = [thing];
}