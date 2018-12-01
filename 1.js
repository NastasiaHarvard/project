var MySlider = document.querySelectorAll('#slides .slide');
var currentPicture = 0;
var IntervalForChange = setInterval(nextSlide,2900);
 
function nextSlide(){
 MySlider[currentPicture].className = 'slide';
 currentPicture = (currentPicture+1)%MySlider.length;
 MySlider[currentPicture].className = 'slide showing';
