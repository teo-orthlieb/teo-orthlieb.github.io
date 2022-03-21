window.onload = function on_load() {
    display_age();
    let tab = new URLSearchParams(window.location.search).get("t");
    let button = document.getElementById(tab);
    if (button === null) {
        button = document.getElementById("me");
    }
    open_tab(button);
}

function years_old(date) {
    return new Date(new Date() - new Date(date)).getFullYear() - 1970;
}

function display_age() {
    let bday = document.getElementById("bday").textContent.split("/");
    let age = years_old(new Date(bday[0], bday[1] - 1, bday[2]));
    document.getElementById("bday").textContent = age.toString();
}

function save_state(tab) {
    let params = new URLSearchParams(window.location.search);
    if (tab === "me") {
        params.delete("t");
    } else {
        params.set("t", tab);
    }
    let param_count = 0;
    for (let p of params) {
        param_count += 1;
    }
    let path = location.protocol + '//' + location.host + location.pathname;
    if (path.slice(-1) === '/') {
        path = path.substr(0, path.length - 1);
    }
    if (param_count > 0) {
        window.history.replaceState({}, '', `${path}/?${params.toString()}`);
    } else {
        window.history.replaceState({}, '', `${path}`);
    }
}

function open_tab(button) {
    let tab = button.id;
    save_state(tab);
    // Get all elements with class="tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(`tab_${tab}`).style.display = "flex";
    button.className += " active";
}
