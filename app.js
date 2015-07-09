function fcookie()
{
	var random = new Array("Try Again Later... I'm Sleeping... [Yes, Fortune Cookies Need Their Sleep Too]", "1", "2", "3");
	var thing = [Math.floor(Math.random() * 4)];
	document.getElementById("cookie").innerHTML = random[thing];
}
function save()
{
	alert('hi');
}