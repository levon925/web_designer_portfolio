/*jshint esversion: 6 */

const headerIcons = document.querySelector('.header_icons'),
      about = document.querySelector('.about'),
      concept = document.querySelector('.concept');
      const title = document.querySelectorAll('.modal_title');
      const inputs = document.querySelector('.modal_input_group');
      const input = document.querySelector('.modal_message');
      const success = document.querySelector('.modal_success');
      const description = document.querySelectorAll('.modal_description');


    

//console.log(width);
const btn = document.querySelectorAll('.modal_button');
changeText();
window.onresize = changeText;

function socialHeaderButtons(){
    const behance = document.querySelectorAll('.behance_link'),
          instagram = document.querySelectorAll('.instagram_link'),
          facebook = document.querySelectorAll('.facebook_link'),
          mail = document.querySelectorAll('.send_mail');
          //headerTitle = document.querySelector('.header_title');
         // headerTitle.addEventListener('click', () => window.open("/"));

    
    //console.log(behance, instagram, facebook);
    //behance.addEventListener('click',() => window.open('https://behance.com'));
    behance.forEach(e => {
        e.addEventListener('click',() => window.open('https://www.behance.net/lanatopchy9fcc'));
    });
    instagram.forEach(e => {
        e.addEventListener('click',() => window.open('https://instagram.com/lana_webdesign'));
    });
    facebook.forEach(e => {
        e.addEventListener('click',() => window.open('https://www.facebook.com/lana.topchyan'));
    });
    mail.forEach(e => {
        e.addEventListener('click',() => window.open('mailto:lanatopchyan.design@gmail.com'));
    });
    //instagram.addEventListener('click',() => window.open('https://instagram.com'));
    //facebook.addEventListener('click',() => window.open('https://facebook.com'));
    //instagram.addEventListener('click', ();
    // behance.onclick = function() {
    //     window.open('https://behance.com');
    //     console.log('click');
    //     console.log(behance);
    // }

    
}

//socialHeaderButtons();
//hideButtons[1].remove();

