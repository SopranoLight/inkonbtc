

// function scrollTo(element){
//     window.scroll({
//         left: 0,
//         top: element.offsetTop,
//         behavior: 'smooth'
//     })
// }

function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth'
    })
}

var aboutHeader = document.querySelector('.button')
var anti = document.querySelector('#anti')



aboutHeader.addEventListener('click', () => {
    scrollTo(anti);

}
)

var garboard = document.querySelector('.buttonnn')
var who = document.querySelector('#who')

garboard.addEventListener('click', () => {
    scrollTo(who);

}
)


var garboard = document.querySelector('.buttonn')
var society = document.querySelector('#society')

garboard.addEventListener('click', () => {
    scrollTo(society);

}
)