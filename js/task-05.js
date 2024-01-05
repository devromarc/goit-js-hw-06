const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function handleInputChange(event) {
    if (event.currentTarget.value === '') {
      nameOutput.textContent = 'Anonymous';
    }
    nameOutput.textContent = event.currentTarget.value;
  }

nameInput.addEventListener('input', handleInputChange);

