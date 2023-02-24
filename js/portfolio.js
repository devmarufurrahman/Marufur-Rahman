// json file import here
import nav from "../json/nav.json" assert { type: "json" };
import about from "../json/about.json" assert{type: "json"};
import service from "../json/services.json" assert{type: "json"};
import skill from "../json/skill.json" assert{type: "json"};
import course from "../json/course.json" assert{type: "json"};
import question from "../json/question.json" assert{type: "json"};
import privacy from "../json/privacy.json" assert{type: "json"};





// Typing Script
var typed = new Typed('.typing', {
    strings: ["Web Developer", "Programmer", "Application Developer", "Software Engineer"],
    typeSpeed: 65,
    backSpeed: 70,
});

var typed = new Typed('.typing2', {
    strings: ["Web Developer", "Programmer", "Application Developer", "Software Engineer"],
    typeSpeed: 80,
    backSpeed: 85,
});
// console.log(typed);


// ========nav menu event==========

let menu = document.querySelector(".nav_menu");
let menuBtn = document.querySelector('#open-menu-btn');
let closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none"
})

let closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);


// ===========================

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100);
})

//=====================================


// static json nav bar 
let nav_menu = document.querySelector('.nav_menu');
let footerMenu = document.querySelector('.permalink')
nav.map((e)=>{
    let liHome = document.createElement('li');
    let aHome = document.createElement('a');
    aHome.setAttribute("href", "#home");
    aHome.innerHTML = e.home;
    liHome.appendChild(aHome);
    footerMenu.appendChild(liHome);

    let liAbout = document.createElement('li');
    let aAbout = document.createElement('a');
    aAbout.setAttribute("href", "#About");
    aAbout.innerHTML = e.about;
    liAbout.appendChild(aAbout);
    footerMenu.appendChild(liAbout);


    let liCourse = document.createElement('li');
    let aCourse = document.createElement('a');
    aCourse.setAttribute("href", "#Courses");
    aCourse.innerHTML = e.course;
    liCourse.appendChild(aCourse);
    footerMenu.appendChild(liCourse);


    let liContact = document.createElement('li');
    let aContact = document.createElement('a');
    aContact.setAttribute("href", "#Contact");
    aContact.innerHTML = e.contact;
    liContact.appendChild(aContact);
    footerMenu.appendChild(liContact);
})
nav.map((e) => {
    console.log(e);
    let liHome = document.createElement('li');
    let aHome = document.createElement('a');
    aHome.setAttribute("href", "#home");
    aHome.innerHTML = e.home;
    liHome.appendChild(aHome);
    nav_menu.appendChild(liHome);


    let liAbout = document.createElement('li');
    let aAbout = document.createElement('a');
    aAbout.setAttribute("href", "#About");
    aAbout.innerHTML = e.about;
    liAbout.appendChild(aAbout);
    nav_menu.appendChild(liAbout);


    let liServices = document.createElement('li');
    let aServices = document.createElement('a');
    aServices.setAttribute("href", "#Services");
    aServices.innerHTML = e.services;
    liServices.appendChild(aServices);
    nav_menu.appendChild(liServices);


    let liSkills = document.createElement('li');
    let aSkills = document.createElement('a');
    aSkills.setAttribute("href", "#Skills");
    aSkills.innerHTML = e.skills;
    liSkills.appendChild(aSkills);
    nav_menu.appendChild(liSkills);


    let liPortfolio = document.createElement('li');
    let aPortfolio = document.createElement('a');
    aPortfolio.setAttribute("href", "#Portfolio");
    aPortfolio.innerHTML = e.portfolio;
    liPortfolio.appendChild(aPortfolio);
    nav_menu.appendChild(liPortfolio);


    let liCourse = document.createElement('li');
    let aCourse = document.createElement('a');
    aCourse.setAttribute("href", "#Courses");
    aCourse.innerHTML = e.course;
    liCourse.appendChild(aCourse);
    nav_menu.appendChild(liCourse);


    let liContact = document.createElement('li');
    let aContact = document.createElement('a');
    aContact.setAttribute("href", "#Contact");
    aContact.innerHTML = e.contact;
    liContact.appendChild(aContact);
    nav_menu.appendChild(liContact);
});

//==========================================