function changeText() {
    console.log('Ширина: '+ screen.width,'Высота: ' + screen.height);
    // location.reload();
    const width = document.body.clientWidth;
    // console.log(width);
    const mura = document.querySelector('.mura_description'),
    nestle = document.querySelector('.nestle_description'),
    eltrendy = document.querySelector('.eltrendy_description'),
    aston = document.querySelector('.aston_description'),
    skyNews = document.querySelector('.sky_news_description'),
    goldory = document.querySelector('.goldory_description');
    mura.setAttribute('style', 'white-space: pre;');
    nestle.setAttribute('style', 'white-space: pre;');
    eltrendy.setAttribute('style', 'white-space: pre;');
    aston.setAttribute('style', 'white-space: pre;');
    skyNews.setAttribute('style', 'white-space: pre;');
    goldory.setAttribute('style', 'white-space: pre;');
    //headerIcons.innerHTML= "<img class='social behance_link cursor_pointer' src='img/header/behance.svg' alt='behance'><img class='social_down instagram_link cursor_pointer' src='img/header/instagram.svg' alt='instagram'><img class='social facebook_link cursor_pointer' src='img/header/facebook.svg' alt='facebook'>";
        //concept.textContent = "first concept ";
function refreshOnResize(){
            var oldWidth = window.innerWidth;
        
        window.onresize = function () {
        
            var newWidth = window.innerWidth;
        
            if (newWidth != oldWidth) {
                location.reload();
                // alert("width changed");
        
                oldWidth = newWidth;
        
            }
        
        };  
}

    if(width < 1583 && width >= 983){


        builtBy();
        elementAnimation();
        sendToMail();
        socialHeaderButtons();

        refreshOnResize()
        step();
        modalClose('Leave a request for<br>');
        resetProjectList();
        projectLinks();
        removeProjectButtons();
        const mura = document.querySelector('.mura_description'),
        nestle = document.querySelector('.nestle_description'),
        eltrendy = document.querySelector('.eltrendy_description'),
        aston = document.querySelector('.aston_description'),
        skyNews = document.querySelector('.sky_news_description'),
        goldory = document.querySelector('.goldory_description');
        mura.textContent = 'This project is a redesign of Mura boutique \r\nwebsite.  Mura is a female fashion boutique that \r\nstarted in 2011 by founder Asako Nakamura in \r\nNoosa, Australia. ';
        nestle.textContent = "Nestlé's products include baby food, medical \r\nfood, bottled water, breakfast cereals, coffee and \r\ntea, confectionery, dairy products, ice cream, \r\nfrozen food, pet foods, and snacks.";
        eltrendy.textContent = 'ElTrendy.store is an online store that contains the \r\nmost popular brands for harmony and beauty. \r\nElTrendy is one of the top 10 most famous studios \r\nin Russia.';
        aston.textContent = 'Aston Martin is the iconic British sport car brand \r\nthat has stood for beautiful, hand-crafted cars that \r\nare exhilarating to drive since 1913. This project is \r\na redesign of official Aston Martin website. ';
        skyNews.textContent = "Sky News is a British free-to-air television news \r\nchannel and organisation which started \r\nbroadcasting since February 1989, becoming the \r\nUK's first round-the-clock news channel. ";
        goldory.textContent = 'Goldory is a website concept made for a real \r\nestate company based in Moscow. The Goldory \r\nLuxury House has bright and spacious rooms, \r\nhight ceilings and geometric facade elements.';
        //headerIcons.innerHTML= "<img class='social behance_link cursor_pointer' src='img/header/behance.svg' alt='behance'><img class='social_down instagram_link cursor_pointer' src='img/header/instagram.svg' alt='instagram'><img class='social facebook_link cursor_pointer' src='img/header/facebook.svg' alt='facebook'>";
        concept.textContent = "first concept ";
        imageChange(1000);
 
    } else if(width < 983 && width >= 623) {


        builtBy();
        elementAnimation();
        sendToMail();
        socialHeaderButtons();

        refreshOnResize()
        step();
        modalClose('Leave a request for<br>');
        resetProjectList();
        projectLinks();
        removeProjectButtons();
        imageChange(640);
        const mura = document.querySelector('.mura_description'),
        nestle = document.querySelector('.nestle_description'),
        eltrendy = document.querySelector('.eltrendy_description'),
        aston = document.querySelector('.aston_description'),
        skyNews = document.querySelector('.sky_news_description'),
        goldory = document.querySelector('.goldory_description');
        mura.textContent ="This project is a redesign of Mura boutique \r\nwebsite. Mura offers beautiful clothing, \r\nshoes and accessories.";
        nestle.textContent ="Nestlé is a Swiss multinational food and \r\ndrink processing conglomerate \r\ncorporation. This project is a redesign of \r\nofficial Nestlé website.";
        eltrendy.textContent ="ElTrendy.store is an online store that \r\ncontains the most popular brands for \r\nharmony and beauty. ElTrendy is one of the \r\ntop 10 most famous studios in Russia.";
        aston.textContent ="This project is a redesign of official Aston \r\nMartin website. The main goal was to \r\nimprove UI and UX parts bringing Aston \r\nMartin spirit.";
        skyNews.textContent ="Sky News is a British free-to-air television \r\nnews channel and organisation which \r\nstarted broadcasting since February 1989, \r\nbecoming the UK's first round-the-clock \r\nnews channel. ";
        goldory.textContent ="Goldory is a website concept made for a \r\nreal estate company. The Goldory Luxury \r\nHouse has bright and spacious rooms, \r\nhight ceilings and geometric facade \r\nelements.";
        //headerIcons.innerHTML= "<img class='social behance_link cursor_pointer' src='img/header/behance.svg' alt='behance'><img class='social_down instagram_link cursor_pointer' src='img/header/instagram.svg' alt='instagram'><img class='social facebook_link cursor_pointer' src='img/header/facebook.svg' alt='facebook'>";
        concept.textContent = "first concept ";
    } else if(width < 623 && width >= 0) {

        builtBy();
        elementAnimation();
        sendToMail();
        socialHeaderButtons();
        

        step();
        modalClose('Request for');
        imageChange(320);
        projectLinks();
        removeProjectButtons();
        const projects = [`<div class="project">
        <div class="project_content">
            <div class="project_buttons element-animation">
                <div class="project_button">online store</div>
                <div class="project_button project_hide">fashion</div>
                <div class="project_button">redesign</div>
            </div>
            <img class="project_image mura_image element-animation" src="img/projects/320/mura.png" alt="">
            <div class="project_info">
                <div class="project_title mura_title cursor_pointer element-animation">
                    <p class="cursor_pointer">mura boutique</p>
                    <img class="cursor_pointer arrow" src="img/projects/arrow.svg" alt="">
                </div>
                <span class="mura_description element-animation">
                    This project is a redesign of Mura boutique website. 
                    <br> Mura is a female fashion boutique that started in 2011 by founder Asako Nakamura in Noosa, Australia. Mura offers beautiful clothing, shoes and accessories.
                </span>
            </div>
        </div>
    </div>`,
` <div class="project">
<div class="project_content">
    <div class="project_buttons element-animation">
        <div class="project_button">corporate</div>
        <div class="project_button project_hide">food</div>
        <div class="project_button">redesign</div>
    </div>
    <img class="project_image nestle_image element-animation" src="img/projects/320/nestle.png" alt="">
    <div class="project_info">
        <div class="project_title nestle_title cursor_pointer element-animation">
            <p class="cursor_pointer">Nestlé website</p>
            <img class="cursor_pointer arrow" src="img/projects/arrow.svg" alt="">
        </div>
        <span class="nestle_description element-animation">
            Nestlé is a Swiss multinational food and drink processing conglomerate corporation. Nestlé's products include baby food, medical food, bottled water, breakfast cereals, coffee and tea, confectionery, dairy products, ice cream, frozen food, pet foods, and snacks.
        </span>
    </div>
</div>
</div>`,
`<div class="project">
<div class="project_content">
    <div class="project_buttons element-animation">
        <div class="project_button">online store</div>
        <div class="project_button">cosmetics</div>
        <div class="project_button project_hide">redesign</div>
    </div>
    <img class="project_image eltrendy_image element-animation" src="img/projects/320/eltrendy.png" alt="">
    <div class="project_info">
        <div class="project_title eltrendy_title cursor_pointer element-animation">
            <p class="cursor_pointer">eltrendy store</p>
            <img class="cursor_pointer arrow" src="img/projects/arrow.svg" alt="">
        </div>
        <span class="eltrendy_description element-animation">
            ElTrendy.store is an online store that contains the most popular brands <br>for harmony and beauty. ElTrendy is one of the top 10 most famous <br>studios in Russia.
        </span>
    </div>
</div>
</div>`,
`<div class="project">
<div class="project_content">
    <div class="project_buttons element-animation">
        <div class="project_button">corporate</div>
        <div class="project_button project_hide">ui</div>
        <div class="project_button">redesign</div>
    </div>
    <img class="project_image aston_image element-animation" src="img/projects/320/aston.png" alt="">
    <div class="project_info">
        <div class="project_title aston_title cursor_pointer element-animation">
            <p class="cursor_pointer">aston martin</p>
            <img class="cursor_pointer arrow" src="img/projects/arrow.svg" alt="">
        </div>
        <span class="aston_description element-animation">
            Aston Martin is the iconic British sport car brand that has stood for beautiful, hand-crafted cars that are exhilarating to drive since 1913. This project is a redesign of official Aston Martin website. The main goal was to improve UI and UX parts bringing Aston Martin spirit.
        </span>
    </div>
</div>
</div>`,
`<div class="project">
<div class="project_content">
    <div class="project_buttons element-animation">
        <div class="project_button">news website</div>
        <div class="project_button">ui/ux</div>
        <div class="project_button project_hide">redesign</div>
    </div>
    <img class="project_image sky_news_image element-animation" src="img/projects/320/sky_news.png" alt="">
    <div class="project_info">
        <div class="project_title sky_title cursor_pointer element-animation">
            <p class="cursor_pointer">sky news</p>
            <img class="cursor_pointer arrow" src="img/projects/arrow.svg" alt="">
        </div>
        <span class="sky_news_description element-animation">
            Sky News is a British free-to-air television news channel and organisation which started broadcasting since February 1989, becoming the UK's first round-the-clock news channel. The audience is estimated at 150 million people worldwide.
        </span>
    </div>
</div>
</div>`,
`<div class="project">
<div class="project_content">
    <div class="project_buttons element-animation">
        <div class="project_button">landing page</div>
        <div class="project_button">real estate</div>
        <div class="project_button project_hide">concept</div>
    </div>
    <img class="project_image goldory_image element-animation" src="img/projects/320/goldory.png" alt="">
    <div class="project_info">
        <div class="project_title goldory_title cursor_pointer element-animation">
            <p class="cursor_pointer">goldory</p>
            <img class="cursor_pointer arrow" src="img/projects/arrow.svg" alt="">
        </div>
        <span class="goldory_description element-animation">
            Goldory is a website concept made for a real estate company based in Moscow. The Goldory Luxury House has bright and spacious rooms, hight ceilings and geometric facade elements.
        </span>
    </div>
</div>
</div>`
];






        //const headerIconsImages = headerIcons.querySelectorAll('img'),
              projectsCols = document.querySelectorAll('.projects_col');
        //projectsCols.innerHTML="<div class='projects_col'><p class='projects_title'>selected projects</p><div class='projects_column'></div></div>";
            projectsCols[1].remove();
            //removeProjectButtons();
        const projectsColumn = projectsCols[0].querySelector('.projects_column');
        
        // console.log(projectsColumn);
              projectsColumn.innerHTML = projects[0] + projects[3] + projects[1] + projects[4] + projects[2] + projects[5];
              elementAnimation();
              




              const mura = document.querySelector('.mura_description'),
              nestle = document.querySelector('.nestle_description'),
              eltrendy = document.querySelector('.eltrendy_description'),
              aston = document.querySelector('.aston_description'),
              skyNews = document.querySelector('.sky_news_description'),
              goldory = document.querySelector('.goldory_description');
              mura.textContent ="This project is a redesign of Mura boutique \r\nwebsite. Mura offers beautiful clothing, \r\nshoes and accessories.";
              nestle.textContent ="Nestlé is a Swiss multinational food and \r\ndrink processing conglomerate \r\ncorporation. This project is a redesign of \r\nofficial Nestlé website.";
              eltrendy.textContent ="ElTrendy.store is an online store that \r\ncontains the most popular brands for \r\nharmony and beauty. ElTrendy is one of the \r\ntop 10 most famous studios in Russia.";
              aston.textContent ="This project is a redesign of official Aston \r\nMartin website. The main goal was to \r\nimprove UI and UX parts bringing Aston \r\nMartin spirit.";
              skyNews.textContent ="Sky News is a British free-to-air television \r\nnews channel and organisation which \r\nstarted broadcasting since February 1989, \r\nbecoming the UK's first round-the-clock \r\nnews channel. ";
              goldory.textContent ="Goldory is a website concept made for a \r\nreal estate company. The Goldory Luxury \r\nHouse has bright and spacious rooms, \r\nhight ceilings and geometric facade \r\nelements.";
              //headerIcons.innerHTML= "<img class='social behance_link cursor_pointer' src='img/header/behance.svg' alt='behance'><img class='social_down instagram_link cursor_pointer' src='img/header/instagram.svg' alt='instagram'><img class='social facebook_link cursor_pointer' src='img/header/facebook.svg' alt='facebook'>";



              removeProjectButtons();
              //imageChange(320);
              
        // for(i = 0; i < 3; i++){
        //     headerIcons.removeChild(headerIconsImages[i]);
        // }
        // headerIconsImages.forEach(element => {
        //     element.remove();
        // });
        // const burgerMenu = document.createElement('img');
        // burgerMenu.src = 'img/projects/menu.svg';
        // burgerMenu.classList.add('burger_menu');
        const burgerMenu = "<img class='burger_menu' src='img/projects/menu.svg'>";
        //headerIcons.innerHTML=burgerMenu;
        // headerIcons.appendChild(burgerMenu);
        // console.log(burgerMenu);
        about.innerHTML="<p>about me</p><div class='about_col'><span class='first_text'>I'm Lana Topchyan, junior web designer based in Tbilisi, Georgia, working remotely all over the world. I‘m in love with web design, typography and minimal style.</span><img class='about_img' src='img/lana/lana_2.svg'><span class='second_text'>I design thoughtful web interfaces that are comfortable to interact with. I like the minimalist aesthetic, simple effective solutions and light animation.</span></div>";
        concept.textContent = "concept ";
    }
    else {


        builtBy();
        elementAnimation();
        sendToMail();
        socialHeaderButtons();

        refreshOnResize()
        step();
        resetProjectList();
        projectLinks();
        imageChange(1600);
        addProjectButtons();
        modalClose('Leave a request for<br>');
      
      
        mura.textContent = 'This project is a redesign of Mura boutique website. \r\nMura is a female fashion boutique that started in 2011 by founder Asako \r\nNakamura in Noosa, Australia. Mura offers beautiful clothing, shoes and \r\naccessories.';
        nestle.textContent = "Nestlé is a Swiss multinational food and drink processing conglomerate \r\ncorporation. Nestlé's products include baby food, medical food, bottled water, \r\nbreakfast cereals, coffee and tea, confectionery, dairy products, ice cream, \r\nfrozen food, pet foods, and snacks.";
        eltrendy.textContent = 'ElTrendy.store is an online store that contains the most popular brands \r\nfor harmony and beauty. ElTrendy is one of the top 10 most famous \r\nstudios in Russia.';
        aston.textContent = 'Aston Martin is the iconic British sport car brand that has stood for beautiful, \r\nhand-crafted cars that are exhilarating to drive since 1913. This project is a \r\nredesign of official Aston Martin website. The main goal was to improve UI and \r\nUX parts bringing Aston Martin spirit.';
        skyNews.textContent = "Sky News is a British free-to-air television news channel and organisation which \r\nstarted broadcasting since February 1989, becoming the UK's first round-the-\r\nclock news channel. The audience is estimated at 150 million people worldwide.";
        goldory.textContent = 'Goldory is a website concept made for a real estate company based in Moscow. \r\nThe Goldory Luxury House has bright and spacious rooms, hight ceilings and \r\ngeometric facade elements.';
        
    }
}
function imageChange(x){
    const muraImage = document.querySelector('.mura_image'),
    nestleImage = document.querySelector('.nestle_image'),
    eltrendyImage = document.querySelector('.eltrendy_image'),
    astonImage = document.querySelector('.aston_image'),
    skyNewsImage = document.querySelector('.sky_news_image'),
    goldoryImage = document.querySelector('.goldory_image');
    muraImage.src='img/projects/'+x+'/mura.png';
    nestleImage.src='img/projects/'+x+'/nestle.png';
    eltrendyImage.src='img/projects/'+x+'/eltrendy.png';
    astonImage.src='img/projects/'+x+'/aston.png';
    skyNewsImage.src='img/projects/'+x+'/sky_news.png';
    goldoryImage.src='img/projects/'+x+'/goldory.png';
}

