document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".review-tabs__button");
  const panels = document.querySelectorAll(".review-tabs__panel");

  if (!buttons.length || !panels.length) return; // Проверяем, есть ли нужные элементы

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const tab = button.getAttribute("data-tab");
      const activePanel = document.querySelector(`.review-tabs__panel[data-tab="${tab}"]`);

      if (!activePanel) return; // Проверяем, существует ли панель для этого таба

      // Удаляем активные классы
      buttons.forEach(btn => btn.classList.remove("review-tabs__button--active"));
      panels.forEach(panel => panel.classList.remove("review-tabs__panel--active"));

      // Добавляем активные классы
      button.classList.add("review-tabs__button--active");
      activePanel.classList.add("review-tabs__panel--active");
    });
  });
});