// static json about me
let about_text = document.querySelector('.about_text');
about.map((e) => {
    console.log(e);
    //typing name is not work====================

    // let div = document.createElement('div');
    // div.classList.add('text');
    // div.innerHTML = e.text;
    // let span = document.createElement('span');
    // span.innerText = typed;
    // div.appendChild(span);
    // about_text.appendChild(div);


    //paragraph==========

    let p = document.createElement('p');
    p.innerHTML = e.p;
    about_text.appendChild(p);

    //btn ==============

    let btn = document.createElement('a');
    btn.classList.add('btn');
    btn.setAttribute("href", "../File/Md._Marufur_Rahman_CV.pdf");
    btn.setAttribute('target', '_blank')
    btn.innerHTML = e.btn;
    about_text.appendChild(btn)
})



//=============================================


//static services data from json

let cards = document.querySelector('.cards')
service.map((e) => {
    let div = document.createElement('div')
    div.classList.add('card')
    let dib = document.createElement('div')
    dib.classList.add('sbox')

    let i = document.createElement('i');
    i.innerHTML = `<i class="fa-solid fa-code"></i>`
    dib.appendChild(i)

    let title = document.createElement('h3')
    title.innerHTML = e.title
    dib.appendChild(title)

    let p = document.createElement('p');
    p.innerHTML = e.body;
    dib.appendChild(p);

    let a = document.createElement('a');
    a.innerHTML = e.btn;
    dib.appendChild(a);

    div.appendChild(dib)
    cards.appendChild(div)
});



//=============================================


//static skills data from json
let bar = document.querySelector('.skills_container');

skill.map((e) => {

    //html progress bar start here =========

    let divHtmlBar = document.createElement('div');
    divHtmlBar.classList.add('bar');
    let divHtmlInfo = document.createElement('div');
    divHtmlInfo.classList.add('info');

    let html = document.createElement('span');
    html.innerHTML = e.html;

    divHtmlInfo.appendChild(html);
    divHtmlBar.appendChild(divHtmlInfo);

    let progressHtmlDiv = document.createElement('div');
    progressHtmlDiv.classList.add('progress-line', 'html');

    let progressHtmlSpan = document.createElement('span');
    progressHtmlDiv.appendChild(progressHtmlSpan);

    divHtmlBar.appendChild(progressHtmlDiv);
    bar.appendChild(divHtmlBar);

    //html progress bar end here =========


    //css progress bar start here =========

    let divCssBar = document.createElement('div');
    divCssBar.classList.add('bar');
    let divCssInfo = document.createElement('div');
    divCssInfo.classList.add('info');
    let css = document.createElement('span');
    css.innerHTML = e.css;
    divCssInfo.appendChild(css);
    divCssBar.appendChild(divCssInfo);
    let progressCssDiv = document.createElement('div');
    progressCssDiv.classList.add('progress-line', 'css');
    let progressCssSpan = document.createElement('span');
    progressCssDiv.appendChild(progressCssSpan);
    divCssBar.appendChild(progressCssDiv);
    bar.appendChild(divCssBar);

    //css progress bar end here =========


    //React progress bar start here =========

    let divReactBar = document.createElement('div');
    divReactBar.classList.add('bar');
    let divReactInfo = document.createElement('div');
    divReactInfo.classList.add('info');
    let React = document.createElement('span');
    React.innerHTML = e.react;
    divReactInfo.appendChild(React);
    divReactBar.appendChild(divReactInfo);
    let progressReactDiv = document.createElement('div');
    progressReactDiv.classList.add('progress-line', 'react');
    let progressReactSpan = document.createElement('span');
    progressReactDiv.appendChild(progressReactSpan);
    divReactBar.appendChild(progressReactDiv);
    bar.appendChild(divReactBar);

    //React progress bar end here =========


    //Js progress bar start here =========

    let divJsBar = document.createElement('div');
    divJsBar.classList.add('bar');
    let divJsInfo = document.createElement('div');
    divJsInfo.classList.add('info');
    let Js = document.createElement('span');
    Js.innerHTML = e.js;
    divJsInfo.appendChild(Js);
    divJsBar.appendChild(divJsInfo);
    let progressJsDiv = document.createElement('div');
    progressJsDiv.classList.add('progress-line', 'javascript');
    let progressJsSpan = document.createElement('span');
    progressJsDiv.appendChild(progressJsSpan);
    divJsBar.appendChild(progressJsDiv);
    bar.appendChild(divJsBar);

    //Js progress bar end here =========

    //MySql progress bar start here =========

    let divMySqlBar = document.createElement('div');
    divMySqlBar.classList.add('bar');
    let divMySqlInfo = document.createElement('div');
    divMySqlInfo.classList.add('info');
    let MySql = document.createElement('span');
    MySql.innerHTML = e.sql;
    divMySqlInfo.appendChild(MySql);
    divMySqlBar.appendChild(divMySqlInfo);
    let progressMySqlDiv = document.createElement('div');
    progressMySqlDiv.classList.add('progress-line', 'mysql');
    let progressMySqlSpan = document.createElement('span');
    progressMySqlDiv.appendChild(progressMySqlSpan);
    divMySqlBar.appendChild(progressMySqlDiv);
    bar.appendChild(divMySqlBar);

    //MySql progress bar end here =========


    //C progress bar start here =========

    let divCBar = document.createElement('div');
    divCBar.classList.add('bar');
    let divCInfo = document.createElement('div');
    divCInfo.classList.add('info');
    let C = document.createElement('span');
    C.innerHTML = e.c;
    divCInfo.appendChild(C);
    divCBar.appendChild(divCInfo);
    let progressCDiv = document.createElement('div');
    progressCDiv.classList.add('progress-line', 'cSharp');
    let progressCSpan = document.createElement('span');
    progressCDiv.appendChild(progressCSpan);
    divCBar.appendChild(progressCDiv);
    bar.appendChild(divCBar);

    //C progress bar end here =========

    //Node progress bar start here =========

    let divNodeBar = document.createElement('div');
    divNodeBar.classList.add('bar');
    let divNodeInfo = document.createElement('div');
    divNodeInfo.classList.add('info');
    let Node = document.createElement('span');
    Node.innerHTML = e.node;
    divNodeInfo.appendChild(Node);
    divNodeBar.appendChild(divNodeInfo);
    let progressNodeDiv = document.createElement('div');
    progressNodeDiv.classList.add('progress-line', 'aspNet');
    let progressNodeSpan = document.createElement('span');
    progressNodeDiv.appendChild(progressNodeSpan);
    divNodeBar.appendChild(progressNodeDiv);
    bar.appendChild(divNodeBar);

    //Node progress bar end here =========



})

