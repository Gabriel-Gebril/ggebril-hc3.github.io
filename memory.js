var fDisplay = document.querySelector("#fName");
var rDisplay = document.querySelector("#relationship");
var cBtn = document.querySelectorAll(".cBtn");
var nCBtn = document.querySelector("#nC");
var dHard = document.querySelector("#dHard");
var msg = document.querySelector("#msg");
var ezBtn = document.querySelector("#ezBtn");
var family = [
	{name: "John", relationship: "Brother", url: "photos/brother.jpg"},
	{name: "Syntheia", relationship: "Grandchild", url: "photos/grandchild1.jpg"},
	{name: "Sam",relationship: "Grandchild", url: "photos/grandchild2.jpg"},
	{name:"Emily",relationship: "Neice", url: "photos/neice1.jpg"},
	{name: "Nadya",relationship: "Neice", url: "photos/neice2.jpg"},
	{name:"Riley", relationship:"Neice", url: "photos/neice3.jpg"},
	{name:"Nathan", relationship:"Nephew", url: "photos/nephew1.jpg"},
	{name:"Ryan", relationship:"Nephew", url: "photos/nephew2.jpg"},
	{name:"Fumiko", relationship:"Sister", url: "photos/sister.jpg"}
]

function loadHard() {
	document.querySelector(".jumbotron").style.backgroundColor = "#76a4f2";
	msg.textContent = "";
	ezBtn.classList.remove("active");
	dHard.classList.add("active");
	var rChoice = Math.floor(Math.random() * 6);
	var fMem = Math.floor(Math.random() * 9);
	fDisplay.textContent = family[fMem].name;
	rDisplay.textContent = family[fMem].relationship;
	cBtn[rChoice].style.backgroundImage = "url(" + family[fMem].url + ")";
	cBtn[rChoice].setAttribute("id",family[fMem].name)
	var picked = [fMem];
	var randPic;
	for (var i = cBtn.length - 1; i >= 0; i--) {
		randPic = Math.floor(Math.random() * 9)
		while(picked.includes(randPic)){
			randPic = Math.floor(Math.random() * 9)
		}
		picked.push(randPic)
		if(i != rChoice){
			cBtn[i].style.backgroundImage = "url(" + family[randPic].url + ")";
			cBtn[i].setAttribute("id","wrong")
		}
	}
	for (var i = cBtn.length - 1; i >= 0; i--) {
	 cBtn[i].style.visibility="visible";
	}
}

function loadEZ(){
	document.querySelector(".jumbotron").style.backgroundColor = "#76a4f2";
	msg.textContent = "";
	ezBtn.classList.add("active");
	dHard.classList.remove("active");
	var rChoice = Math.floor(Math.random() * 3);
	var fMem = Math.floor(Math.random() * 9);
	fDisplay.textContent = family[fMem].name;
	rDisplay.textContent = family[fMem].relationship;
	cBtn[rChoice].style.backgroundImage = "url(" + family[fMem].url + ")";
	cBtn[rChoice].setAttribute("id",family[fMem].name)
	var picked = [fMem];
	var randPic;
	for (var i = 2; i >= 0; i--) {
		cBtn[i].style.visibility="visible";
		randPic = Math.floor(Math.random() * 9)
		while(picked.includes(randPic)){
			randPic = Math.floor(Math.random() * 9)
		}
		picked.push(randPic)
		if(i != rChoice){
			cBtn[i].style.backgroundImage = "url(" + family[randPic].url + ")";
			cBtn[i].setAttribute("id","wrong")
		}
	}
	for (var i = cBtn.length - 1; i >= 3; i--) {
	 cBtn[i].style.visibility="hidden";
	}
}

loadHard();

ezBtn.addEventListener("click",loadEZ);

dHard.addEventListener("click",loadHard);

nCBtn.addEventListener("click", function(){
	nCBtn.textContent = "NEW FACES"
	if(ezBtn.classList.contains("active")){
		loadEZ();
	}else{
		loadHard();
	}
});

for (var i = cBtn.length - 1; i >= 0; i--) {
	cBtn[i].addEventListener("click",function(){

		if(this.id === fDisplay.textContent){
			msg.textContent = "Correct";
			nCBtn.textContent = "Try Again?"
			if(ezBtn.classList.contains("active")){
				for (var j = 2; j >= 0; j--) {
				cBtn[j].style.visibility = "visible";
				cBtn[j].style.backgroundImage = "url(" + family.find(x => x.name === fDisplay.textContent).url + ")";
				cBtn[j].setAttribute("id", fDisplay.textContent)
			}
			}else{
				for (var j = cBtn.length - 1; j >= 0; j--) {
				cBtn[j].style.visibility = "visible";
				cBtn[j].style.backgroundImage = "url(" + family.find(x => x.name === fDisplay.textContent).url + ")";
				cBtn[j].setAttribute("id", fDisplay.textContent)
			}
			}
			
		}else{
			msg.textContent = "Try Again!";
			this.style.visibility = "hidden";
		}
	});
}