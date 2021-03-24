function on_ready() {
    // document.querySelectorAll("h1").style.visibility = "hidden";
    document.querySelectorAll("h1").classList.remove("is-visible");
    // $("h1").hide();
    console.log(document.readyState);
}

window.addEventListener("load", on_ready);
// $(document).ready(on_ready);

// J'essaye de faire le plus de Vannila JS possible !!
// if (document.readyState === "ready" || document.readyState === "complete") {
//     console.log(document.querySelectorAll("h1").style.visibility);
// } else {
//     console.log(document.readyState);
// }
