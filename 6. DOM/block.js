let modals = document.getElementsByClassName("modal");
let buttons = document.getElementsByClassName("myBtn");
let closeButtons = document.getElementsByClassName("close");

function showModal(modal) {
    modal.style.display = "block";
}
function hideModal(modal) {
    modal.style.display = "none";
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        showModal(modals[i]);
    });
}

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
        hideModal(modals[i]);
    });
}

window.addEventListener('click', function(event) {
    for (let modal of modals) {
        if (event.target === modal) {
            hideModal(modal);
        }
    }
});
