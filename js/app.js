'use strict'

// const color = document.querySelector('.color1')

// window.addEventListener('scroll',()=>{
//     color.classList.add('activo')

// })
// let efectoScroll = ( objeto )=>{
//     window.addEventListener('scroll' , ()=>{

//         let pixel = window.scrollY
//         let altoVentana = window.innerHeight
//         let distanciaHola = objeto.offsetTop
//         console.log( distanciaHola )
    
//         let calculoHola = distanciaHola - (altoVentana / 1.5 )
    
//         if(pixel >= calculoHola){
//             objeto.classList.add('activo')
//         }
//     })
// }

let letters = $(".drift").text().split("");
let max     = 70;
let factor  = 1.3;
let length  = letters.length;
let ratio   = max / (Math.pow(factor, length - 1));

$(".drift").html("");

$(letters).each(function(i,element){
  let rotation = Math.pow(factor,i) * ratio
  let span = $("<span>"+element+"</span>")
  $(".drift").append(span);
  (function(index){
    if(index > 0){
      setTimeout(function(){
        $(span).css({
          "transform":"rotate("+(Math.pow(factor,index)) * ratio +"deg)"
        })
      }, 1000 + (50*index))
    }
  })(i)
})