function removeProjectButtons(){
    const hideButtons = document.querySelectorAll('.project_hide');
    for(i=0;i<6;i++){
        //hideButtons[i].remove();
        hideButtons[i].classList.add('dn');
        hideButtons[i].classList.remove('project_button');
    }
}
function addProjectButtons(){
    const hideButtons = document.querySelectorAll('.project_hide');
    for(i=0;i<6;i++){
        //hideButtons[i].remove();
        if(hideButtons[i].classList.contains('dn')){
            hideButtons[i].classList.remove('dn');
            hideButtons[i].classList.add('project_button');
        } 

    }
}

function resetProjectList(){
    const projectList = document.querySelector('.projects_cols');
    projectList.innerHTML = "";
    // console.log('reset');
    
    
    
    projectList.innerHTML = `<div class="projects_col">
    <p class="projects_title element-animation">selected projects</p>
    <div class="projects_column">
        <div class="project">
            <div class="project_content">
                <div class="project_buttons element-animation">
                    <div class="project_button">online store</div>
                    <div class="project_button project_hide">fashion</div>
                    <div class="project_button">redesign</div>
                </div>
                <img class="project_image mura_image element-animation" src="img/projects/1000/mura.png" alt="">
                <div class="project_info">
                    <div class="project_title mura_title cursor_pointer element-animation">
                        <p class="cursor_pointer">mura boutique</p>
                        <img class="cursor_pointer arrow" src="img/projects/arrow.svg" alt="">
                    </div>
                    <span class="mura_description element-animation">
                    This project is a redesign of Mura boutique website. 
                    <br> Mura is a female fashion boutique that started in 2011 by founder Asako Nakamura in Noosa, Australia. Mura offers beautiful clothing, shoes and accessories.
                    </span>
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project_content">
                <div class="project_buttons element-animation">
                    <div class="project_button">corporate</div>
                    <div class="project_button project_hide">food</div>
                    <div class="project_button">redesign</div>
                </div>
                <img class="project_image nestle_image element-animation" src="img/projects/1000/nestle.png" alt="">
                <div class="project_info">
                    <div class="project_title nestle_title cursor_pointer element-animation">
                        <p class="cursor_pointer">Nestlé website</p>
                        <img class="cursor_pointer arrow" src="img/projects/arrow.svg" alt="">
                    </div>
                    <span class="nestle_description element-animation">
                        Nestlé is a Swiss multinational food and drink processing conglomerate corporation. Nestlé's products include baby food, medical food, bottled water, breakfast cereals, coffee and tea, confectionery, dairy products, ice cream, frozen food, pet foods, and snacks.
                    </span>
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project_content">
                <div class="project_buttons element-animation">
                    <div class="project_button">online store</div>
                    <div class="project_button">cosmetics</div>
                    <div class="project_button project_hide">redesign</div>
                </div>
                <img class="project_image eltrendy_image element-animation" src="img/projects/1000/eltrendy.png" alt="">
                <div class="project_info">
                    <div class="project_title eltrendy_title cursor_pointer element-animation">
                        <p class="cursor_pointer">eltrendy store</p>
                        <img class="cursor_pointer arrow" src="img/projects/arrow.svg" alt="">
                    </div>
                    <span class="eltrendy_description element-animation">
                        ElTrendy.store is an online store that contains the most popular brands <br>for harmony and beauty. ElTrendy is one of the top 10 most famous <br>studios in Russia.
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="projects_col">
    <div class="project">
        <div class="project_content">
            <div class="project_buttons element-animation">
                <div class="project_button">corporate</div>
                <div class="project_button project_hide">ui</div>
                <div class="project_button">redesign</div>
            </div>
            <img class="project_image aston_image element-animation" src="img/projects/1000/aston.png" alt="">
            <div class="project_info">
                <div class="project_title aston_title cursor_pointer element-animation">
                    <p class="cursor_pointer">aston martin</p>
                    <img class="cursor_pointer arrow" src="img/projects/arrow.svg" alt="">
                </div>
                <span class="aston_description element-animation">
                    Aston Martin is the iconic British sport car brand that has stood for beautiful, hand-crafted cars that are exhilarating to drive since 1913. This project is a redesign of official Aston Martin website. The main goal was to improve UI and UX parts bringing Aston Martin spirit.
                </span>
            </div>
        </div>
    </div>
    <div class="project">
        <div class="project_content">
            <div class="project_buttons element-animation">
                <div class="project_button">news website</div>
                <div class="project_button">ui/ux</div>
                <div class="project_button project_hide">redesign</div>
            </div>
            <img class="project_image sky_news_image element-animation" src="img/projects/1000/sky_news.png" alt="">
            <div class="project_info">
                <div class="project_title sky_title cursor_pointer element-animation">
                    <p class="cursor_pointer">sky news</p>
                    <img class="cursor_pointer arrow" src="img/projects/arrow.svg" alt="">
                </div>
                <span class="sky_news_description element-animation">
                    Sky News is a British free-to-air television news channel and organisation which started broadcasting since February 1989, becoming the UK's first round-the-clock news channel. The audience is estimated at 150 million people worldwide.
                </span>
            </div>
        </div>
    </div>
    <div class="project">
        <div class="project_content">
            <div class="project_buttons element-animation">
                <div class="project_button">landing page</div>
                <div class="project_button">real estate</div>
                <div class="project_button project_hide">concept</div>
            </div>
            <img class="project_image goldory_image element-animation" src="img/projects/1000/goldory.png" alt="">
            <div class="project_info">
                <div class="project_title goldory_title cursor_pointer element-animation">
                    <p class="cursor_pointer">goldory</p>
                    <img class="cursor_pointer arrow" src="img/projects/arrow.svg" alt="">
                </div>
                <span class="goldory_description element-animation">
                    Goldory is a website concept made for a real estate company based in Moscow. The Goldory Luxury House has bright and spacious rooms, hight ceilings and geometric facade elements.
                </span>
            </div>
        </div>
    </div>
</div>`;
nestle = document.querySelector('.nestle_description');
// projectLinks();
elementAnimation();
}


