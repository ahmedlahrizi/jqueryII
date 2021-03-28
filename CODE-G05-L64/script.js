paragraphs_state = {};
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function randomNewColor() {
    var hue = Math.floor(Math.random() * 5) * 72;
    var pastel = `hsl( ${hue} , 100%, 80%)`;
    return pastel;
}
// The only way to get a random integer in Js 😭
function onClick() {
    // No need to use Var because it's will be a global variable
    Current_hidden_object_number = randomInt(1, 5);
    // true is visible (hide) false is hidden (show and change set random color)
    for (var i = 0; i < paragraphs.length; i++) {
        if (paragraphs[i].style.visibility === "hidden") {
            Current_paragraph = paragraphs[i];
            Current_paragraph.style.background = randomNewColor();
            Current_paragraph.style.visibility = "visible";
            return;
        }
    }
    // paragraphs_state[Current_hidden_object_number] = true;
    console.log("Hidden paragraph number", Current_hidden_object_number + 1);
    Current_paragraph = paragraphs[Current_hidden_object_number];
    Current_paragraph.style.visibility = "hidden";
}

function onReady() {
    // NavBar hover activity

    const burgerIcon = document.getElementById("burger");
    const navbarMenu = document.getElementById("nav-links");

    // navbarMenu.addClass("is-active");
    burgerIcon.addEventListener("click", () => {
        navbarMenu.classList.toggle("is-active");
    });
    paragraphs = document.getElementsByTagName("p");
    paragraphs[0].addEventListener("click", onClick);
}
window.addEventListener("load", onReady);
