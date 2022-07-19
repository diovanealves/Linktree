const btn = document.querySelector('.btn')
const body = document.querySelector('.body')
const logo = document.querySelector('.logo')
const link = document.querySelectorAll('.list li')

btn.onclick = function(){
    this.classList.toggle('active')
    body.classList.toggle('active')
    logo.classList.toggle('active')

    var link_array= [...link]
    link_array.forEach((link) =>{
        link.classList.toggle("active")
    })
}
