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
    if (key.which === 71){
      alert('g was pressed')
    }
  })
}

function submitIt() {
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now')
  })
}



$(document).ready(function(){
  // Call Functions Here
  getIt()
  frameIt()
  pressIt()
  submitIt()
  

});
