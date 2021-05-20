// import mysiteImage from '../images/mysite_image.png';

const headerLogoText = 'Sergey Denisenko';

const aboutTitle = 'Sergey Denisenko';
const aboutSubtitle = 'Frontend Developer';
const footerCopyRightText = ' 2021 Sergey Denisenko';

const footerMenuLinkMainPageText = 'Main page';

const footerMenuLinkYP = 'https://praktikum.yandex.ru';
const footerMenuLinkGH = 'https://github.com/Sergey-Denisenko';
const footerMenuLinkFB = 'https://www.facebook.com/serugi.denisenko';
const footerMenuLinkTG = 'https://telegram.me/SergeyDNSNK';

const aboutTextHeader = 'About the author';
const aboutTextParagraph = `Меня зовут Сергей Денисенко. Я Веб-разработчик. Прошел обучение в Яндекс Практикум, где овладел рядом технологий веб разработки:
HTML, CSS, язык программирования JavaScript, React JS, адаптивная вёрстка (grid, flex), методология БЭМ, ООП (объекты, методы, классы). И это мой дипломный проект!`;

const iconMenuImageAlt = 'Menu icon';
const mainPageImage = 'Main page image';

const stackSectionTitle = 'Stack & applications';
const stackSectionSubtitle = 'Technologies and tools that I use in my work';
// const stackListItems = ['HTML', 'CSS', 'JavaScript', 'React']

const stackListItems = [
  {
    name: 'HTML',
    iconLink: './images/stack-icons/HTML5_logo_and_wordmark.svg',
  },
  {
    name: 'CSS',
    iconLink: './images/stack-icons/CSS3_logo_and_wordmark.svg',
  },
  {
    name: 'JavaScript',
    iconLink: './images/stack-icons/Unofficial_JavaScript_logo_2.svg',
  },
  {
    name: 'React',
    iconLink: './images/stack-icons/React-icon.svg',
  },
  {
    name: 'node.js',
    iconLink: './images/stack-icons/Node.js_logo.svg',
  },
  {
    name: 'express.js',
    iconLink: './images/stack-icons/Expressjs.png',
  },
  {
    name: 'git',
    iconLink: './images/stack-icons/Git-logo.svg',
  },
  {
    name: 'mongoDB',
    iconLink: './images/stack-icons/MongoDB_Logo.svg',
  },
  {
    name: 'bash',
    iconLink: './images/stack-icons/Gnu-bash-logo.svg',
  },
  {
    name: 'GitHub',
    iconLink: './images/stack-icons/GitHub-Mark-120px-plus.png',
  },
  {
    name: 'VSC',
    iconLink: './images/stack-icons/Visual_Studio_Code_1.35_icon.svg',
  },
  {
    name: 'ESLint',
    iconLink: './images/stack-icons/ESLint_logo.svg',
  },
  {
    name: 'BEM',
    iconLink: './images/stack-icons/Logo_BEM.png',
  },
  {
    name: 'Postman',
    iconLink: './images/stack-icons/Postman_logo.png',
  },
  {
    name: 'Figma',
    iconLink: './images/stack-icons/Figma-1-logo.png',
  },
  {
    name: 'place for future skills...',
    iconLink: '',
  },
]

const projectSectionTitle = 'Projects & Links';
const projectSectionSubtitle = 'Completed projects - Training and Pet';

const projectListItems = [
  {
    type: 'Личный сайт',
    name: 'Sergey Denisenko',
    // imageSrc: './images/mysite_image.png',
    imageSrc: './' + 'images/mysite_image.png',
    link: '...',
  },
  {
    type: 'Учебный проект',
    name: '"News Explorer"',
    imageSrc: './images/newsexplorer_image.png',
    link: 'https://allnews.students.nomoreparties.site',
  },
  {
    type: 'Учебный проект',
    name: '"MESTO"',
    imageSrc: './images/mesto_image.png',
    link: 'https://world.students.nomoreparties.xyz',
  },
  {
    type: 'Учебный проект',
    name: '"Путешествие по России"',
    imageSrc: './images/russiantravel_image.png',
    link: 'https://sergey-denisenko.github.io/russian-travel/',
  },
  {
    type: 'Проект',
    name: '"Mondrian composition"',
    imageSrc: './images/mondrian_image.png',
    link: 'https://sergey-denisenko.github.io/mondrian-composition/',
  },
]

const myContactTitle = 'Contacts';
const myContactSubtitle = 'Сontacts for communication on cooperation issues';
const myContact = [
  {
    type: 'E-mail',
    name: 'sd.a2@yandex.ru',
    link: 'mailto:sd.a2@yandex.ru',
  },
  {
    type: 'Telegram',
    name: '@SergeyDNSNK',
    link: 'https://telegram.me/SergeyDNSNK'
  },
  {
    type: 'GitHub',
    name: 'https://github.com/Sergey-Denisenko',
    link: 'https://github.com/Sergey-Denisenko',
  },
]

