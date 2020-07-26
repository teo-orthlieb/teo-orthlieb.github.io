function on_load() {
    let tab = new URLSearchParams(window.location.search).get("t");
    let button = document.getElementById(tab);
    if(button === null) {
        button = document.getElementById("me");
    }
    open_tab(button);
}

function save_state(tab) {
    let params = new URLSearchParams(window.location.search);
    if(tab === "me") {
        params.delete("t");
    } else {
        params.set("t", tab);
    }
    window.history.replaceState({}, '', `/?${params.toString()}`);
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
    document.getElementById(`tab_${tab}`).style.display = "block";
    button.className += " active";
}
