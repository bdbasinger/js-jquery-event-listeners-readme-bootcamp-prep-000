// Define Functions Here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt() {
  $('.tasty').on('load', function(){
    $('img').append('.tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(key){
    if (key.which === )
  })
}



$(document).ready(function(){
  // Call Functions Here
  getIt()
  frameIt()

});
