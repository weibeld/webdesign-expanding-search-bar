(function(window){
    var form = document.getElementById("search-form-1");
    var toggle = document.getElementById("search-toggle-1");

    // Capture clicks on search toggle
    toggle.addEventListener("click", function(event) {
        event.stopPropagation();
        classie.toggleClass(toggle, "active");
        classie.toggleClass(form, "active");
        cleanUp1();
    });

    // Capture clicks outside search form and toggle (to collapse search bar)
    document.addEventListener("click", function(e) {
        var clickedID = e.target.id;
        if (clickedID != "search-submit-1" && clickedID != "search-text-1") {
            if (classie.has(toggle, "active")) {
                classie.remove(toggle, "active");
                classie.remove(form, "active");
                cleanUp1();
            }
        }
    });
}(window));

function cleanUp1() {
    var toggle = document.getElementById("search-toggle-1");
    var toggleImg = document.getElementById("search-toggle-img-1");
    if (classie.has(toggle, "active")) {
        toggleImg.src="img/close-white.svg";
        document.getElementById("search-text-1").focus();
    }
    else {
        toggleImg.src="img/search-white.svg";
    }
}

