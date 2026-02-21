let output = document.getElementById("output")
let random_number = 0
let all_numbers = Array()
const copied = document.getElementById("copied")
for(let i = 0; i < 8; i++) {
    random_number = parseInt(Math.random() * 10)
    all_numbers.push(random_number)
}
let result = all_numbers.join("")
output.innerHTML = result

const copy = document.getElementById("CopyToClipboard")
copy.addEventListener("click", () => {
    navigator.clipboard.writeText(result)
    copied.style.display = "block"
})