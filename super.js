var td = document.getElementsByTagName('td');
var a = document.getElementById('re');

//for(i=0; i<td.length; i++){
	//td[i].addEventListener('click', function(){
	//	 a.style.display = "block";	
//	})
//};


//То что выше открывает модульное окно
var save = document.getElementById('inp');
var val = document.getElementById('val');
var l = document.getElementById('l');






save.onclick=function(){
	if(val.value!=false){
	a.style.display = "none";
      }else{
      	alert("Пожалуйста введите значение");
      	(td.innerHTML =  val.value);

       };
      val.value = '';
 };

for (var i = 0; i<td.length;  i++) {
 td[i].addEventListener('click', function open(){
a.style.display = "block";
if(onclick=save){ 
this.innerHTML = val.value;
};
})
};
 

//То что выше функционал окна

				
			
function cancel(){
	a.style.display = "none";
	val.value = '';

};




//То что выше закрывает окно

var tday=document.getElementById("today");
var next=document.getElementById('next');
var back=document.getElementById('back');
var page=document.getElementsByClassName("main");
var mainIndex=1;

showMain();

function showMain(z){
	if(z<1){
		mainIndex=page.length;

	}else if(z>page.length){
		mainIndex=1;

	}
	for(var i=0; i<page.length; i++){
		page[i].style.display = 'none';
	}
	page[mainIndex-1].style.display='block';
}

function drop(z){
	showMain(mainIndex += z);
};
back.onclick=function(){
	drop(-1);

};
next.onclick=function(){
	drop(1);
};



tday.onclick=function(){

	if(mainIndex < 1){
		drop(1);
	} if(mainIndex>1){
		drop(-1);}
	
//}
	};

//Сверху функционал страниц 