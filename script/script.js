const mainContent = document.getElementById("main-container");
const infoContent = document.getElementById("info-container");
const linksContent = document.getElementById("links-container");

var mainLoaded = true;
var infoLoaded = false;
var linksLoaded = false;
var theme = "LIGHT";

// load all page content
function loadPage() {
    const loading = document.getElementById("loading");

    setTimeout(() => loading.style.top = "-125%", 500);
    setTimeout(() => mainContent.style.top = "33.5%", 1000);
}

// load the info page
function loadInfo() {
    mainContent.style.left = "125%";
    infoContent.style.left = "39%";

    infoLoaded = true;
    mainLoaded = false;
}

// load the main page
function loadMain() {
    linksContent.style.top = "125%";
    infoContent.style.top = "27%";

    if (linksLoaded) {
        setTimeout(() => {
            mainContent.style.left = "39%";
            infoContent.style.left = "-125%";
        }, 500);
    } else {
        mainContent.style.left = "39%";
        infoContent.style.left = "-125%";
    }

    infoLoaded = false;
    linksLoaded = false;
    mainLoaded = true;
}

// load the links page
function loadLinks() {
    linksContent.style.top = "75%";
    infoContent.style.top = "5%";

    linksLoaded = true;
}

// change the color theme of the website
function darkTheme() {
    const titles = document.getElementById("title");
    const debate = document.getElementById("debate");
    const darkTheme = document.getElementById("dark-theme");
    const loadLinks = document.getElementById("load-links");
    const loadMain = document.getElementById("load-main");
    const loadInfo = document.getElementById("load-info");

    var back;
    var fore;
    if (theme === "LIGHT") {
        back = "#151515"
        fore = "#fff";

        document.getElementById("dark-theme").innerHTML = "Click to enable light theme.";
        theme = "DARK";
    } else {
        back = "#fff";
        fore = "#151515";

        document.getElementById("dark-theme").innerHTML = "Click to enable dark theme.";
        theme = "LIGHT";
    }

    document.body.style.backgroundColor = back;

    titles.style.color = fore;
    debate.style.color = fore;
    mainContent.style.color = fore;
    infoContent.style.color = fore;
    linksContent.style.color = fore;

    loadInfo.style.color = fore;
    loadInfo.style.border = "3px solid " + fore;
    loadMain.style.color = fore;
    loadMain.style.border = "3px solid " + fore;
    darkTheme.style.color = fore;
    darkTheme.style.border = "3px solid " + fore;
    loadLinks.style.color = fore;
    loadLinks.style.border = "3px solid " + fore;
}

// events
document.onreadystatechange = () => loadPage();
document.getElementById("load-info").onclick = () => loadInfo();
document.getElementById("load-main").onclick = () => loadMain();
document.getElementById("load-links").onclick = () => loadLinks();
document.getElementById("dark-theme").onclick = () => darkTheme();
document.getElementById("debate").onclick = () => window.open("https://discord.gg/debate", "_blank");