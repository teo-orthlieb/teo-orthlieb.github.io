function on_theme_switch() {
    console.log("hello");
    let is_dark = document.body.classList.contains("dark");
    let toggle = document.getElementById("theme_toggle");
    if (is_dark) {
        document.body.setAttribute("class", "");
        toggle.setAttribute("src", "/sun_icon.png");
    } else {
        toggle.setAttribute("src", "/moon_icon.png");
        document.body.setAttribute("class", "dark");
    }
}