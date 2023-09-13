function createHome(){
    const main = document.createElement("main");

    const mainContainer = document.createElement("div");
    mainContainer.className = "main-container";
    
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    
    const pizzaImage = document.createElement("img");
    pizzaImage.className = "pizza"; // Fixed here
    pizzaImage.src = "imgs/pizza.png";
    pizzaImage.alt = "An image of a delicious Napolitan pizza";
    
    const mainContentWrapper = document.createElement("div");
    mainContentWrapper.className = "main-content-wrapper"; // Fixed here
    
    const h1 = document.createElement("h1");
    const text = document.createTextNode("Delicious Italian Food - Made ");
    const p = document.createElement("p");
    p.className = "fresh";
    p.textContent = "Fresh!";
    
    const span = document.createElement("span");
    span.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nulla euismod, ullamcorper nunc vel, tristique velit. Integer vitae neque nec sapien convallis ultrices. Praesent auctor massa in mi gravida dignissim. Fusce vel felis vel lorem aliquam tincidunt. Maecenas sit amet volutpat ante.";
    
    const button = document.createElement("button");
    button.className = "order-button";
    button.textContent = "Order Now!";
    let linkElement = document.createElement('link');
    linkElement.id = 'home-style'; 
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = 'styles/style.css';
    document.head.appendChild(linkElement);
    h1.appendChild(text);
    h1.appendChild(p);
    
    imageContainer.appendChild(pizzaImage);
    
    mainContentWrapper.appendChild(h1);
    mainContentWrapper.appendChild(span);
    mainContentWrapper.appendChild(button);
    
    mainContainer.appendChild(imageContainer);
    mainContainer.appendChild(mainContentWrapper);
    
    main.appendChild(mainContainer);
    
    document.body.appendChild(main);    
}

export default createHome   