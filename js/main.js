Vue.component('profile', {
   template: '<div class="profile">\n' +
      '         <div class="profile-head">\n' +
      '            <div class="nickname uk-animation-slide-top">\n' +
      '               <div class="overlay">\n' +
      '                  <div class="flex">\n' +
      '                     <div>\n' +
      '                        <h1>\n' +
      '                           <slot name="name"></slot>\n' +
      '                        </h1>\n' +
      '                        <p class="job">\n' +
      '                           <slot name="profession"></slot>\n' +
      '                        </p>\n' +
      '                     </div>\n' +
      '                     <div class="star">\n' +
      '                        <button>\n' +
      '                           <i class="fa fa-star" aria-hidden="true"></i>Star\n' +
      '                        </button>\n' +
      '                        <span class="quantity-star">0</span>\n' +
      '                     </div>\n' +
      '                  </div>\n' +
      '                  <div class="edit-profile">\n' +
      '                     <a href="#modal-full" uk-toggle>Редактировать профиль</a>\n' +
      '\n' +
      '                     <div id="modal-full" class="uk-modal-full" uk-modal>\n' +
      '                        <div class="uk-modal-dialog">\n' +
      '                           <button class="uk-modal-close-full delete-svg uk-close-large" type="button" uk-close></button>\n' +
      '                           <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>\n' +
      '                              <div class="uk-background-cover" style="background-image: url(\'img/photo.jpg\');" uk-height-viewport></div>\n' +
      '                              <div class="uk-padding-large">\n' +
      '                                 <h1>Headline</h1>\n' +
      '                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n' +
      '                              </div>\n' +
      '                           </div>\n' +
      '                        </div>\n' +
      '                     </div>\n' +
      '                  </div>\n' +
      '               </div>\n' +
      '            </div>\n' +
      '            <nav uk-sticky>\n' +
      '               <div class="responsive-nav">\n' +
      '                  <div class="responsive-burger__menu">\n' +
      '                     <div class="burger">\n' +
      '                        <span></span>\n' +
      '                     </div>\n' +
      '                     <div class="responsive-dropdown" uk-dropdown="mode: click; pos: bottom-justify; animation: uk-animation-fade">\n' +
      '                        <ul class="responsive-menu">\n' +
      '                           <li>\n' +
      '                              <a href="#">Главная</a>\n' +
      '                           </li>\n' +
      '                           <li>\n' +
      '                              <a href="#">Профориентационный тест</a>\n' +
      '                           </li>\n' +
      '                           <li>\n' +
      '                              <a href="#">Настройки</a>\n' +
      '                           </li>\n' +
      '                           <li>\n' +
      '                              <a href="#">Выход</a>\n' +
      '                           </li>\n' +
      '                        </ul>\n' +
      '                     </div>\n' +
      '                  </div>\n' +
      '               </div>\n' +
      '               <div class="normal-nav">\n' +
      '                  <ul class="menu-1">\n' +
      '                     <li>\n' +
      '                        <a href="#">Главная\n' +
      '                           <i class="fa fa-home" aria-hidden="true"></i>\n' +
      '                        </a>\n' +
      '                     </li>\n' +
      '                     <li>\n' +
      '                        <a href="#" title="Профориентационный тест">Проф. тест\n' +
      '                           <i class="fa fa-graduation-cap" aria-hidden="true"></i>\n' +
      '                        </a>\n' +
      '                     </li>\n' +
      '                  </ul>\n' +
      '                  <div class="ava">\n' +
      '                     <div class="ava-photo">\n' +
      '                        <slot name="img"></slot>\n' +
      '                     </div>\n' +
      '                  </div>\n' +
      '                  <ul class="menu-2">\n' +
      '                     <li>\n' +
      '                        <a href="">Настройки\n' +
      '                           <i class="fa fa-cog" aria-hidden="true"></i>\n' +
      '                        </a>\n' +
      '                     </li>\n' +
      '                     <li>\n' +
      '                        <a href="signin.html">Выход\n' +
      '                           <i class="fa fa-sign-out" aria-hidden="true"></i>\n' +
      '                        </a>\n' +
      '                     </li>\n' +
      '                  </ul>\n' +
      '               </div>\n' +
      '            </nav>\n' +
      '         </div>\n' +
      '      </div>'
})

let advice = (title, date, desc, author) => ({
   title,
   date,
   desc,
   author
});

let myAdvice = [
   advice(
      'Frontend разработка',
      '19/07/2018',
      'Работаю Frontend разработчиком 3 года в такой то такой компаний и много много текста'
   ),
   advice(
      'Пару слов о Backend',
      '15/04/2018',
      'Работал Backend разработчиком 2 года, могу дать простые советы'
   ),
   advice(
      'Web Design',
      '04/01/2018',
      'Фрилансил веб дизайнеров несколько месяцев, поделюсь рекомендациями по фотошопу и посторению UX/UI'
   ),
   advice(
      'Web Design',
      '04/01/2018',
      'Фрилансил веб дизайнеров несколько месяцев, поделюсь рекомендациями по фотошопу и посторению UX/UI'
   ),
];

let otherAdvice = [
   advice(
      'Machine learning',
      '14/11/2017',
      'Опыт работы в ML 4 года',
      'Erkebulan Duisebay'
   ),
];

function removeDesc() {
   let deleteElement = document.getElementById('how-to-learn-box');
   document.body.removeChild(deleteElement);
}

function addDesc() {
   let mainBox = document.getElementById('how-learn-box');
   let howToLearnBox = document.createElement('div');
   let createDeleteBox = document.createElement('div');
   let createDelete = document.createElement('i');
   let createInputBox = document.createElement('div');
   let createInput = document.createElement('input');

   howToLearnBox.className = 'how-to-learn';
   createDeleteBox.className = 'how-to-learn__delete';
   createDelete.setAttribute('aria-hidden', 'true');
   createDelete.setAttribute('onclick', 'removeDesc()');
   createDelete.title = 'Удалить поле';
   createDelete.className = 'fa fa-minus-circle';
   createInputBox.className = 'how-to-learn__add';
   createInput.type = 'text';
   createInput.className = 'input-text';
   createInput.placeholder = 'Краткое описание и ссылка на материал';

   let addMainBox = mainBox.appendChild(howToLearnBox);
   let addCreateDeleteBox = addMainBox.appendChild(createDeleteBox);
   let addCreateInputBox = addMainBox.appendChild(createInputBox);

   addCreateDeleteBox.appendChild(createDelete);
   addCreateInputBox.appendChild(createInput);
};

new Vue({
   el: '#app',
   data: {
      tabs: ['Мои рекомендации', 'Сохраненные рекомендации'],
      myAdvice: myAdvice,
      otherAdvice: otherAdvice,
      currentTab: 0,
      stepsList: false,
      skills: [
         'HTML5',
         'CSS3',
         'JavaScript',
         'jQuery',
         'VueJS',
         'Git',
         'Webpack',
         'SASS',
         'Gulp',
         'npm',
      ]
   }
});