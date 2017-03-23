 var pointsArray = document.getElementsByClassName('point');

 var revealPoint = function (i) {
                     i.style.opacity = 1;
                     i.style.transform = "scaleX(1) translateY(0)";
                     i.style.msTransform = "scaleX(1) translateY(0)";
                     i.style.WebkitTransform = "scaleX(1) translateY(0)";   
                }; 
 
 var animatePoints = function(points) {
        forEach(points, revealPoint);
                     };

 window.onload = function() {
      if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
     
     var sellingPoints = document.getElementsByClassName('selling-points')[0];
     var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

     window.addEventListener("scroll", function(event) {
             if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);
             }
     });
 }