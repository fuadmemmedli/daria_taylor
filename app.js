const homee = document.getElementById('home');
const aboutt = document.getElementById('about');
const portt = document.getElementById('port')
const contactt = document.getElementById('contact');
const blogg = document.getElementById('blog');

const opc = document.getElementsByClassName('opaCity');
const bdy_port = document.getElementsByClassName('body__about')

// homee.addEventListener('click',()=>{
//     if (opc.style.display === "none") {
//         opc.style.display = "block";
//     } else {
//         opc.style.display = "none";
//     }  
// })
homee.addEventListener("click", function() {
    opc.style.display = "block";
  })

