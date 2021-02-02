
const changeTitleWhenUserMovesAway = function() {
    let pageTitle = document.title;

    window.addEventListener("blur", function(event) {
        document.title = " ❤️ U";
    });

    window.addEventListener("focus", function(event) {
        document.title = pageTitle;
    });
}


export default changeTitleWhenUserMovesAway;
