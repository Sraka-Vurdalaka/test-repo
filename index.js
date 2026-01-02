document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.getElementById('burgerMenu');
  const headerMenu = document.getElementById('headerMenu');
  
  burgerMenu.addEventListener('click', function() {
      // Переключаем классы для бургера и меню
      burgerMenu.classList.toggle('active');
      headerMenu.classList.toggle('active');
      
      // Блокируем/разблокируем прокрутку страницы
      if (headerMenu.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'auto';
      }
  });
  
  // Закрываем меню при клике на ссылку
  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach(link => {
      link.addEventListener('click', function() {
          burgerMenu.classList.remove('active');
          headerMenu.classList.remove('active');
          document.body.style.overflow = 'auto';
      });
  });
  
  // Закрываем меню при клике вне его области (опционально)
  document.addEventListener('click', function(event) {
      const isClickInsideMenu = headerMenu.contains(event.target);
      const isClickOnBurger = burgerMenu.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnBurger && headerMenu.classList.contains('active')) {
          burgerMenu.classList.remove('active');
          headerMenu.classList.remove('active');
          document.body.style.overflow = 'auto';
      }
  });
});