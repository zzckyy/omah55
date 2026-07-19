function loadComponent(id, file, callback) {
    fetch(file)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback();
        });
}

loadComponent("navbar", "./components/navbar.html", () => {
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
loadComponent("footer", "/components/footer.html");


