const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const logo = document.querySelector('.logo')
const link = document.querySelectorAll('.list li')

btn.onclick = function(){
    this.classList.toggle('active')
    container.classList.toggle('active')
    logo.classList.toggle('active')

    var link_array= [...link]
    link_array.forEach((link) =>{
        link.classList.toggle("active")
    })
}
