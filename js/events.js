//define functions here

$(document).ready(function(){

// call functions here
function getIt() {
  // bind click to p tag, on click, alert('Hey!');
  $('p').on("click", function(){
    alert('Hey!');
  });
}

function frameIt() {
  // bind load event that adds class 'tasty' to image.
  $('img').on("load", function(){
    $('img').addClass('tasty');
  });
}

function pressIt() {
  // bind keydown to input field, alert when press G key.
  $('input').on('keydown', function(key){
  if(key.which == 83){
      alert('s was pressed');
  }
});
  })
}

function submitIt() {
  // bind submit to form alerts "Your form is going to be submitted now."
}

});
