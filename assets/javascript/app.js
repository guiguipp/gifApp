$(document).ready(function() {
    // global variables
    var apiUrl = "https://api.giphy.com/v1/gifs/search?q="
    var apiKey = "&api_key=dc6zaTOxFJmzC"
    var apiLimitVerb = "&limit="
    var apiLimitNum = 5;
    var keyWord;
    var queryUrl;
    var embedCode;
    var gifsArray = ["Cat", "Dog","Hamster"]

    renderButtons();

    $(".gif_btn").on("click", function() {
        // animate();
        keyWord=($(this).attr("data-name"))
        
        queryUrl= apiUrl+keyWord+apiKey+apiLimitVerb+apiLimitNum;
        console.log("queryUrl: " + queryUrl);

        $.ajax({
            url: queryUrl,
            method: "GET",
        }).then(function(response) {
            console.log("response: " + response)
            var results = response.data;
            for (let i = 0; i < results.length; i++) {
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    var gifDiv = $("<div class='item'>");
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var personImage = $("<img>");
                    personImage.attr("src", results[i].images.fixed_height.url);
                    gifDiv.append(p);
                    gifDiv.append(personImage);
                    $("#gif-view").append(gifDiv);
                }
            }
        });
    });

    
    function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < gifsArray.length; i++) {
          var a = $("<button>");
          a.addClass("gif_btn");
          a.attr("data-name", gifsArray[i]);
          a.text(gifsArray[i]);
          $("#buttons-view").append(a);
        }
    }

      

    

    //   $("#add-gif").on("click", function(event) {
    //     event.preventDefault();
    //     var newGif = $("#gif-input").val().trim();
    //     gifsArray.push(newGif);
    //     renderButtons();
    //   });

    





        // function displayGifInfo() {
  
        //   var gif = $(this).attr("data-name");
          
  
    //     function animate(){
    //         var state = $(this).attr("data-state");
    //         if (state === "still") {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         $(this).attr("data-state", "animate");
    //         } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-state", "still");
    //         }
    //     };
    });
