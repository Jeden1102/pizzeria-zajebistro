// MENU
burger.onclick = side;
function side(){
    
    boczne.classList.toggle('drugie-menu');
   
}
//SCROLL BANER

function bannerAppear(){
    var introText = document.querySelector('.baner');
    var container = document.querySelector('.container');
    var containerPosition = container.getBoundingClientRect().bottom;
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight /999;
  
    if(containerPosition < screenPosition){
        introText.classList.add('baner-second');
    }
    else{
        introText.classList.remove('baner-second');
    }
}
window.addEventListener('scroll', bannerAppear);

//SCROLL POWROT 

function upAppear(){
    var introText = document.querySelector('.gora');
    var container = document.querySelector('.container');
    var containerPosition = container.getBoundingClientRect().bottom;
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight /2;
  
    if(containerPosition < screenPosition){
        introText.classList.add('potem');
    }
    else{
        introText.classList.remove('potem');
    }
}
window.addEventListener('scroll', upAppear);

//ZAKRYWACZE 

function zakrywaczFest(){
    var introText = document.querySelector('.zakrywacz-one');
    var container = document.querySelector('.container');
    var containerPosition = container.getBoundingClientRect().bottom;
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight /2;
    console.log('eluwa');
    if(containerPosition < screenPosition){
        introText.classList.add('poZakrywacz');
    }
   
}
window.addEventListener('scroll', zakrywaczFest);

function zakrywaczFest2(){
    var introText = document.querySelector('.zakrywacz-two');
    var container = document.querySelector('.zakrywacz-one');
    var containerPosition = container.getBoundingClientRect().bottom;
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight /1.5;
    console.log('eluwa');
    if(containerPosition < screenPosition){
        introText.classList.add('poZakrywacz');
    }
   
}
window.addEventListener('scroll', zakrywaczFest2);

function zakrywaczFest3(){
    var introText = document.querySelector('.zakrywacz-three');
    var container = document.querySelector('.zakrywacz-two');
    var containerPosition = container.getBoundingClientRect().bottom;
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight /1.5;
    console.log('eluwa');
    if(containerPosition < screenPosition){
        introText.classList.add('poZakrywacz');
    }
   
}
window.addEventListener('scroll', zakrywaczFest3);