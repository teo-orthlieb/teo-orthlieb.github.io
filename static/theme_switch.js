if (get_theme() === "light") {
    set_light();
} else {
    set_dark();
}
document.body.setAttribute("class", "");


function get_theme() {
    return localStorage.getItem("theme") || "dark";
}

function set_light() {
    document.getElementById("theme_toggle").setAttribute("src", "/sun_icon.png");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
}

function set_dark() {
    document.getElementById("theme_toggle").setAttribute("src", "/moon_icon.png");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
}

function on_theme_switch() {
    if (get_theme() === "dark") {
        set_light();
    } else {
        set_dark();
    }
}