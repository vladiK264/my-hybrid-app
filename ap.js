// Простая логика переключения экранов для демонстрации
function switchScreen(screenId) {
  // Скрываем все экраны
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));

  // Деактивируем все кнопки навигации
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => btn.classList.remove('active'));

  // Показываем целевой экран
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  // Подсвечиваем активную кнопку навигации
  const activeNavBtn = Array.from(navButtons).find(btn => 
    btn.getAttribute('onclick').includes(screenId)
  );
  if (activeNavBtn) {
    activeNavBtn.classList.add('active');
  }
}