(function(window){
    var form = document.getElementById("search-form-2");
    var toggle = document.getElementById("search-toggle-2");

    // Capture clicks on search toggle
    toggle.addEventListener("click", function(event) {
        event.stopPropagation();
        classie.toggleClass(toggle, "active");
        classie.toggleClass(form, "active");
        cleanUp2();
    });

    // Capture clicks outside search form and toggle (to collapse search bar)
    document.addEventListener("click", function(e) {
        var clickedID = e.target.id;
        if (clickedID != "search-submit-2" && clickedID != "search-text-2") {
            if (classie.has(toggle, "active")) {
                classie.remove(toggle, "active");
                classie.remove(form, "active");
                cleanUp2();
            }
        }
    });
}(window));

function cleanUp2() {
    var toggle = document.getElementById("search-toggle-2");
    var toggleImg = document.getElementById("search-toggle-img-2");
    if (classie.has(toggle, "active")) {
        toggleImg.src="img/close-white.svg";
        // Delay focussing search bar until transition is complete
        setTimeout(focusSearchBar2, 300);  // TODO: test if it works with a smaller delay in all browsers
    }
    else {
        toggleImg.src="img/search-white.svg";
    }
}

function focusSearchBar2() {
    document.getElementById("search-text-2").focus();
}

