let index2 = 0;
displayImages2();
function displayImages2() {
    let i;
    const images2 = document.getElementsByClassName("image2");
    for (i = 0; i < images2.length; i++) {
        images2[i].style.display = "none";
    }
    index2++;
    if (index2 > images2.length) {
        index2 = 1;
    }
    images2[index2-1].style.display = "block";
    setTimeout(displayImages2, 3000); 
}
