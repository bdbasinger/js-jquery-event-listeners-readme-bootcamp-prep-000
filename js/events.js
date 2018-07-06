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



$(document).ready(function(){
  // Call Functions Here
  getIt()
  frameIt()

});
