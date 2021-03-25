function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// The only way to get a random integer in Js 😭
function onEnter() {
    // No need to use Var because it's will be a global variable
    Current_hidden_object = randomInt(2, 6);
    console.log("Hidden paragraph number", Current_hidden_object);

    $(`p:nth-child(${Current_hidden_object})`).hide();
}
function onLeave() {
    $(`p:nth-child(${Current_hidden_object})`).show();
    console.log("Showed paragraph number", Current_hidden_object);
}
function onReady() {
    $("p:nth-child(1)").mouseenter(onEnter);
    $("p:nth-child(1)").mouseleave(onLeave);
}
$(document).ready(onReady);
