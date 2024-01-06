const symbolInput = document.querySelector('#validation-input');


const handleEvent = event => {
    const inputTrim = event.target.value.trim();
    // console.log(event)
    if (
        inputTrim.length ===
        Number(event.target.dataset.length)
      ) {
        symbolInput.classList.add('valid');
        symbolInput.classList.remove('invalid');
      } else {
        symbolInput.classList.add('invalid');
        symbolInput.classList.remove('valid');
      }
}

  

symbolInput.addEventListener("blur", handleEvent)