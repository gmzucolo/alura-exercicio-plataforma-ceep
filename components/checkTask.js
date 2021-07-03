const CheckBotton = () => {
    const checkButton = document.createElement("button")

    checkButton.classList.add("check-button")
    checkButton.innerHTML = "Concluir"

    checkButton.addEventListener("click", taskCheck)    

    return checkButton
}

const taskCheck = (event) => {
    const checkButton = event.target

    const checkedTask = checkButton.parentElement

    checkedTask.classList.toggle("done")
}

export default CheckBotton