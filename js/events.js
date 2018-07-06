// Define Functions Here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt() {
  $('tasty').on('load', function(){
    $('img').append('tasty')
  })
}

$(document).ready(function(){
  // Call Functions Here
  getIt()

});
