function on_load() {
    let path = window.location.pathname;
    let button = document.getElementById(path);
    if(button === null) {
        button = document.getElementById("me");
    }
    openTab(button);
}


function openTab(button) {
    let tab = button.id;
    window.history.replaceState({}, '', (tab === "me")? "/" : `/${tab}`);

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
