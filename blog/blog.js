import kind_data from "./kinds.json" assert { type: "json" };
complete_kinds();


function complete_kinds() {
    for(const post of document.getElementsByClassName("post")) {
        const kind = post.classList[post.classList.length-1];
        const tooltip = post.getElementsByClassName("kind").item(0);
        console.log(kind);
        tooltip.setAttribute("title", kind_data[kind]["tooltip"]);
        const tooltip_text = tooltip.getElementsByTagName("small").item(0);
        tooltip_text.textContent = kind_data[kind]["emoji"] + " " + tooltip_text.textContent;
    }
}