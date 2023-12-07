let prev = document.getElementById('prev')
let next = document.getElementById('next')

let circles = document.querySelectorAll('.circle')
let cards = document.querySelectorAll('.card')

let fullProgress = document.getElementById('fullProgress')


let activeCount = 1
next.addEventListener('click', function () {
    activeCount++


    if (activeCount > circles.length) {
        activeCount == circles.length
    }

    disabledFunc()
})

prev.addEventListener('click', function () {
    activeCount--


    if (activeCount < 0) {
        activeCount == 1
    }

    disabledFunc()
})

function disabledFunc() {

    circles.forEach((circle, index) => {
        if (index < activeCount) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')

        }
    })

    cards.forEach((card, index) => {
        if (index < activeCount) {
            card.classList.add('active1')
        } else {
            card.classList.remove('active1')
        }
    })

    if (activeCount == 1) {
        prev.disabled = true
    } else if (activeCount == circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }


    let actives = document.querySelectorAll('.active')

    fullProgress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
}

