function keydownevent(event) {
    let element = document.getElementById('circle')
    let leftwidth = element.offsetLeft
    let height = element.offsetTop
    if (event.key == "ArrowLeft") element.style.left = parseInt(leftwidth) - 10 + 'px'
    if (event.key == "ArrowRight") element.style.left = parseInt(leftwidth) + 10 + 'px'
    if (event.key == "ArrowUp") element.style.top = parseInt(height) - 10 + 'px'
    if (event.key == "ArrowDown") element.style.top = parseInt(height) + 10 + 'px'
}

// change color 
function changebg(){
    let element = document.getElementById('circle')
    element.style.backgroundColor = "blue"
}


// event listener
function loaded() {
    document.addEventListener('keydown', keydownevent)
    document.getElementById("circle").addEventListener('click',changebg)
}

document.addEventListener('DOMContentLoaded', loaded)