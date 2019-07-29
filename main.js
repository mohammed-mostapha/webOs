
var myIndex2019 = 0;
carousel2019();

function carousel2019() {
  var i2019;
  var x2019 = document.getElementsByClassName("p-2019");
  for (i = 0; i < x2019.length; i++) {
    x2019[i].style.display = "none";  
  }
  myIndex2019++;
  if (myIndex2019 > x2019.length) {myIndex2019 = 1}    
  x2019[myIndex2019-1].style.display = "block";  
  setTimeout(carousel2019, 2000); // Change image every 2 seconds
}



var myIndex2018 = 0;
carousel2018();

function carousel2018() {
  var i2018;
  var x2018 = document.getElementsByClassName("p-2018");
  for (i = 0; i < x2018.length; i++) {
    x2018[i].style.display = "none";  
  }
  myIndex2018++;
  if (myIndex2018 > x2018.length) {myIndex2018 = 1}    
  x2018[myIndex2018-1].style.display = "block";  
  setTimeout(carousel2018, 2000); // Change image every 2 seconds
}




$('.item-1').click(function() {
  $('.preview-2019').css('display', 'block');
  $('.preview-2018').css('display', 'none');
});




$('.item-5').click(function() {
  $('.preview-2019').css('display', 'none');
  $('.preview-2018').css('display', 'block');
});





$('#basicSlider').multislider({
    hoverPause: false,
    duration: 0
});

$('#basicSlider').multislider('pause');

$('#basicSlider').mouseover(function() {
  $('#basicSlider').multislider({
    continuous: true,
    duration: 2000
  });
});


$('#basicSlider').mouseleave(function() {
  $('#basicSlider').multislider('pause');
});

$('#basicSlider').mouseover(function() {
  $('#basicSlider').multislider('unPause');
});



