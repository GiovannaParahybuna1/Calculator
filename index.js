//typing functionality in the calculator
const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")

//characters allowed
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]


//apply functionality to buttons
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.getElementById("clear").addEventListener("click", function () {
  input.value = ""
  input.focus()
})

input.addEventListener("keydown", function (ev) {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === "Enter") {
    calculate()
  }
})

document.getElementById("equal").addEventListener("click", calculate)

function calculate() {
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  const result = eval(input.value)
  //function eval
  resultInput.value = result
  resultInput.classList.remove("error")
}

//copy to clipboard
document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
  const button = ev.currentTarget
  if (button.innerText === "Copy") {
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = "Copy"
    button.classList.remove("success")
  }
})

//theme change functionality
document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#000000")
    root.style.setProperty("--border-color", "#A9A9A9")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4682B4")
    main.dataset.theme = "light"
  } else {
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#000000")
    root.style.setProperty("--font-color", "#000000")
    root.style.setProperty("--primary-color", "#4169E1")
    main.dataset.theme = "dark"
  }
})