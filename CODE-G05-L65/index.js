function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// The only way to get a random integer in Js 😭

function randomNewColor() {
    var hue = Math.floor(Math.random() * 18) * 20;
    var pastel = `hsl( ${hue} , 100%, 80%)`;
    return pastel;
}

function onFirstParagraphClick() {
    // No need to use Var because it's will be a global variable
    Hidden_paragraph_number = randomInt(1, 5);
    // true is visible (hide) false is hidden (show and change set random color)
    for (var i = 0; i < paragraphs.length; i++) {
        if (paragraphs[i].style.visibility === "hidden") {
            let Current_paragraph = paragraphs[i];
            var newColor = randomNewColor();
            Current_paragraph.style.background = newColor;
            Current_paragraph.style.visibility = "visible";
            console.log(
                "set paragraph number ",
                Hidden_paragraph_number,
                "to color",
                newColor,
                "and made it visible"
            );
            return;
        }
    }
    // paragraphs_state[Hidden_paragraph_number] = true;
    console.log("Hidden paragraph number", Hidden_paragraph_number + 1);
    Current_paragraph = paragraphs[Hidden_paragraph_number];
    Current_paragraph.style.visibility = "hidden";
}

function onReset() {
    for (var i = 0; i < paragraphs.length; i++) {
        let Current_paragraph = paragraphs[i];
        Current_paragraph.style.visibility = "visible";
        Current_paragraph.style.background = "rgb(71, 150, 202)";
    }
}

function onHideAll() {
    for (var i = 0; i < paragraphs.length; i++) {
        let Current_paragraph = paragraphs[i];
        Current_paragraph.style.visibility = "hidden";
    }
}

function onShowAll() {
    for (var i = 0; i < paragraphs.length; i++) {
        let Current_paragraph = paragraphs[i];
        Current_paragraph.style.visibility = "visible";
    }
}

function onReady() {
    // NavBar hover activity

    const burgerIcon = document.getElementById("burger");
    const navbarMenu = document.getElementById("nav-links");

    burgerIcon.addEventListener("click", () => {
        navbarMenu.classList.toggle("is-active");
    });

    // Event listener, paragraphs
    paragraphs = document.getElementsByTagName("p");
    paragraphs[0].addEventListener("click", onFirstParagraphClick);

    // Event listener, Reset paragraphs
    reset_button = document.getElementById("reset");
    reset_button.addEventListener("click", onReset);

    // Event listener, hide all paragraphs

    hide_button = document.getElementById("hide-all");
    hide_button.addEventListener("click", onHideAll);

    // Event listener, show all paragraphs

    show_button = document.getElementById("show-all");
    show_button.addEventListener("click", onShowAll);
}
window.addEventListener("load", onReady);
