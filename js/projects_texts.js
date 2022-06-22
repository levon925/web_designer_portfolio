/*jshint esversion: 6 */

const headerIcons = document.querySelector('.header_icons'),
      about = document.querySelector('.about'),
      concept = document.querySelector('.concept');


    

//console.log(width);

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
        e.addEventListener('click',() => window.open('https://behance.com'));
    });
    instagram.forEach(e => {
        e.addEventListener('click',() => window.open('https://instagram.com'));
    });
    facebook.forEach(e => {
        e.addEventListener('click',() => window.open('https://facebook.com'));
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
    const width = document.body.clientWidth;
    console.log(width);
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
    headerIcons.innerHTML= "<img class='social behance_link cursor_pointer' src='img/header/behance.svg' alt='behance'><img class='social_down instagram_link cursor_pointer' src='img/header/instagram.svg' alt='instagram'><img class='social facebook_link cursor_pointer' src='img/header/facebook.svg' alt='facebook'>";
        //concept.textContent = "first concept ";
    if(width < 1583 && width >= 983){
        resetProjectList();
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
        headerIcons.innerHTML= "<img class='social' src='img/header/behance.svg' alt='behance'><img class='social_down' src='img/header/instagram.svg' alt='instagram'><img class='social' src='/img/header/facebook.svg' alt='facebook'>";
        concept.textContent = "first concept ";
        imageChange(1000);
 
    } else if(width < 983 && width >= 623) {
        resetProjectList();
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
        headerIcons.innerHTML= "<img class='social' src='img/header/behance.svg' alt='behance'><img class='social_down' src='img/header/instagram.svg' alt='instagram'><img class='social' src='/img/header/facebook.svg' alt='facebook'>";
        concept.textContent = "first concept ";
    } else if(width < 623 && width >= 0) {
        
        imageChange(320);
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
                    <img class="cursor_pointer" src="img/projects/arrow.svg" alt="">
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
            <img class="cursor_pointer" src="img/projects/arrow.svg" alt="">
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
            <img class="cursor_pointer" src="img/projects/arrow.svg" alt="">
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
            <img class="cursor_pointer" src="img/projects/arrow.svg" alt="">
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
            <img class="cursor_pointer" src="img/projects/arrow.svg" alt="">
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
            <img class="cursor_pointer" src="img/projects/arrow.svg" alt="">
        </div>
        <span class="goldory_description element-animation">
            Goldory is a website concept made for a real estate company based in Moscow. The Goldory Luxury House has bright and spacious rooms, hight ceilings and geometric facade elements.
        </span>
    </div>
</div>
</div>`
];






        const headerIconsImages = headerIcons.querySelectorAll('img'),
              projectsCols = document.querySelectorAll('.projects_col');
        //projectsCols.innerHTML="<div class='projects_col'><p class='projects_title'>selected projects</p><div class='projects_column'></div></div>";
            projectsCols[1].remove();
            //removeProjectButtons();
        const projectsColumn = projectsCols[0].querySelector('.projects_column');
        
        console.log(projectsColumn);
              projectsColumn.innerHTML = projects[0] + projects[3] + projects[1] + projects[4] + projects[2] + projects[5];
              




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
              headerIcons.innerHTML= "<img class='social' src='img/header/behance.svg' alt='behance'><img class='social_down' src='img/header/instagram.svg' alt='instagram'><img class='social' src='/img/header/facebook.svg' alt='facebook'>";



              removeProjectButtons();
              //imageChange(320);
              
        // for(i = 0; i < 3; i++){
        //     headerIcons.removeChild(headerIconsImages[i]);
        // }
        headerIconsImages.forEach(element => {
            element.remove();
        });
        // const burgerMenu = document.createElement('img');
        // burgerMenu.src = 'img/projects/menu.svg';
        // burgerMenu.classList.add('burger_menu');
        const burgerMenu = "<img class='burger_menu' src='img/projects/menu.svg'>";
        headerIcons.innerHTML=burgerMenu;
        // headerIcons.appendChild(burgerMenu);
        // console.log(burgerMenu);
        about.innerHTML="<p>about me</p><div class='about_col'><span class='first_text'>I'm Lana Topchyan, junior web designer based in Tbilisi, Georgia, working remotely all over the world. I‘m in love with web design, typography and minimal style.</span><img class='about_img' src='img/lana/lana_2.svg'><span class='second_text'>I design thoughtful web interfaces that are comfortable to interact with. I like the minimalist aesthetic, simple effective solutions and light animation.</span></div>";
        concept.textContent = "concept ";
    }
    else {
        resetProjectList();
        imageChange(1600);
        addProjectButtons();
   
      
      
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
    console.log('reset');
    
    socialHeaderButtons();
    
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
                        <img class="cursor_pointer" src="img/projects/arrow.svg" alt="">
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
                        <img class="cursor_pointer" src="img/projects/arrow.svg" alt="">
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
                        <img class="cursor_pointer" src="img/projects/arrow.svg" alt="">
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
                    <img class="cursor_pointer" src="img/projects/arrow.svg" alt="">
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
                    <img class="cursor_pointer" src="img/projects/arrow.svg" alt="">
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
                    <img class="cursor_pointer" src="img/projects/arrow.svg" alt="">
                </div>
                <span class="goldory_description element-animation">
                    Goldory is a website concept made for a real estate company based in Moscow. The Goldory Luxury House has bright and spacious rooms, hight ceilings and geometric facade elements.
                </span>
            </div>
        </div>
    </div>
</div>`;
nestle = document.querySelector('.nestle_description');
projectLinks();
}


function stepList(){
    const stepButton = document.querySelectorAll('.step');
    stepButton.forEach(e =>{
        const stepImage = e.querySelectorAll('img');
        const stepDescription = e.querySelector('.step_description');
        stepImage.forEach(e =>{
            e.addEventListener('click', () => {
                stepDescription.classList.toggle('dn');
                stepImage.forEach(e => {
                    e.classList.toggle('dn');
                });
            });
        });
        // stepImage.addEventListener('click',()=>{
        //     stepDescription.classList.toggle('dn');

        // });
    });
}

function emailMe(){
    const footer = document.querySelector('footer'),
          emailMe = document.querySelector('.email_me'),
          emailMove = document.querySelectorAll('.footer_links');
          let emailMeMove = document.querySelector('.email_me_move');
          

          emailMeMove.style.display = "none";
    footer.addEventListener('mouseenter', () => {
        console.log('footer mouseenter');
        emailMe.style.opacity = "0";
    });
    footer.addEventListener('mouseleave', () => {
        console.log('footer mouseout');
        emailMe.style.opacity = "1";
        emailMeMove.style.display = "none";
    });
    footer.addEventListener('mousemove',e => {
        
        
        const x = e.pageX,
              y = e.pageY,
              html = document.querySelector('html'),
              z = html.offsetHeight - footer.offsetHeight - 70,
              
              zero = z - emailMeMove.style.top.replace(/[^0-9,\.]/g,"");
              console.log(html.offsetHeight);
            console.log(emailMeMove.style.top,footer.offsetHeight,z);
            console.log(z - emailMeMove.style.top.replace(/[^0-9,\.]/g,""));
            console.log(html.offsetHeight - z, zero);
            
            emailMeMove.style.left = x - emailMeMove.offsetWidth/2 + "px";
            emailMeMove.style.top = y - emailMeMove.offsetHeight/1.08 + "px";
            
                if(zero <= 0){
                    console.log("<=0");
                    // emailMeMove = document.createElement("div");
                    // emailMeMove.classList.add("email_me_move");
                    emailMeMove.style.display = "flex";
                    if(!(emailMeMove.innerHTML="")){
                        console.log("a");
                    }
                    emailMeMove.outerHTML = `<div class="email_me_move">email me</div>`;
                    console.log(emailMeMove,emailMeMove.outerHTML);
                    
                    
                }
                else{
                    console.log(">0");
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
        console.log('email mouseenter');
    });
    emailMove.addEventListener('mouseleave',() => {
        emailMe.style.opacity = "0";
        console.log('email mouseout');
    });
    
    
}


// projectLinks();

function projectLinks() {
    projectBtns('.mura_title','projects/MURA_BOUTIQUE.html');
    projectBtns('.aston_title','projects/ASTON_MARTIN.html');
    projectBtns('.nestle_title','projects/NESTLÉ_WEBSITE.html');
    projectBtns('.sky_title','projects/SKY_NEWS.html');
    projectBtns('.eltrendy_title','projects/ELTRENDY_STORE.html');
    projectBtns('.goldory_title','projects/GOLDORY.html');
}

function projectBtns(x,y) {
    const project = document.querySelector(x);
    console.log(project);
    project.addEventListener('click',() => window.open(y));
}

function modalClose(){
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
            const websiteType = document.querySelectorAll('.modal_website_type');
            websiteType.forEach(event => {
                if(e.classList.contains('landing_page')){
                    website = 'landing page'
                    event.innerHTML = 'landing page'
                } else if(e.classList.contains('online_store')){
                    website = 'online store'
                    event.innerHTML = 'online store'
                } else if(e.classList.contains('corporate_website')){
                    website = 'corporate website'
                    event.innerHTML = 'corporate website'
                } else if(e.classList.contains('agency_portfolio')){
                    website = 'agency / portfolio'
                    event.innerHTML = 'agency / portfolio'
                } else if(e.classList.contains('news_website')){
                    website = 'news website'
                    event.innerHTML = 'news website'
                }
            })

            console.log(website);
            fixedOverlay.classList.remove('dn');
            console.log('a');
            
        })
    })

    modalClose.addEventListener('click', () => {
        fixedOverlay.classList.add('dn');
    });
    modalCloseBackground.addEventListener('click', () => {
        fixedOverlay.classList.add('dn');
    });
}
function sendToMail(){
    const form = document.querySelector('.modal_form')
    const btn = document.querySelector('.modal_button');
    const name = document.querySelector('.modal_name');
    const email = document.querySelector('.modal_email');
    const message = document.querySelector('.modal_message');



    btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(name.value, email.value, message.value);
        btn.value = 'Sending...';

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
            btn.value = 'Send Email';
            alert('Sent!');
         }, (err) => {
            btn.value = 'Send Email';
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


elementAnimation();
sendToMail();





modalClose();


//emailMe();
stepList();

