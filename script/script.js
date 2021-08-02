const navbar = document.getElementById("nav-bar");
const sheet = document.getElementById("sheet");

document.onscroll = () => {
    navbar.style.background = "#11111";

    if (window.pageYOffset >= sheet.offsetTop)
        navbar.style.background = "rgb(17, 17, 17)";
    else
        navbar.style.background = "linear-gradient(to right,#36771c, #7edd58)"
}