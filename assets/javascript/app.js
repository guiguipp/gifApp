$(document).ready(function() {
    // global variables
    var apiUrl = "https://api.giphy.com/v1/gifs/search?q="
    var apiKey = "&api_key=dc6zaTOxFJmzC"
    var apiLimitVerb = "&limit="
    var apiLimitNum = 10;
    var keyWord;
    var queryUrl;
    var embedCode;
    var gifsArray = ["Cat", "Dog","Hamster"]
    renderButtons();

    $(document).on("click", ".gif_btn", function (){
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
                    var gifGenerated = $("<img>");
                    gifGenerated.attr("src", results[i].images.fixed_height_still.url);
                    // store the two attributes (still and animate) in the object itself, to retrieve them later
                    gifGenerated.attr("data-still", results[i].images.fixed_height_still.url);
                    gifGenerated.attr("data-animate", results[i].images.fixed_height.url);
                    gifGenerated.attr("data-state","still");
                    gifDiv.append(p);
                    gifDiv.append(gifGenerated);
                    $("#gif-view").append(gifDiv);
                }
            }
            return results;
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



// creates new button with user input
$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var nameNewGif = $("#gif-input").val().trim();
    gifsArray.push(nameNewGif);
    renderButtons();
    });
    

// event listener for click on gif
$(document).on("click", "img", function (){
    console.log("Click recorded")
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
    });
});
