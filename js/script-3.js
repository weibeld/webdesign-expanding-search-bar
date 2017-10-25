(function(window){
    var searchBar = document.getElementById("search-text-3");
    var toggle = document.getElementById("search-submit-3");

    // Capture clicks on search submit buton
    toggle.addEventListener("click", function(event) {
        event.stopPropagation();
        classie.toggleClass(toggle, "active");
        classie.toggleClass(searchBar, "active");
        if (classie.has(searchBar, "active")) searchBar.focus();
    });

    // Capture clicks anywhere on the page, except search bar or submit button
    document.addEventListener("click", function(e) {
        var clickedID = e.target.id;
        if (clickedID != "search-submit-3" && clickedID != "search-text-3") {
            if (classie.has(toggle, "active")) {
                classie.remove(toggle, "active");
                classie.remove(searchBar, "active");
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
function isSubmitForm3(event) {
    var text = document.getElementById("search-text-3").value;
    if (text == null || text == "")
        return false;
    else
        return true;
}

