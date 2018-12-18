document.getElementById("jsOnClick").onclick = submitName;
function submitName(){
	var name=document.getElementById("name").value;
	if(name.length>0){
		var re=new RegExp("[A-z\s+]");
		console.log(re.test(name));
		document.getElementById("headerTitle").innerHTML=name;
		if(b64_md5(name)=="tchYk+pp0F/zUFei6x6jeQ"){
			document.getElementById("hit").innerHTML="You have an email in your sjtu mail box. Maybe you need the key 8dBJ97iTv4YBxmBFuAHVkA"
		}
		
	};
}