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

function reloadPage() {
  console.log('Recarregar página chamado');
  window.location.relocass();  
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
    localStorage.setItem('theme', 'light');  // Armazena tema claro
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    footer.classList.remove('light-mode');
    footer.classList.add('dark-mode');
    themeButton.textContent = '🌙'; 
    localStorage.setItem('theme', 'dark');  // Armazena tema escuro
  }
}

// Aplica o tema salvo ao carregar a página
window.onload = function() {
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;
  const themeButton = document.querySelector('.control-theme');
  const footer = document.querySelector('.footer');

  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    themeButton.textContent = '🌙'; 
  } else {
    body.classList.add('light-mode');
    footer.classList.add('light-mode');
    themeButton.textContent = '☀️';
  }
};


