const UI_ELEMENTS = {
    BUTTONS: {
        SETTINGS: document.getElementById('btn-settings'),
        CLOSE_SETTINS: document.querySelector('.close'),
    },
    WINDOWS: {
        SETTINGS: document.querySelector('.modal'),
    }
};

UI_ELEMENTS.BUTTONS.SETTINGS.addEventListener('click', function() {
    UI_ELEMENTS.WINDOWS.SETTINGS.style.display = "block";
});

UI_ELEMENTS.BUTTONS.CLOSE_SETTINS.addEventListener('click', function() {
    UI_ELEMENTS.WINDOWS.SETTINGS.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == UI_ELEMENTS.WINDOWS.SETTINGS) {
        UI_ELEMENTS.WINDOWS.SETTINGS.style.display = "none";
    }
  }

// window.onclick = function() {
//     UI_ELEMENTS.WINDOWS.SETTINGS.style.display = "none";
// };

// window.addEventListener('click', function() {
//     UI_ELEMENTS.WINDOWS.SETTINGS.style.display = "none";
// });
