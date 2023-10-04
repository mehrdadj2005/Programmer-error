let body = document.querySelector('body')

function center() {
    let x = 1
    let showDiv = setInterval(() => {
        x += 2.5
        let div = document.createElement('div')
        div.classList = 'center'
        div.style = ` transform: rotate(-${x}deg) ; `
        body.appendChild(div)
    }, 100);
    setTimeout(() => {
        clearInterval(showDiv)
    }, 3800);
}

center()


function tlToDr() {
    let x = 1
    let t = 1
    let l = 1
    let showDiv = setInterval(() => {
        x += 2.5
        t += 1
        l += 2.5
        let div = document.createElement('div')
        div.classList = 'tlToDr'
        div.style = ` transform: rotate(-${x}deg) ; top:${t}vh; left:${l}vh;`
        body.appendChild(div)
    }, 100);
    setTimeout(() => {
        clearInterval(showDiv)
    }, 3800);
}

tlToDr()

function trToDl() {
    let x = 1
    let t = 1
    let r = 1
    let showDiv = setInterval(() => {
        x += 2.5
        t += 1
        r += 2.5
        let div = document.createElement('div')
        div.classList = 'trToDl'
        div.style = ` transform: rotate(-${x}deg) ; top:${t}vh; right:${r}vh;`
        body.appendChild(div)
    }, 100);
    setTimeout(() => {
        clearInterval(showDiv)
    }, 3800);
}

trToDl()


function drToTl() {
    let x = 1
    let t = 1
    let r = 1
    let showDiv = setInterval(() => {
        x += 2.5
        t += 2.5
        r += 2.5
        let div = document.createElement('div')
        div.classList = 'drToTl'
        div.style = ` transform: rotate(-${x}deg) ; bottom:${t}vh; right:${r}vh;`
        body.appendChild(div)
    }, 100);
    setTimeout(() => {
        clearInterval(showDiv)
    }, 3800);
}

drToTl()


function dlToTr() {
    let x = 1
    let b = 1
    let l = 1
    let showDiv = setInterval(() => {
        x += 2.5
        b += 2.5
        l += 2.5
        let div = document.createElement('div')
        div.classList = 'dlToTr'
        div.style = ` transform: rotate(-${x}deg) ; bottom:${b}vh; left:${l}vh;`
        body.appendChild(div)
    }, 100);
    setTimeout(() => {
        clearInterval(showDiv)
    }, 3800);
}

dlToTr()


setTimeout(() => {
    let error = document.createElement('h1')
    error.innerText = 'ERROR'
    body.appendChild(error)
}, 4000);


