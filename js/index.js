var jsHome = document.querySelector("#indexHome");
var jsClass = document.querySelector("#indexClass");
var jsCart = document.querySelector("#indexCart");
var jsMine = document.querySelector("#indexMine");

var jsImg1 = document.querySelector("#img1");
var jsImg2 = document.querySelector("#img2");
var jsImg3 = document.querySelector("#img3");
var jsImg4 = document.querySelector("#img4");

jsHome.addEventListener("click",home,false);

function home(){
	jsImg1.src="../image/index_r.png";
}

jsClass.addEventListener("click",classes,false);

function classes(){
	jsImg2.src="image/shopping_r.png";
}
