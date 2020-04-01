function delta(){
    let varOne = parseInt(document.querySelector("#value1").value);
    let varTwo= parseInt(document.querySelector("#value2").value);
    let varThree= parseInt(document.querySelector("#value3").value);
    let wynik = document.querySelector(".wynik");
    
    let suma = varTwo*varTwo-(4*varOne*varThree);
    
    
    wynik.innerHTML=suma;
   
   
    deltaTwo();
}
function deltaTwo(){
    let wynik = document.querySelector(".wynik");
    let delta = wynik.innerHTML;
    let piewiastek = document.querySelector(".pierw");
    let pierwiastki = document.querySelector(".pierwiastki");
    
    piewiastek.innerHTML=Math.sqrt(delta);
  
    if(delta<0){
        piewiastek.innerHTML="Delta ujemna";
    }
    if(delta==0){
        pierwiastekOne();
    }
    if(delta>0){
        pierwiastkiDwa();
    }
    kolorowanie();
    
}
function pierwiastekOne(){
    let dol = document.querySelector('.pierwiastek-dol');
    let b = document.querySelector('.b');
    let delta = document.querySelector('.delta');
    let varOne = parseInt(document.querySelector("#value1").value);
    let varTwo= parseInt(document.querySelector("#value2").value);
    b.innerHTML = -varTwo;
    dol.innerHTML = 2*varOne;
}
function pierwiastkiDwa(){
    
    let b = document.querySelector('.b');
    let delta = document.querySelector('.delta');
    let c = document.querySelector('.c');
    let delta2 = document.querySelector('.delta2');
    let dol = document.querySelector('.pierwiastek-dol');
    let dol2 = document.querySelector('.pierwiastek-dol2');
    let varOne = parseInt(document.querySelector("#value1").value);
    let varTwo= parseInt(document.querySelector("#value2").value);
    let wynik = parseInt(document.querySelector(".wynik").innerHTML);
    b.innerHTML = -varTwo;
    delta.innerHTML = "+" + "√" + wynik;
    dol.innerHTML = 2*varOne;
  
    c.innerHTML = -varTwo;
    delta2.innerHTML = "-" +"√"+wynik;
    dol2.innerHTML = 2*varOne;
}
function kolorowanie(){
    let wynik = document.querySelector(".wynik");
    let wynik2 = document.querySelector(".pierw");
    wynik.style.background="black";
    wynik2.style.background="black";
}