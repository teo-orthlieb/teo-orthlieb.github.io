window.onload = function on_load() {
    display_age();
}

function years_old(date) {
    return new Date(new Date() - new Date(date)).getFullYear() - 1970;
}

function display_age() {
    let bday = document.getElementById("bday").textContent.split("/");
    let age = years_old(new Date(bday[0], bday[1] - 1, bday[2]));
    document.getElementById("bday").textContent = age.toString();
}
