function back() {
    window.location.href = "https://miroshkin0207.github.io/miroshkin"
}

let string = ""
function input(text) {
    string += text.innerHTML
    document.querySelector(".output").innerHTML = string
}