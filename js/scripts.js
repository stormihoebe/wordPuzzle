$(function(){
  $(".wordTaker").submit(function(){
    event.preventDefault();

    var string = $("#sentence").val();
    var newString = "";

    for(i = 0; i <= string.length; i++){
      var letter = string.charAt(i);
      if(letter === "a"){
        newString += "-";
      } else if(letter === "e"){
        newString += "-";
      } else if(letter === "i"){
        newString += "-";
      } else if(letter === "o"){
        newString += "-";
      } else if(letter === "i"){
        newString += "-";
      } else if(letter === "y"){
        newString += "-";
      } else {
        newString += letter;
      }
    };
    $(".output").append("new string: "+ newString);
  });
});
