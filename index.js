'use strict';



//chatbot
const prompt  = document.getElementById('prompt')
const results = document.getElementById('results')

function callChatGPTAPI(){
  console.log('Hello Chat GPT')
  const options = {
    method : 'POST',
    Headers : {
      'content-type' : 'application/json',
      'X-RapidAPI-Key' : 'your-rapid-api-key',
      'X-RapidAPI-Host' : 'openai80.p.rapidapi.com'
    },
    body : `{
    'model' : 'gpt-3.5-turbo' , 'messages' : [{'role' : 'user', 'content' : '${prompt.value}'}]}` 
  };
  fetch(
    'https://openai80.p.rapidapi.com/chat/completions', options 
  ).then((response) => response.json())
  .then((response) => {results.innerText = response.choices[0].message.content ;

  }).catch((error) => console.error(error))
}



/* element toggle function*/
 

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/* navbar toggle*/

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/* close navbar when click on any navbar link*/

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/*addd event on all elements for toggling navbar*/

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/* header active state*/

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 


const year  = document.getElementById('current-year')
year.innerHTML = new Date().getFullYear()