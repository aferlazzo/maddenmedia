(function() {
    var ad_button;
    var i;

    /* 
     *  ad_button_clicked is a listener for clicks to element having "ad_button" className.
     *  
     *  We are adding and removing classes depending on which button is clicked.
     *   
     *  Initially each button's slide is at left:320px, top:0, width:0, and on separate z-index planes;
     *  
     *  If there's a slider div with a className slide_right then remove the className.
     *  If there's a slider div with  a className slide_left then remove the className
     *  When a button is clicked we add the slide_left class to its corresponding slide.
     *
     */
    var ad_button_clicked = function (e) {
        var the_button;
        var the_slide;
        var the_slider_string;
        var the_elements;

        the_button = e.currentTarget.id;
        console.log("ad_button with id of", the_button, "was clicked");

        // remove slide_right and slide_left classNames if they exist
        the_elements = document.getElementsByClassName("slide_right");
        if (the_elements.length > 0) {
            the_elements[0].className = "";
            console.log("className 'slide_right' was removed from the last slide");
        }
        the_elements = document.getElementsByClassName("slide_left");
        if (the_elements.length > 0) {
            the_elements[0].className = " slide_right";
            console.log("className 'slide_left' was removed from the last slide and 'slide_right' was added");
        }

        // when a button is clicked add the slide_left class to the corresponding slide
        the_slide_string = the_button + "_slide";
        the_slide = document.getElementById(the_slide_string);
        the_slide.className += " slide_left";
        console.log("className 'slide_left' was added to slide", the_slide_string);
    };


    /*
     * At the start if the script set the ad_button_clicked function as 
     * an event listener for every menu button.
     * 
     */
    ad_button = document.getElementsByClassName("ad_button");

    for (i = 0; i < ad_button.length; i++) {
        ad_button[i].addEventListener("click", ad_button_clicked, false);
    }
})();
