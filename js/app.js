'use strict'

const proyectos = document.querySelector('.proyectos')
// console.log( proyectos )
const descripcion = document.querySelector('.landing .descripcion')

window.addEventListener('scroll' ,()=>{

    let pixel = window.scrollY
    let alturaVentana = window.innerHeight
    let distancia = proyectos.offsetTop

    if( pixel >= distancia - (alturaVentana/2)){
        descripcion.classList.add('activo')
        proyectos.classList.add('activo')
    }
    else{
        descripcion.classList.remove('activo')
        proyectos.classList.remove('activo')
    }
})