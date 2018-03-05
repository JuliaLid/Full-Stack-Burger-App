$(function() {
  //PUT Ajax to move burge to an "Ate It" section
    $(".devour-burger").on("click", function(event) {
      console.log("I'm clicked");
      var id = $(this).data("id");
      console.log(id);
      var devouredBurger = $(this).data("devour");
  
      var newDevouredState = {
        devoured: true
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", devouredBurger);
          location.reload();
        }
      );
    });

    //POST ajax to add a new burger to the database
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
     var newBurger = {
        name: $("#burger").val().trim()
      };
      console.log(newBurger);
      $("#burger").val("");
   
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
  