function irAInstagram() {
    location.href = "https://www.instagram.com/aguss_heredia__/";
}

const insta = document.getElementById('instagram');

insta.addEventListener('click' ,irAInstagram);


function irAWsp() {
    location.href ="https://web.whatsapp.com/";
}

const wsp = document.getElementById('wsp');

wsp.addEventListener('click', irAWsp);


let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click' , toggleText);

function toggleText() {
    hideText.classList.toggle('show');
    if(hideText.classList.contains('show')){
        hideText_btn.innerHTML = 'Leer Menos'
    }
    else{
        hideText_btn.innerHTML = 'Leer Mas'
    }
}