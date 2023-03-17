function keydownevent(event) {
    let element = document.getElementById('circle')
    let leftwidth = element.offsetLeft
    let height = element.offsetTop
    if (event.key == "ArrowLeft") element.style.left = parseInt(leftwidth) - 10 + 'px'
    if (event.key == "ArrowRight") element.style.left = parseInt(leftwidth) + 10 + 'px'
    if (event.key == "ArrowUp") element.style.top = parseInt(height) - 10 + 'px'
    if (event.key == "ArrowDown") element.style.top = parseInt(height) + 10 + 'px'
}


// event listener
function loaded() {
    document.addEventListener('keydown', keydownevent)
}

document.addEventListener('DOMContentLoaded', loaded)