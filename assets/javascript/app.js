$(document).ready(function() {
    // global variables
    var apiUrl = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=";
    var keyWord;
    var queryUrl;
    var embedCode;
    var initialGifs = ["The Matrix", "Guardians of the Galaxy","The Dark Knight"]

    $(".gif").on("click", function() {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        animate();
        
        keyWord = "fail";
        queryUrl= apiUrl+cueWord;
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








        
        function animate(){
            var state = $(this).attr("data-state");
            if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
            } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
            }
        }

});


  