// function stepList(){
//     const stepButton = document.querySelectorAll('.step');
//     stepButton.forEach(e =>{
//         const stepImage = e.querySelectorAll('img');
//         const stepDescription = e.querySelector('.step_description');
//         //stepDescription.classList.add('opacity0');
//         stepImage.forEach(e =>{
//             e.addEventListener('click', () => {
//                 stepDescription.classList.toggle('margin0');
//                  stepDescription.classList.toggle('st');
//                 // stepDescription.classList.toggle('opacity1');
//                 stepImage.forEach(e => {
//                     e.classList.toggle('dn');
//                 });
//             });
//         });
//         // stepImage.addEventListener('click',()=>{
//         //     stepDescription.classList.toggle('dn');

//         // });
//     });
// }
function step(){
    const step = document.querySelectorAll('.step');

    step.forEach(e => {
        const plus = e.querySelector('.step_button');
        const descr = e.querySelector('.step_unvisible');
        const stepContent = e.querySelector('.step_content');
        plus.classList.add('stbtn');
        // plus.classList.add('stbtnhvr');
        plus.addEventListener('click', () => {
            plus.classList.toggle('stbtn');
            // plus.classList.toggle('stbtnhvr');
            plus.classList.toggle('stbtnactv');
            descr.classList.toggle('st');
            // console.log('click');
            if (e.classList.contains('ss1')){
                // console.log('11111');
                e.classList.toggle('step_size_1')
                stepContent.classList.toggle('step_text_size_1')
            } else if (e.classList.contains('ss2')){
                // console.log('22222');
                e.classList.toggle('step_size_2')
                stepContent.classList.toggle('step_text_size_2')
            } else if (e.classList.contains('ss3')){
                // console.log('33333');
                e.classList.toggle('step_size_3')
                stepContent.classList.toggle('step_text_size_3')
            } else if (e.classList.contains('ss4')){
                // console.log('44444');
                e.classList.toggle('step_size_4')
                stepContent.classList.toggle('step_text_size_4')
            } else if(e.classList.contains('ss5')){
                // console.log('55555');
                e.classList.toggle('step_size_5')
                stepContent.classList.toggle('step_text_size_5')
            } else if(e.classList.contains('ss6')){
                // console.log('66666');
                e.classList.toggle('step_size_6')
                stepContent.classList.toggle('step_text_size_6')
            }
        });
    })
}

