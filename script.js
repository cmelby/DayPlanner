


//----define moment varibles used to show time----//
var date = moment().format("MMM Do YY");
moment().format('LT');


//-------append date----------//
$("#currentDay").append(date);
console.log(date);


//--onclick event to save user input to local storage---//
$(".rowBtn").on("click", function() {
    var hour = $(this)
    .parent()
    .attr("id")

    var textContent = $(this)
    .siblings("input")
    .val();
localStorage.setItem(hour, textContent);
console.log(hour, textContent);
});

//-------Getting individual childern and setting to parent-----//
$("#9am")
.children("input")
  .val(localStorage.getItem("9am"));

  $(".rowBtn").on("click", function() {
    var hour = $(this)
      .parent()
      .attr("id");
    var textContent = $(this)
      .siblings("input")
      .val();
    localStorage.setItem(hour, textContent);
   
  });

  $("#10am")
  .children("input")
    .val(localStorage.getItem("10am"));
  
    $(".rowBtn").on("click", function() {
      var hour = $(this)
        .parent()
        .attr("id");
      var textContent = $(this)
        .siblings("input")
        .val();
      localStorage.setItem(hour, textContent);
      
    });

    $("#11am")
.children("input")
  .val(localStorage.getItem("11am"));

  $(".rowBtn").on("click", function() {
    var hour = $(this)
      .parent()
      .attr("id");
    var textContent = $(this)
      .siblings("input")
      .val();
    localStorage.setItem(hour, textContent);
    
  });

  $("#12pm")
.children("input")
  .val(localStorage.getItem("12pm"));

  $(".rowBtn").on("click", function() {
    var hour = $(this)
      .parent()
      .attr("id");
    var textContent = $(this)
      .siblings("input")
      .val();
    localStorage.setItem(hour, textContent);
    
  });

  $("#1pm")
.children("input")
  .val(localStorage.getItem("1pm"));

  $(".rowBtn").on("click", function() {
    var hour = $(this)
      .parent()
      .attr("id");
    var textContent = $(this)
      .siblings("input")
      .val();
    localStorage.setItem(hour, textContent);

  });

  $("#2pm")
.children("input")
  .val(localStorage.getItem("2pm"));

  $(".rowBtn").on("click", function() {
    var hour = $(this)
      .parent()
      .attr("id");
    var textContent = $(this)
      .siblings("input")
      .val();
    localStorage.setItem(hour, textContent);
   
  });

  $("#3pm")
.children("input")
  .val(localStorage.getItem("3pm"));

  $(".rowBtn").on("click", function() {
    var hour = $(this)
      .parent()
      .attr("id");
    var textContent = $(this)
      .siblings("input")
      .val();
    localStorage.setItem(hour, textContent);
    
  });

  $("#4pm")
.children("input")
  .val(localStorage.getItem("4pm"));

  $(".rowBtn").on("click", function() {
    var hour = $(this)
      .parent()
      .attr("id");
    var textContent = $(this)
      .siblings("input")
      .val();
    localStorage.setItem(hour, textContent);

  });

  $("#5pm")
.children("input")
  .val(localStorage.getItem("5pm"));

  $(".rowBtn").on("click", function() {
    var hour = $(this)
      .parent()
      .attr("id");
    var textContent = $(this)
      .siblings("input")
      .val();
    localStorage.setItem(hour, textContent);
   
  });


  // Next Steps :
//
// write a function to update the HTML input tag background depending on the time of day.
//
// store user input locally and be able to have that saved when the page is refreshed.