// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");
var modal10 = document.getElementById("myModal10");
var modal11 = document.getElementById("myModal11");
var modal12 = document.getElementById("myModal12");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var img10 = document.getElementById("myImg10");
var img11 = document.getElementById("myImg11");
var img12 = document.getElementById("myImg12");

var captionText = document.getElementById("caption");
var bg = document.getElementsByClassName("bg fixed")

// modal1
img1.onclick = function(){
  modal1.style.display = "block";
  captionText.innerHTML = this.alt;
  $('html').css('overflow-y','hidden')
}
// modal2
img2.onclick = function(){
  modal2.style.display = "block";
  captionText.innerHTML = this.alt;
  $('html').css('overflow-y','hidden')
}

img3.onclick = function(){
  modal3.style.display = "block";
  captionText.innerHTML = this.alt;
  $('html').css('overflow-y','hidden')
}

img4.onclick = function(){
  modal4.style.display = "block";
  captionText.innerHTML = this.alt;
  $('html').css('overflow-y','hidden')
}

img5.onclick = function(){
  modal5.style.display = "block";
  captionText.innerHTML = this.alt;
  $('html').css('overflow-y','hidden')
}

img6.onclick = function(){
  modal6.style.display = "block";
  captionText.innerHTML = this.alt;
  $('html').css('overflow-y','hidden')
}

img7.onclick = function(){
  modal7.style.display = "block";
  captionText.innerHTML = this.alt;
  $('html').css('overflow-y','hidden')
}

img8.onclick = function(){
  modal8.style.display = "block";
  captionText.innerHTML = this.alt;
  $('html').css('overflow-y','hidden')
}

img9.onclick = function(){
  modal9.style.display = "block";
  captionText.innerHTML = this.alt;
  $('html').css('overflow-y','hidden')
}

img10.onclick = function(){
  modal10.style.display = "block";
  captionText.innerHTML = this.alt;
  $('html').css('overflow-y','hidden')
}

img11.onclick = function(){
  modal11.style.display = "block";
  captionText.innerHTML = this.alt;
  $('html').css('overflow-y','hidden')
}

img12.onclick = function(){
  modal12.style.display = "block";
  captionText.innerHTML = this.alt;
  $('html').css('overflow-y','hidden')
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];
var span7 = document.getElementsByClassName("close")[6];
var span8 = document.getElementsByClassName("close")[7];
var span9 = document.getElementsByClassName("close")[8];
var span10 = document.getElementsByClassName("close")[9];
var span11 = document.getElementsByClassName("close")[10];
var span12 = document.getElementsByClassName("close")[11];


// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
  modal1.style.display = "none";
  $('html').css('overflow-y','visible')
}

span2.onclick = function() { 
  modal2.style.display = "none";
  $('html').css('overflow-y','visible')
}

span3.onclick = function() { 
  modal3.style.display = "none";
  $('html').css('overflow-y','visible')
}

span4.onclick = function() { 
  modal4.style.display = "none";
  $('html').css('overflow-y','visible')
}

span5.onclick = function() { 
  modal5.style.display = "none";
  $('html').css('overflow-y','visible')
}

span6.onclick = function() { 
  modal6.style.display = "none";
  $('html').css('overflow-y','visible')
}

span7.onclick = function() { 
  modal7.style.display = "none";
  $('html').css('overflow-y','visible')
}

span8.onclick = function() { 
  modal8.style.display = "none";
  $('html').css('overflow-y','visible')
}

span9.onclick = function() { 
  modal9.style.display = "none";
  $('html').css('overflow-y','visible')
}

span10.onclick = function() { 
  modal10.style.display = "none";
  $('html').css('overflow-y','visible')
}

span11.onclick = function() { 
  modal11.style.display = "none";
  $('html').css('overflow-y','visible')
}

span12.onclick = function() { 
  modal12.style.display = "none";
  $('html').css('overflow-y','visible')
}

$(document).ready( function() {
  $("#modall_1page").load("modal1.html");
});

$(document).ready( function() {
  $("#modal2_1page").load("modal1.html");
});

$(document).ready( function() {
  $("#modal3_1page").load("modal1.html");
});

$(document).ready( function() {
  $("#modal4_1page").load("modal1.html");
});

$(document).ready( function() {
  $("#modal5_1page").load("modal1.html");
});

$(document).ready( function() {
  $("#modal6_1page").load("modal1.html");
});

$(document).ready( function() {
  $("#modal7_1page").load("modal1.html");
});

$(document).ready( function() {
  $("#modal8_1page").load("modal1.html");
});

$(document).ready( function() {
  $("#modal9_1page").load("modal1.html");
});

$(document).ready( function() {
  $("#modal10_1page").load("modal1.html");
});

$(document).ready( function() {
  $("#modal11_1page").load("modal1.html");
});

$(document).ready( function() {
  $("#modal12_1page").load("modal1.html");
});

