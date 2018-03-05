$(function() {
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
    //   var devouredBurger = $(this).data("true");
    //   var devouredBurger = $(this).data("data-devourIt");
  
      var newDevouredState = {
        devoured: devouredBurger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", devouredBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim()
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Added a burger to the list");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  