const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const outputContent = nameOutput.textContent;

const handleInputChange = event =>{
    let inputValue = event.target.value.trim();
    if(inputValue){
      nameOutput.textContent = inputValue
    } else {
      nameOutput.textContent = "Anonymous"
    }
}
nameInput.addEventListener('input', handleInputChange);

