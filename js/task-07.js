const textController = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


const textResizing = () => {
  text.style.fontSize = `${textController.value}px`;
};

textController.addEventListener('input', textResizing);