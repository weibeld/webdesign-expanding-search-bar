(function(window){
    var form = document.getElementById("search-form");
    var toggle = document.getElementById("search-toggle");

    // Capture clicks on search toggle
    toggle.addEventListener("click", function() {
        classie.toggleClass(toggle, "active");
        classie.toggleClass(form, "active");
        cleanUp();
        event.stopPropagation();
    });

    // Capture clicks outside search form and toggle (to collapse search bar)
    document.addEventListener("click", function(e) {
        var clickedID = e.target.id;
        if (clickedID != "search-submit" && clickedID != "search-text") {
            if (classie.has(toggle, "active")) {
                classie.remove(toggle, "active");
                classie.remove(form, "active");
                cleanUp();
            }
        }
    });
}(window));

function cleanUp() {
    var toggle = document.getElementById("search-toggle");
    var toggleImg = document.getElementById("search-toggle-img");
    if (classie.has(toggle, "active")) {
        toggleImg.src="img/close-white.svg";
        document.getElementById("search-text").focus();
    }
    else {
        toggleImg.src="img/search-white.svg";
    }
}