function emailMe(){
    const footer = document.querySelector('footer'),
          emailMe = document.querySelector('.email_me'),
          emailMove = document.querySelectorAll('.footer_links');
          let emailMeMove = document.querySelector('.email_me_move');
          

          emailMeMove.style.display = "none";
    footer.addEventListener('mouseenter', () => {
        // console.log('footer mouseenter');
        emailMe.style.opacity = "0";
    });
    footer.addEventListener('mouseleave', () => {
        // console.log('footer mouseout');
        emailMe.style.opacity = "1";
        emailMeMove.style.display = "none";
    });
    footer.addEventListener('mousemove',e => {
        
        
        const x = e.pageX,
              y = e.pageY,
              html = document.querySelector('html'),
              z = html.offsetHeight - footer.offsetHeight - 70,
              
              zero = z - emailMeMove.style.top.replace(/[^0-9,\.]/g,"");
            //   console.log(html.offsetHeight);
            // console.log(emailMeMove.style.top,footer.offsetHeight,z);
            // console.log(z - emailMeMove.style.top.replace(/[^0-9,\.]/g,""));
            // console.log(html.offsetHeight - z, zero);
            
            emailMeMove.style.left = x - emailMeMove.offsetWidth/2 + "px";
            emailMeMove.style.top = y - emailMeMove.offsetHeight/1.08 + "px";
            
                if(zero <= 0){
                    // console.log("<=0");
                    // emailMeMove = document.createElement("div");
                    // emailMeMove.classList.add("email_me_move");
                    emailMeMove.style.display = "flex";
                    if(!(emailMeMove.innerHTML="")){
                        // console.log("a");
                    }
                    emailMeMove.outerHTML = `<div class="email_me_move">email me</div>`;
                    // console.log(emailMeMove,emailMeMove.outerHTML);
                    
                    
                }
                else{
                    // console.log(">0");
                    emailMeMove.style.display = "none";
                    // emailMeMove.remove();
                    emailMeMove.outerHTML="";
                }

                // while(zero >= 0){
                //     console.log("0");
                // }
                
            


              
        //console.log(x,y);
    });
    // emailMove.forEach(e => {
    //     e.addEventListener('mouseenter',() => {
    //         emailMe.style.opacity = "1";
    //         console.log('email mouseenter');
    //     });
    //     e.addEventListener('mouseleave',() => {
    //         emailMe.style.opacity = "0";
    //         console.log('email mouseout');
    //     });
    // });
    emailMove.addEventListener('mouseenter',() => {
        emailMe.style.opacity = "1";
        // console.log('email mouseenter');
    });
    emailMove.addEventListener('mouseleave',() => {
        emailMe.style.opacity = "0";
        // console.log('email mouseout');
    });
    
    
}


