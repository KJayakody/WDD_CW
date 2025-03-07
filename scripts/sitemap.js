function navigate(page) {
    window.location.href = page;
}

function navigateNewTab(page) {
    window.open(page, "_blank");
}

function handleKeyPress(event, page) {
    if (event.key === "Enter" || event.key === " ") {
        navigate(page);
    }
}

document.addEventListener("keydown", function(event) {
    let focusableNodes = document.querySelectorAll(".node, .sub_node");
    let currentIndex = Array.from(focusableNodes).indexOf(document.activeElement);

    if (event.key === "ArrowDown") {
        event.preventDefault();
        let nextIndex = (currentIndex + 1) % focusableNodes.length;
        focusableNodes[nextIndex].focus();
    }
    
    if (event.key === "ArrowUp") {
        event.preventDefault();
        let prevIndex = (currentIndex - 1 + focusableNodes.length) % focusableNodes.length;
        focusableNodes[prevIndex].focus();
    }
});
