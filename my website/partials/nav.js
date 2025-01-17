export function renderNav() {
    const isInPagesDirectory = window.location.pathname.includes('/pages/');

    return `
     <nav id="navbarContainer">
            <ul id="ulContainer">
                <li><a href="${isInPagesDirectory ? '../index.html' : 'index.html'}">Home</a></li>
                <li><a href="${isInPagesDirectory ? '../pages/essentialize.html' : 'pages/essentialize.html'}">Essentialize</a></li>
                <li><a href="${isInPagesDirectory ? '../pages/objectivism.html' : 'pages/objectivism.html'}">Objectivism</a></li>
                <li><a href="${isInPagesDirectory ? '../pages/contact.html' : 'pages/contact.html'}">Contact</a></li>
            </ul>
        </nav>
    `;
}