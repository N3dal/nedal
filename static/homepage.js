var images = new Array("static/images/placeholder0.gif",
     "static/images/placeholder1.gif",
     "static/images/placeholder2.gif",
     "static/images/placeholder3.gif");


window.onload = function(){
     choosePic();
}

function choosePic() {
     var randomNum = Math.floor(Math.random() * images.length);
     document.getElementById("center-image").src = images[randomNum];
}
