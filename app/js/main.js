// Создаем функцию которая скрывает табы кроме перого
// Create a function that hides the tabs except the first
// let tab = document.querySelectorAll(".info-header-tab"),
//   info = document.querySelector(".info-header"),
//   tabContent = document.querySelectorAll(".info-tabcontent");

// function hideTabContent(a) {
//   for (let i = a; i < tabContent.length; i++) {
//     tabContent[i].classList.remove("show");
//     tabContent[i].classList.add("hide");
//   }
// }

// hideTabContent(1);

// // Создаем функцию которая показывет табы
// // Create a function that shows tabs
// function showTabContent(b) {
//   if (tabContent[b].classList.contains("hide")) {
//     tabContent[b].classList.remove("hide");
//     tabContent[b].classList.add("show");
//   }
// }

// // Создаем обработчик событий при клике на табы
// // Create an event handler when clicking on tabs
// info.addEventListener("click", function (event) {
//   let tardent = event.target;
//   if (tardent && tardent.classList.contains("info-header-tab")) {
//     for (let i = 0; i < tab.length; i++) {
//       if (tardent == tab[i]) {
//         hideTabContent(0);
//         showTabContent(i);
//         break;
//       }
//     }
//   }
// });

// tab.forEach(element => {
//     element.addEventListener('click', () =>{
//         tab.forEach(item => {
//             item.classList.remove('active')
//         });
//         element.classList.add('active')
//     }) 
// });


// Получаем список всех табов и соответствующих контентов
const tabs = document.querySelectorAll('.info-header-tab');
const tabContents = document.querySelectorAll('.info-tabcontent');
const tabsSlides = document.querySelectorAll('.info-header-tab');
const tabContentsSlides = document.querySelectorAll('.info-tabcontent');
const btnQuestion = document.querySelectorAll('.description-info-header')
const questionText = document.querySelectorAll('.description-info__text')

// Создаем функцию для обработки клика по табу
function onTabClick(event) {
 
  // Получаем id выбранного таба
  const selectedTabId = event.target.getAttribute('data-tab');

  // Устанавливаем класс "active" для выбранного таба и контента, а также удаляем этот класс у остальных табов и контентов
  tabs.forEach(tab => {
    if (tab.getAttribute('data-tab') === selectedTabId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  tabContents.forEach(tabContent => {
    if (tabContent.getAttribute('data-tab') === selectedTabId) {
      tabContent.classList.add('show');
    } else {
      tabContent.classList.remove('show');
    }
  });
}

// Добавляем обработчик клика для каждого таба
tabs.forEach(tab => {
  tab.addEventListener('click', onTabClick);
});


// Mobile
function onTabClickMobile(event) {
 
  // Получаем id выбранного таба
  const selectedTabId = event.target.getAttribute('data-tab');

  // Устанавливаем класс "active" для выбранного таба и контента, а также удаляем этот класс у остальных табов и контентов
  tabsSlides.forEach(tab => {
    if (tab.getAttribute('data-tab') === selectedTabId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });tabContentsSlides

  tabContentsSlides.forEach(tabContent => {
    if (tabContent.getAttribute('data-tab') === selectedTabId) {
      tabContent.classList.add('show');
    } else {
      tabContent.classList.remove('show');
    }
  });
}

// Добавляем обработчик клика для каждого таба
tabs.forEach(tab => {
  tab.addEventListener('click', onTabClickMobile);
});



// получаем список всех заголовков
const headers = document.querySelectorAll('.description-info-header');

// добавляем обработчик клика на каждый заголовок
headers.forEach(header => {
  header.addEventListener('click', () => {
    // находим блок .description-info__text, который является следующим соседом элементом после заголовка
    const text = header.nextElementSibling;
    
    // переключаем класс .visible на блоке .description-info__text
    text.classList.toggle('active-question');
  });
});



let swiperTopic = new Swiper('.slider-mobile-topic', {
  // Optional parameters
  slidesPerView: 2.1,
  spaceBetween: 10,
  loop: true,

  // If we need pagination
  pagination: false,

  // Navigation arrows
  navigation: false,

  // And if we need scrollbar
  scrollbar: false,
});


//  let swiperInfo = new Swiper('.slider-mobile-info', {
//   // Optional parameters
//   slidesPerView: 1,
//   spaceBetween: 10,
//   loop: true,

//   // If we need pagination
//   pagination: false,

//   // Navigation arrows
//   navigation: false,

//   // And if we need scrollbar
//   scrollbar: false,
// });

// swiperTopic.controller.control = swiperInfo
// swiperInfo.controller.control = swiperTopic