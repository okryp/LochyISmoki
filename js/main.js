themeSwitch = document.querySelector("#theme-switch");

themeSwitch.addEventListener("click", () => {
    body = document.querySelector("body");

    body.classList.contains("light-theme") 
    ?
        body.classList.replace("light-theme", "dark-theme")
    :
        body.classList.replace("dark-theme", "light-theme")
});