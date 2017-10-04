var player1Turn = true;
var player2Turn = false;
var array = [0,1,2,3,4,5,6,7,8];
var drawCounter = 0;
var victor = false;

function switchTurn(){
  player1Turn=!player1Turn;
  player2Turn=!player2Turn;
}
function reset(){
  player1Turn = true;
  player2Turn = false;
  array = [0,1,2,3,4,5,6,7,8];
  console.log(array)
  $("img").hide();
  $("td").hasClass("unbind");
  $("#1,#2,#3,#4,#5,#6,#7,#8,#9").removeClass("highlight");
}

$(function() {

  $("#rickName").removeClass("grayout")
  $("#mortyName").addClass("grayout")
  $("#reset").click(function() {
    reset();
  });

  $("td").click(function() {
    $(this).unbind("click");
    if (player1Turn===true) {
      array[parseInt(this.id)-1]="Rick"
      $(this).children(".rick").show("fast","linear");
      $("#rickName").addClass("grayout")
      $("#mortyName").removeClass("grayout")
      switchTurn();
    }
    else if (player2Turn===true){
      array[parseInt(this.id)-1]="Morty"
      $(this).children(".morty").show("fast","linear");
      $("#mortyName").addClass("grayout")
      $("#rickName").removeClass("grayout")
      switchTurn();
      }
      if(array[0]===array[1]&&array[1]===array[2]){
        $("td").unbind("click");
        $("#1, #2, #3").addClass("highlight");
        if(array[0]==="Morty"){
          $("#mortyWin").show();
        }else if(array[0]==="Rick"){
          $("#rickWin").show();
        }
        victor=true;
        alert(array[0] + " wins!");
      }if(array[3]===array[4]&&array[4]===array[5]){
        $("td").unbind("click");
        $("#4, #5, #6").addClass("highlight");
        if(array[3]==="Morty"){
          $("#mortyWin").show();
        }else if(array[3]==="Rick"){
          $("#rickWin").show();
        }
        victor=true;
        alert(array[3] + " wins!");
      }if(array[6]===array[7]&&array[7]===array[8]){
        $("td").unbind("click");
        $("#7, #8, #9").addClass("highlight");
        if(array[6]==="Morty"){
          $("#mortyWin").show();
        }else if(array[6]==="Rick"){
          $("#rickWin").show();
        }
        victor=true;
        alert(array[6] + " wins!");
      }if(array[0]===array[3]&&array[3]===array[6]){
        $("td").unbind("click");
        $("#1, #4, #7").addClass("highlight");
        if(array[0]==="Morty"){
          $("#mortyWin").show();
        }else if(array[0]==="Rick"){
          $("#rickWin").show();
        }
        victor=true;
        alert(array[0] + " wins!");
      }if(array[1]===array[4]&&array[4]===array[7]){
        $("td").unbind("click");
        $("#2, #5, #8").addClass("highlight");
        if(array[1]==="Morty"){
          $("#mortyWin").show();
        }else if(array[1]==="Rick"){
          $("#rickWin").show();
        }
        victor=true;
        alert(array[1] + " wins!");
      }if(array[2]===array[5]&&array[5]===array[8]){
        $("td").unbind("click");
        $("#3, #6, #9").addClass("highlight");
        if(array[2]==="Morty"){
          $("#mortyWin").show();
        }else if(array[2]==="Rick"){
          $("#rickWin").show();
        }
        victor=true;
        alert(array[2] + " wins!");
      }if(array[0]===array[4]&&array[4]===array[8]){
        $("td").unbind("click");
        $("#1, #5, #9").addClass("highlight");
        if(array[0]==="Morty"){
          $("#mortyWin").show();
        }else if(array[0]==="Rick"){
          $("#rickWin").show();
        }
        victor=true;
        alert(array[0] + " wins!");
      }if(array[2]===array[4]&&array[4]===array[6]){
        $("td").unbind("click");
        $("#3, #5, #7").addClass("highlight");
        if(array[2]==="Morty"){
          $("#mortyWin").show();
        }else if(array[2]==="Rick"){
          $("#rickWin").show();
        }
        victor=true;
        alert(array[2] + " wins!");
      }for(var i=0;i<array.length;i++){
        if(typeof(array[i])==="number"){
          drawCounter+=1
        }
      }
      if(drawCounter===0 && victor===false){
        $("#rickName").addClass("grayout")
        $("#mortyName").addClass("grayout")
        alert("Draw Game")
      }
      drawCounter=0
    });
});
