(function(window){
    var searchBar = document.getElementById("search-text-4");
    var toggle = document.getElementById("search-submit-4");

    // Capture clicks on search submit buton
    toggle.addEventListener("click", function(event) {
        event.stopPropagation();
        classie.toggleClass(searchBar, "active");
        if (classie.has(searchBar, "active"))
            setTimeout(focusSearchBar4, 300);  // TODO: test if it works with a smaller delay in all browsers
    });

    // Capture clicks anywhere on the page, except search bar or submit button
    document.addEventListener("click", function(e) {
        var clickedID = e.target.id;
        if (clickedID != "search-submit-4" && clickedID != "search-text-4") {
            if (classie.has(searchBar, "active")) {
                classie.remove(searchBar, "active");
                searchBar.value = null;
            }
        }
    });
}(window));

/* Called after submit button has been clicked, and before the search form is
 * submitted. The return value of this function determines whether the form is
 * submitted or not.
 * Returns false (form is not submitted) if the search bar is empty (because
 * the submit button has been clicked only to expand/collapse the search bar). 
 * Returns true otherwise (form is submitted).*/
function isSubmitForm4(event) {
    var text = document.getElementById("search-text-4").value;
    if (text == null || text == "")
        return false;
    else
        return true;
}

function focusSearchBar4() {
    document.getElementById("search-text-4").focus();
}
