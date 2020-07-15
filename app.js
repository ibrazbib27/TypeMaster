   
$(document).ready(function () {
$("#yellow-block").remove();
$("#keyboard-upper-container").hide();
let startTime, endTime, i, key, numMistakes = 0, n = 0, m = 0, space = 0, feedback = "", sent = "";
let over = false;
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    
$("#sentence").html('<mark>'+(sentences[m]).substr(n,n+1)+'</mark>'+(sentences[m]).substr(n+1));  
$("#target-letter").html((sentences[m][n]));

                 
              
$(this).on('keypress',function(e) {
              
    if(n === 0 && m === 0)
        startTime =  new Date();
    key = e.which;
           
    $( ".well.well-lg.key" ).each(function( ) {
        if($( this).attr("id") == e.which){
            i = $( this).attr("id");
        $("#"+i).css("background-color", "rgb(255, 255, 0)");
  }
});
     if(over === false ){
        switch (sentences[m][n]){
            case $(`#${e.which}`).text():
                feedback += "<icon class='glyphicon glyphicon-ok bg-success'></icon>";
                $("#feedback").html(feedback);
                e.which
                n++;
                break;
             case " ":
                if($(`#${key}`).text() === "Space")
                    feedback += "<icon class='glyphicon glyphicon-ok bg-success'></icon>";
                else
                    feedback +="<icon class='glyphicon glyphicon-remove bg-danger'></icon>";
                        
                $("#feedback").html(feedback);
                space++;
                n++;
                break;
             default:
                feedback +="<icon class='glyphicon glyphicon-remove bg-danger'></icon>";
                $("#feedback").html(feedback);
                n++;
                numMistakes++;
                break;      
        }
     }
    
         if(n === sentences[m].length){
                            n = 0;
                            px = 0;
                            m++;
                        if(m === 5){
                            over = true;
                            //m truns to 4 in order to not get any undefined errors for sentances array
                            m = 4;
                        }
                            
                        
                        if(over === false){
                            
                            feedback="";
                            $("#feedback").html(feedback);
                            $("#sentence").html(sentences[m]); 
                        }
                        else{
                            n = n-1;
                            endTime = new Date();
                            let elapseTime = endTime - startTime;
                            space = space + 5;
                            elapseTime /= 1000;
                            let mins = (elapseTime/60).toFixed(2);
                            let results = (((space / mins) - (2 * numMistakes)).toFixed(2))
                            let msg = "Your score for this round was: " + results + " (words/min)";
                            $( "#sentence" ).html(msg);
                            feedback="";
                            $("#feedback").html(feedback);
                            $("#target-letter").html('<button class="bg bg-success">Play Again?<button>');
                            $("button").on("click", function(e) {
                                 location.reload(true);
                            });
       
                            }
  
                     }

    
              //moving the yellow block and changing target character
    if(over === false ){
        $("#target-letter").html(sentences[m][n]);
        sent = (sentences[m]).substr(0,n)+'<mark>'+sentences[m][n]+'</mark>'+(sentences[m]).substr(n+1);
        $("#sentence").html(sent);
    }

       
});
 
     
    //'keydown' event here deals with toggling the lower-case keyboard and showing the upper-case keyboard when shift key is held
    $(this).on('keydown',function(e) {
       
       
    if (e.which === 16 ) {
        $("#keyboard-upper-container").show();
         $("#keyboard-lower-container").hide();
    }
       
});
    
//the keyboard highlighting logic and execution is all done in the 'keyup' event as well as well as the upper-case toggling
    $(this).on('keyup',function(e) {
   /*
   functionatily with keycodes of 32 and 16 (shift and space) are manually dealt with and defaults statement deals with unhighlighting alpha-numeric keys (upper case, special keys, alphabetic keys, and numeric keys).
   */   
switch (e.which){
    case 16:
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();
    case 32:
        $("#32").css("background-color", "#f5f5f5");
    default:
       $.each(($('#keyboard-upper-container').find("span")), function(x) {
           if((($('#keyboard-upper-container span').eq(x)).css( "background-color" )) === "rgb(255, 255, 0)")
                undoUpperCaseHighlight(x);
       });
       $.each(($('#keyboard-lower-container').find("span")), function(x) { 
          if((($('#keyboard-lower-container span').eq(x)).css( "background-color" )) === "rgb(255, 255, 0)")
                undoLowerCaseHighlight(x); 
        });
    
        function undoUpperCaseHighlight(index){
            ($('#keyboard-upper-container span').eq(index)).css("background-color", "#f5f5f5");
        }
        
        function undoLowerCaseHighlight(index){
             ($('#keyboard-lower-container span').eq(index)).css("background-color", "#f5f5f5");
         }
           
        
        
       
    
    }
        
});
    

 
});
