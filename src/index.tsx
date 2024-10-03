import React from 'react';
import ReactDOM from 'react-dom';
import { Hello } from './Hello';

console.log("### --------------- app start --------------- ###")
const container = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  container
);

const removeReactComponent = document.getElementById('remove-react-component');
removeReactComponent?.addEventListener('click', () => {
  container?.firstElementChild?.remove()
});

const removeContainer = document.getElementById('remove-container');
removeContainer?.addEventListener('click', () => {
  container?.remove();
});

const refreshWindow = document.getElementById('refresh-window');
refreshWindow?.addEventListener('click', () => {
  location.reload();
});
