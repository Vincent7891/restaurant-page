
function createAbout(){

    const main = document.createElement('main');

    const mainContentWrapper = document.createElement('div');
    mainContentWrapper.className = 'main-content-wrapper';
    
    const h1Main = document.createElement('h1');
    h1Main.textContent = "We have been crafting artisan pizzas since 88'";
    
    const spanMain = document.createElement('span');
    spanMain.textContent = 'Lorem ipsum dolor sit amet...'; 
    
    mainContentWrapper.appendChild(h1Main);
    mainContentWrapper.appendChild(spanMain);
    
    const imageLayout = document.createElement('div');
    imageLayout.className = 'image-layout';
    
    const h2 = document.createElement('h2');
    h2.textContent = 'Our Triple C';
    imageLayout.appendChild(h2);
    
    const items = [
        { imgSrc: 'imgs/calzone.png', content: 'Lorem ipsum...' }, 
        { imgSrc: 'imgs/carbonara.png', content: 'Lorem ipsum...' }, 
        { imgSrc: 'imgs/cannoli.png', content: 'Lorem ipsum...' }
    ];
    
    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `item${index + 1}`;
    
        const img = document.createElement('img');
        img.src = item.imgSrc;
    
        const span = document.createElement('span');
        span.textContent = item.content;
    
        div.appendChild(img);
        div.appendChild(span);
        imageLayout.appendChild(div);
    });
    
    main.appendChild(mainContentWrapper);
    main.appendChild(imageLayout);
    
    const article = document.createElement('article');
    
    const teamWrapper = document.createElement('div');
    teamWrapper.className = 'team-wrapper';
    
    const h3 = document.createElement('h3');
    h3.textContent = 'Meet the team!';
    teamWrapper.appendChild(h3);
    
    const roles = ['chef', 'owner', 'waiter'];
    roles.forEach(role => {
        const div = document.createElement('div');
        div.className = `employee-${role}`;
    
        const img = document.createElement('img');
        img.src = `imgs/${role}.png`;
    
        const span = document.createElement('span');
        span.textContent = 'Lorem ipsum...';  
    
        div.appendChild(img);
        div.appendChild(span);
        teamWrapper.appendChild(div);
    });
    let linkElement = document.createElement('link');
    linkElement.id = 'about-style';
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = 'styles/about-style.css';
    document.head.appendChild(linkElement);
    
    article.appendChild(teamWrapper);
    
    const footer = document.createElement('footer');
    footer.textContent = 'COPYRIGHT DISCLAIMER';
    document.body.appendChild(main);
    document.body.appendChild(article);
    document.body.appendChild(footer);   
}

export default createAbout;