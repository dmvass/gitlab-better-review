const diffHolderSelector = ".diff-files-holder.container-limited.limit-container-width";

var container = document.getElementById("diff-notes-app");

container.addEventListener("DOMNodeInserted", function (event) {
    changeMaxWidth(diffHolderSelector);
}, false);

function changeMaxWidth(selector) {
    document.querySelectorAll(selector).forEach(el => {
        el.style.maxWidth = "none";
    });
}
