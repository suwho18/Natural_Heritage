var current = 0;
var current_2 = 0;
showSlides();
showSlides_links();

function showSlides() {
    var slides = document.querySelectorAll("#slides > img")
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    current++;
    if(current > slides.length)
    current = 1;
    slides[current -1 ].style.display = "block";
    setTimeout(showSlides,3000)
}



function showSlides_links() {
    var slides_link = document.querySelectorAll("#slides_link > a ")
    for (var i = 0; i < slides_link.length; i++) {
        slides_link[i].style.display = "none";
    }
    current_2++;
    if(current_2 > slides_link.length)
    current_2 = 1;
    slides_link[current_2 -1].style.display = "block";
    setTimeout(showSlides_links,3333)
}

function load(URL){
    window.open(URL, "myWin", "left=300, top=300, width=400, height=300");
}
  