// projectLinks();

function projectLinks() {
    // projectBtns('.mura_title','projects/MURA_BOUTIQUE.html');
    // projectBtns('.aston_title','projects/ASTON_MARTIN.html');
    // projectBtns('.nestle_title','projects/NESTLÉ_WEBSITE.html');
    // projectBtns('.sky_title','projects/SKY_NEWS.html');
    // projectBtns('.eltrendy_title','projects/ELTRENDY_STORE.html');
    // projectBtns('.goldory_title','projects/GOLDORY.html');
    projectBtns('.mura_title','https://www.behance.net/gallery/101686571/MURA-BOUTIQUE-Online-store');
    projectBtns('.aston_title','https://www.behance.net/gallery/135609021/ASTON-MARTIN-New-Website');
    projectBtns('.nestle_title','https://www.behance.net/gallery/119210337/Nestl-Website-Redesign');
    projectBtns('.sky_title','https://www.behance.net/gallery/107727851/Sky-news-redesign-website');
    projectBtns('.eltrendy_title','https://www.behance.net/gallery/130266071/Online-cosmetics-store-redesign');
    projectBtns('.goldory_title','https://www.behance.net/gallery/96286355/GOLDORY-Luxury-apartments');
}

function projectBtns(x,y) {
    const project = document.querySelectorAll(x);
    // console.log(project);
    project.forEach(e => {
        e.addEventListener('click',() => window.open(y));
    })
    //project.addEventListener('click',() => window.open(y));
}

