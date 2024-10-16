function minimize() {
  console.log('Minimizar chamado');
  window.electronAPI.minimizeWindow();
}

function maximize() {
  console.log('Maximizar chamado');
  window.electronAPI.maximizeWindow();
}
 
function closeWindow() {
  console.log('Fechar chamado');
  window.electronAPI.closeWindow();
}

function toggleTheme() {
  const body = document.body;
  const themeButton = document.querySelector('.control-theme');
  const footer = document.querySelector('.footer');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    footer.classList.remove('dark-mode');
    footer.classList.add('light-mode');
    themeButton.textContent = '☀️';  
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    footer.classList.remove('light-mode');
    footer.classList.add('dark-mode');
    themeButton.textContent = '🌙'; 
  }
}