//===================================================


//static course data from json

let frontEnd = document.getElementById('Front-End');
let backEnd = document.getElementById('Back-end');
let fullStack = document.getElementById('Full-stack');

course.map((e) => {


    console.log(e);
    //front end start here
    let h4Front = document.createElement('h4');
    h4Front.innerHTML = e.title1;
    frontEnd.appendChild(h4Front);
    let pFront = document.createElement('p');
    pFront.innerHTML = e.body;
    frontEnd.appendChild(pFront);
    let aFront = document.createElement('a');
    aFront.classList.add('btn');
    aFront.innerHTML = e.btn;
    frontEnd.appendChild(aFront);
    //front end end here

    // back end start here 
    let h4Back = document.createElement('h4');
    h4Back.innerHTML = e.title2;
    backEnd.appendChild(h4Back);
    let pBack = document.createElement('p');
    pBack.innerHTML = e.body;
    backEnd.appendChild(pBack);
    let aBack = document.createElement('a');
    aBack.classList.add('btn');
    aBack.innerHTML = e.btn;
    backEnd.appendChild(aBack);
    //back end end here 


    // full stack end start here 
    let h4full = document.createElement('h4');
    h4full.innerHTML = e.title3;
    fullStack.appendChild(h4full);
    let pfull = document.createElement('p');
    pfull.innerHTML = e.body;
    fullStack.appendChild(pfull);
    let afull = document.createElement('a');
    afull.classList.add('btn');
    afull.innerHTML = e.btn;
    fullStack.appendChild(afull);
    //back end end here 
});


//================================

// ask question static data from json 

let faqs_container = document.querySelector('.faqs_container')
question.map((e) => {
    // console.log(e);
    let article = document.createElement('article');
    article.classList.add('faq');
    let faq_iconDiv = document.createElement('div');
    faq_iconDiv.classList.add('faq_icon');
    faq_iconDiv.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    let question_answerDiv = document.createElement('div');
    question_answerDiv.classList.add('question_answer');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    h4.innerHTML = e.question;
    p.innerHTML = e.answer;


    question_answerDiv.appendChild(h4);
    question_answerDiv.appendChild(p);
    article.appendChild(question_answerDiv);
    article.appendChild(faq_iconDiv);

    faqs_container.appendChild(article);

    
})


// show/hide faqs
let faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('faq_open');

        let icon = faq.querySelector('.faq_icon i');
        if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus"
        }
        else {
            icon.className = "fa-solid fa-plus"
        }
    })
})


//======================================


//privacy & policy static json data here

let privacyClass = document.querySelector('.privacy');
privacy.map((e)=>{
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.innerHTML = e.one;
    li.appendChild(a);
    privacyClass.appendChild(li);
})