import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';

const renderAddButton = ( element ) => {
  const fabButton = document.createElement('button');
  fabButton.innerText = '+';
  fabButton.classList.add('fab-button');
  element.append( fabButton );

  //TODO: 
  fabButton.addEventListener('click', () => {
    showModal();
  })
}

export {
  renderAddButton,
}

