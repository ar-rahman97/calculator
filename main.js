function display(val) {
    document.getElementById('result').innerHTML += val
    return val
}

function jawapan() {
    let s = document.getElementById('result').innerHTML
    let y = eval(s)
    document.getElementById('jwpn').innerHTML = y
    console.log(y)
    return y
}

function cleartext() {
    document.getElementById('result').innerHTML = ''
}

function padam() {
    let s = document.getElementById('result').innerHTML
    let y = s.slice(0, -1)
    document.getElementById('result').innerHTML = y
    return y
}

function updateInputValue() {
    const input = document.getElementById('myInput');
    const iconContainer = document.getElementById('iconContainer');
    const animatedIcon = '<i class="fa-regular fa-rectangle-xmark"></i>';
    input.value = animatedIcon;
    iconContainer.innerHTML = animatedIcon;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myInput').addEventListener('input',updateInputValue)
})