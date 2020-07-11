    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
$(document).ready(function () {

   
    $("#keyboard-upper-container").hide();
    var totalhtml;
    var startTime;
    var endTime;
    var t = 0;
var i;
var key;
var numMistakes = 0;
var n = 0;
var m = 0;
var space = 0;
 $("#yellow-block").remove();

    var feedback = "";
    
$("#sentence").html('<mark>'+(sentences[m]).substr(n,n+1)+'</mark>'+(sentences[m]).substr(n+1));  
   
 $("#target-letter").html((sentences[m][n]));
totalhtml = $("body").html();

          var sent = "";       
              

          $(this).on('keypress',function(e) {
              if(n === 0 && m === 0){
              
                    startTime =  new Date();
              }
        key = e.which;
           
       $( ".well.well-lg.key" ).each(function( ) {
  if($( this).attr("id") == e.which){
      i = $( this).attr("id");
      $("#"+i).css("background-color", "yellow");
  }
});

   
                  
                     
                      if($("#"+key).text()=== sentences[m][n]){
                          feedback += "<icon class='glyphicon glyphicon-ok bg-success'></icon>";
                          $("#feedback").html(feedback);
                           n++;
                      
                          
                           
                      }
                
                    else if(" " === sentences[m][n]){
                          feedback += "<icon class='glyphicon glyphicon-ok bg-success'></icon>";
                          $("#feedback").html(feedback);
                        space++;
                      n++;
                         
                          
                      }
                       else{
                           feedback +="<icon class='glyphicon glyphicon-remove bg-danger'></icon>"
                           $("#feedback").html(feedback);
                           n++;
                           numMistakes++;
                            
                           
                       }   
                   
                        
                        if(n === sentences[m].length){
                            n = 0;
                            px = 0;
                            m++;
                            if(m < 5){
                            feedback="";
                            $("#feedback").html(feedback);
                            $("#sentence").html(sentences[m]); 
                            }
                            else{
                        endTime = new Date();
                        var elapseTime = endTime - startTime;
                        space = space + 5;
                        elapseTime /= 1000;
                       var mins = (elapseTime/60).toFixed(2);
                        var results = (((space / mins) - (2 * numMistakes)).toFixed(2))
                        var msg = "Your score for this round was: " + results + " (words/min)";
                                $( "#sentence" ).html(msg);
                                feedback="";
                            $("#feedback").html(feedback);
                                 $("#target-letter").html('<button class="bg bg-success">Play Again?<button>');
                            $("button").on("click", function(e) {
                                 location.reload(true);
                            });
       
                            }
  
                        }
               $("#target-letter").html(sentences[m][n]);
                sent = (sentences[m]).substr(0,n)+'<mark>'+sentences[m][n]+'</mark>'+(sentences[m]).substr(n+1);
             
              $("#sentence").html(sent);   
       
});
 
     
    
    $(this).on('keydown',function(e) {
       
       
    if (e.which === 16 ) {
        $("#keyboard-upper-container").show();
         $("#keyboard-lower-container").hide();
    }
       
});
    $(this).on('keyup',function(e) {
  
      if(192 == e.which) {
            
              $("#126").css("background-color", "#f5f5f5");
             $("#96").css("background-color", "#f5f5f5");
             
         } 
             if(189 === e.which) {
              $("#45").css("background-color", "#f5f5f5");
             $("#95").css("background-color", "#f5f5f5");
             
         } 
         if(187 === e.which) {
              $("#43").css("background-color", "#f5f5f5");
             $("#61").css("background-color", "#f5f5f5");
             
         } 
         if(220 === e.which) {
              $("#92").css("background-color", "#f5f5f5");
             $("#124").css("background-color", "#f5f5f5");
             
         } 
             if(221 === e.which) {
              $("#93").css("background-color", "#f5f5f5");
             $("#125").css("background-color", "#f5f5f5");
             
         } 
         if(219 === e.which) {
              $("#123").css("background-color", "#f5f5f5");
             $("#91").css("background-color", "#f5f5f5");
             
         }
              if(222 === e.which) {
              $("#39").css("background-color", "#f5f5f5");
             $("#34").css("background-color", "#f5f5f5");
             
         }
               if(186 === e.which) {
              $("#59").css("background-color", "#f5f5f5");
             $("#58").css("background-color", "#f5f5f5");
             
         } 
         if(191 === e.which) {
              $("#47").css("background-color", "#f5f5f5");
             $("#63").css("background-color", "#f5f5f5");
             
         }
              if(190 === e.which) {
              $("#46").css("background-color", "#f5f5f5");
             $("#62").css("background-color", "#f5f5f5");
             
         }
              if(188 === e.which) {
              $("#44").css("background-color", "#f5f5f5");
             $("#60").css("background-color", "#f5f5f5");
             
         }
     if(e.which === 16){
             $("#keyboard-upper-container").hide();
             $("#keyboard-lower-container").show();
     }
    else{
       
        var index1 = -1;
        var index2 = -1;
       
        if(($("#"+e.which).css( "background-color" )) == "rgb(255, 255, 0)" ||($("#"+e.which).css( "background-color" )) == "rgb(245, 245, 245)"){
       $.each(($('#keyboard-upper-container').find("span")), function(x, valz) {
          
           if(($(this).attr("id")) == e.which){
               index1 = x;
      
           }
  
});
     $.each(($('#keyboard-lower-container').find("span")), function(x, valz) {
          
           if(($(this).attr("id")) == e.which){
               index2 = x;
           ;
           }
  
});
    
        if(index1 !== -1) {
            
        ($('#keyboard-lower-container span').eq(index1)).css("background-color", "#f5f5f5");
           
            index1 = -1;
        }
         if(index2 !== -1) {
              ($('#keyboard-upper-container span').eq(index2)).css("background-color", "#f5f5f5");
             
            index2 = -1;
         } 
           
         
       
       
        $("#"+e.which).css("background-color", "#f5f5f5");
        
        }
       
    }
        
        
});
    

 
});