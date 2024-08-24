const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ul");

buttonElement.onclick = ev => {
    ev.preventDefault();

    if (inputElement.value) {
        const textElement = document.createElement("span");
        textElement.innerHTML = inputElement.value;

        const buttonRemove = document.createElement("button");
        buttonRemove.innerHTML = "Remover";
        buttonRemove.style.marginLeft = "10px";
        
        const liElement = document.createElement("li");
        liElement.appendChild(textElement);
        liElement.appendChild(buttonRemove);
        liElement.style.marginBottom = "10px";

        buttonRemove.onclick = () => {
            ulElement.removeChild(liElement);
        }

        ulElement.appendChild(liElement);
        inputElement.value = "";
    }
};
