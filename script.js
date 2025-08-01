function back() {
    window.location.href = "https://miroshkin0207.github.io/miroshkin"
}

let output = document.querySelector(".output")
let enteredChars = []
let numCurrentChar = 0

function inputChar(text) {
    enteredChars.push(text.innerHTML)

    for (; numCurrentChar < enteredChars.length; numCurrentChar++) {
        output.innerHTML += enteredChars[numCurrentChar]
    }
}

let result = ""
function printResult() {
    if (enteredChars.length > 0) {
        let countSpecChars = 0

        for (let i = 0; i < enteredChars.length; i++) {
            let char = enteredChars[i]

            switch (char) {
                case "×":
                    result += "*"
                    break
                case "÷":
                    result += "/"
                    break
                case "^":
                    result = "Math.pow(" + result + ", "
                    countSpecChars++
                    break
                case ",":
                    result += "."
                    break
                case "√":
                    result += "Math.sqrt("
                    countSpecChars++
                    break                   
                default:
                    result += char
                    break
            }
        }

        while (countSpecChars > 0) {
            result += ")"
            countSpecChars--
        }

        result = eval(result) 
        enteredChars = []
        for (let i = 0; i < result.length; i++) {
            enteredChars.push(result[i])
        }

        numCurrentChar = enteredChars.length
        output.innerHTML = result
    }
}

function delLastChar() {
    if (enteredChars.length >= 1) {
        enteredChars.pop()
        numCurrentChar--
        output.innerHTML = output.innerHTML.replace(/.$/, "")
    }   
}

function clearInput() {
    output.innerHTML = ""
    result = ""
    numCurrentChar = 0
    enteredChars = []
}