const linkToEmptySection = '#emptySection';
const linkToProjectSection = '#project';
const linkToStackSection = '#stack';
const linkToContactSection = '#contact';

module.exports = {
  headerLogoText,

  aboutTitle,
  aboutSubtitle,
  footerCopyRightText,

  footerMenuLinkMainPageText,

  footerMenuLinkYP,
  footerMenuLinkGH,
  footerMenuLinkFB,
  footerMenuLinkTG,

  aboutTextHeader,
  aboutTextParagraph,

  iconMenuImageAlt,
  mainPageImage,

  stackSectionTitle,
  stackSectionSubtitle,
  stackListItems,

  projectSectionTitle,
  projectSectionSubtitle,
  projectListItems,

  myContactTitle,
  myContactSubtitle,
  myContact,

  linkToEmptySection,
  linkToProjectSection,
  linkToStackSection,
  linkToContactSection,

}


// // Текстовые константы используемые в блоке About
// const headerLogoText = 'NewsExplorer';
// const headerButtonAuthText = 'Авторизоваться';

// const footerInfoText = ' 2020 Supersite, Powered by News API';
// const footerMenuLinkMainPageText = 'Главная';
// const footerMenuLinkYPText = 'Яндекс.Практикум';
// const footerMenuLinkMainPage = '/';
// const footerMenuLinkYP = 'https://praktikum.yandex.ru';
// const footerMenuLinkGH = 'https://github.com/Sergey-Denisenko';
// const footerMenuLinkFB = 'https://www.facebook.com/serugi.denisenko';

// const aboutTextHeader = 'Об авторе';
// const aboutTextParagraph = `Меня зовут Сергей Денисенко. Я Веб-разработчик. Прошел обучение в Яндекс Практикум, где овладел рядом технологий веб разработки:
// HTML, CSS, язык программирования JavaScript, React JS, адаптивная вёрстка (grid, flex), методология БЭМ, ООП (объекты, методы, классы). И это мой дипломный проект!`;

// // Текстовые константы используемые в блоке SearchForm
// const searchFormTextHeader = 'Что творится в мире?';
// const searchFormTextParagraph = 'Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.';
// const searchFormTextParagraphIfNotFound = 'Введите в поиске любую тему и узнайте, насколько популярной она была в новостях за прошедшую неделю.';
// const placeholderText = 'Введите тему новости';

// const newsCardListNotFoundHeader = 'Ничего не найдено';
// const newsCardListNotFoundtParagraph = 'К сожалению по вашему запросу ничего не найдено.';
// const newsCardListAddCardToListButtonText = 'Показать еще';
// const newsCardListRequestErrorMessage = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

// const newsCardDeleteIconTooltipText = 'Убрать из сохранённых';
// const newsCardAddIconTooltipText = 'Войдите, чтобы сохранять статьи';

// const infoTooltipSuccessText = 'Пользователь успешно зарегистрирован!';
// const infoTooltipUnSuccessText = 'Что-то пошло не так! Попробуйте ещё раз.';

// const routePathMainPage = '/';
// const routePathSavedNews = '/saved-news';

// // Переменные для запроса новостей
// const currentDate = new Date();
// const dateSearchFrom = currentDate.setDate(currentDate.getDate() - 7);
// const pageSize = '100';
// const apiKey= '883fdfad9dfa4f71823164f0f43088ff';

// const optionsMainApi = {
//   baseUrl: 'https://api.allnews.students.nomoreparties.site',
//   // baseUrl: 'https://api.allnews.students.nomoreparties.site',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

// const displayCardQuantity = 3;

// module.exports = {
//   headerLogoText,
//   headerButtonAuthText,
//   footerInfoText,
//   footerMenuLinkMainPageText,
//   footerMenuLinkYPText,
//   footerMenuLinkMainPage,
//   footerMenuLinkYP,
//   footerMenuLinkGH,
//   footerMenuLinkFB,
//   aboutTextHeader,
//   aboutTextParagraph,
//   searchFormTextHeader,
//   searchFormTextParagraph,
//   searchFormTextParagraphIfNotFound,
//   placeholderText,
//   newsCardListNotFoundHeader,
//   newsCardListNotFoundtParagraph,
//   newsCardListAddCardToListButtonText,
//   newsCardListRequestErrorMessage,
//   newsCardDeleteIconTooltipText,
//   newsCardAddIconTooltipText,
//   infoTooltipSuccessText,
//   infoTooltipUnSuccessText,
//   routePathMainPage,
//   routePathSavedNews,
//   currentDate,
//   dateSearchFrom,
//   pageSize,
//   apiKey,
//   optionsMainApi,
//   displayCardQuantity,
// };
