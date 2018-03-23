$(document).ready(function() {
    // global variables
    var apiUrl = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=";
    var keyWord;
    var queryUrl;
    var embedCode;
    var gifsArray = ["The Matrix", "Guardians of the Galaxy","The Dark Knight"]

    renderButtons();

    $(".gif_btn").on("click", function() {
        // animate();
        keyWord=($(this).attr("data-name"))
        
        queryUrl= apiUrl+keyWord;
        console.log(queryUrl);

        $.ajax({
            url: queryUrl,
            method: "GET",
        }).then(function(response) {
            embedCode = "<embed src="+JSON.stringify(response.data.embed_url)+">"
            console.log(JSON.stringify(response.data.embed_url));
            console.log(response)
            $(".gif").html(embedCode)
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
    })
