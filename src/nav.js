function createNav(){
    const header = document.createElement("header");
    const headerContainer = document.createElement("div");
    headerContainer.className = "header-container"
    
    const logoImg = document.createElement("img")
    logoImg.id = "logo"
    logoImg.src = "imgs/logo.png"
    logoImg.alt = "The Logo for Pizza Co"
    
    const nav = document.createElement("nav")
    const ul = document.createElement("ul")
    ul.className = "menu";
    
    const menuItems = ["Home", "About", "Contact"]
    menuItems.forEach(item => {
        const li = document.createElement("li")
        const a = document.createElement("a");
        a.textContent = item
        li.id = item.toLowerCase();
        li.appendChild(a)
        ul.appendChild(li);
    })

    nav.appendChild(ul);
    headerContainer.appendChild(logoImg);
    headerContainer.appendChild(nav);
    header.appendChild(headerContainer);
    
    document.body.appendChild(header);    
}

export default createNav