function modalClose(text){
    const modalClose = document.querySelector('.modal_close');
    const modalCloseBackground = document.querySelector('.modal_close_background');
    const fixedOverlay = document.querySelector('.fixed_overlay');
    const modalOpen = document.querySelectorAll('.about_service_button');


    // modalOpen.addEventListener('click', () => {
    //     fixedOverlay.classList.remove('dn');
    // })
    modalOpen.forEach(e => {
        e.addEventListener('click', () => {
            //fixedOverlay.classList.add('dib')
            let website;
            const websiteType = document.querySelector('.modal_website_type');
            const modalText = document.querySelector('.modal_description_text');
            
            title[1].classList.add('dn');
            title[0].classList.remove('dn');
            btn[1].classList.add('dn');
            btn[0].classList.remove('dn');
            description[1].classList.add('dn');
            description[0].classList.remove('dn');
            inputs.classList.remove('dn');
            input.classList.remove('dn');
            success.classList.add('dn');

            
                if(e.classList.contains('landing_page')){
                    website = 'landing page';
                    //for<br>
                    title[0].innerHTML = `${text} a landing page`;
                    modalText.innerHTML=`A landing page is a page on your site that is designed to convert visitors into leads. Used to enhance the effectiveness of advertising, increase the audience. 
                    <br><br>If you have any landing page project, please contact me by filling out this form.`;
                } else if(e.classList.contains('online_store')){
                    website = 'online store';
                    title[0].innerHTML = `${text} an online store`;
                    modalText.innerHTML=`An online store can exponentially increase the sales and profits of a business.  We’ll set up an online store with a user-friendly design to ensure that your business has everything it needs to flourish in the world of e-commerce.
                    <br><br>Ready to create the best online store website? Please contact me by filling out this form and soon you will feel how it justifies itself.`;
                } else if(e.classList.contains('corporate_website')){
                    website = 'corporate website';
                    title[0].innerHTML = `${text} a corporate website`;
                    modalText.innerHTML=`The image of the company depends on the web design of the corporate site. A corporate website is typically the website that company use for brand recognition, showing company profile, business information like events or activity.
                    <br><br>Ready to create the best corporate website? Please contact me by filling out this form and soon you will feel how it justifies itself.`;
                } else if(e.classList.contains('agency_portfolio')){
                    website = 'agency / portfolio';
                    title[0].innerHTML = `${text} an agency or portfolio`;
                    modalText.innerHTML=`A portfolio website is a business card site that contains photographs, projects, orders and other achievements of the author or agency. Illustrative examples can increase interest in the product, and, consequently, increase its sales.
                    <br><br>Ready to create the best portfolio/agency website? Please contact me by filling out this form and soon you will feel how it justifies itself.`;
                } else if(e.classList.contains('news_website')){
                    website = 'news website';
                    title[0].innerHTML = `${text} a news website`;
                    modalText.innerHTML=`A news portal is an Internet resource that specializes in collecting and issuing information and news. This is a large, multi-level site that contains tools for interacting with users and searching for publications, mailing lists, and much more. Such resources, as a rule, have a very complex hierarchical structure, including a huge number of sections and subsections.
                    <br><br>If you are planning to redesign your news website or create from scratch, please contact me by filling out this form.`;
                }
            

            // console.log(website);
            fixedOverlay.classList.remove('dn');
            // console.log('a');
            
        })
    })

    btn[1].addEventListener('click', e => {
        e.preventDefault();
        fixedOverlay.classList.add('dn');
    });

    modalClose.addEventListener('click', () => {
        fixedOverlay.classList.add('dn');
    });
    modalCloseBackground.addEventListener('click', () => {
        fixedOverlay.classList.add('dn');
    });
}
function sendToMail(){
    const form = document.querySelector('.modal_form');
    
    const name = document.querySelector('.modal_name');
    const email = document.querySelector('.modal_email');
    const message = document.querySelector('.modal_message');
    const content = document.querySelector('.modal_content');


    btn[1].addEventListener('click', e => {
        e.preventDefault();
        fixedOverlay.classList.add('dn');
    });

    btn[0].addEventListener('click', (e) => {
        e.preventDefault();
        // console.log(name.value, email.value, message.value);
        btn[0].value = 'Sending...';

        // const serviceID = 'web_designer';
        // const templateID = 'template_ox797ed';
     
        // emailjs.sendForm(serviceID, templateID,{
        //     from_name: "landing page",
        //     to_name: "user",
        //     message: "010101",
        //     //reply_to: "123",
        // })
        //  .then(() => {
        //    btn.value = 'Send Email';
        //    alert('Sent!');
        //  }, (err) => {
        //    btn.value = 'Send Email';
        //    alert(JSON.stringify(err));
        //  });
        emailjs.send("web_designer","template_ox797ed",{
            from_name: "landing page",
            to_name: name.value,
            message: message.value,
            reply_to: email.value
        })
            .then(() => {
            btn[0].value = 'Send Email';
            //alert('Sent!');
            title[0].classList.add('dn');
            title[1].classList.remove('dn');
            btn[0].classList.add('dn');
            btn[1].classList.remove('dn');
            description[0].classList.add('dn');
            description[1].classList.remove('dn');
            inputs.classList.add('dn');
            input.classList.add('dn');
            success.classList.remove('dn');
            //form.innerHTML = '';
         }, (err) => {
            btn[0].value = 'Send Email';
            alert(JSON.stringify(err));
         });
    })


}


function elementAnimation() {
    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('element-show');
          }
        });
      }
      
      let options = {
        threshold: [0.5] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.element-animation');
      
      for (let elm of elements) {
        observer.observe(elm);
      }
}

function builtBy() {
    const builtBy = document.querySelector('.built_by');


    builtBy.addEventListener('click', () => {
        window.open('https://www.facebook.com/levon.zaxarian.1/')
    });
}









//emailMe();
// stepList();
projectLinks();

