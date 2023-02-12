$(document).ready(function(){
$("#clues").click(function(){
$('.popupclue').fadeIn();	
});
$(".close").click(function(){
$('.popupclue').fadeOut();
});
$('.mycros').mousedown(function(){
$('.popupclue').fadeOut();
});
function testcase(){
if($("#case1").val()!="G"){
$("#case1").css("color","red");
}}
	testcase();
$("input").mouseleave(function(){
if($("#case1").val()!="G"){
$("#case1").css("color","red");
}
else if($("#case1").val()=="G"){
$("#case1").css("color","black");	
}
if($("#case2").val()!="R"){
$("#case2").css("color","red");
}
else if($("#case2").val()=="R"){
$("#case2").css("color","black");	
}
if($("#case3").val()!="N"){
$("#case3").css("color","red");
}
else if($("#case3").val()=="N"){
$("#case3").css("color","black");	
}
if($("#case4").val()!="D"){
$("#case4").css("color","red");
}
else if($("#case4").val()=="D"){
$("#case4").css("color","black");	
}
if($("#case5").val()!="I"){
$("#case5").css("color","red");
}
else if($("#case5").val()=="I"){
$("#case5").css("color","black");	
}
if($("#case6").val()!="E"){
$("#case6").css("color","red");
}
else if($("#case6").val()=="E"){
$("#case6").css("color","black");	
}
if($("#case7").val()!="L"){
$("#case7").css("color","red");
}
else if($("#case7").val()=="L"){
$("#case7").css("color","black");	
}
if($("#case8").val()!="L"){
$("#case8").css("color","red");
}
else if($("#case8").val()=="L"){
$("#case8").css("color","black");	
}
if($("#case9").val()!="O"){
$("#case9").css("color","red");
}
else if($("#case9").val()=="O"){
$("#case9").css("color","black");	
}
if($("#case10").val()!="F"){
$("#case10").css("color","red");
}
else if($("#case10").val()=="F"){
$("#case10").css("color","black");	
}
if($("#case11").val()!="I"){
$("#case11").css("color","red");
}
else if($("#case11").val()=="I"){
$("#case11").css("color","black");	
}
if($("#case12").val()!="M"){
$("#case12").css("color","red");
}
else if($("#case12").val()=="M"){
$("#case12").css("color","black");	
}
if($("#case13").val()!="A"){
$("#case13").css("color","red");
}
else if($("#case13").val()=="A"){
$("#case13").css("color","black");	
}
if($("#case14").val()!="R"){
$("#case14").css("color","red");
}
else if($("#case14").val()=="R"){
$("#case14").css("color","black");	
}
if($("#case15").val()!="P"){
$("#case15").css("color","red");
}
else if($("#case15").val()=="P"){
$("#case15").css("color","black");	
}
if($("#case16").val()!="A"){
$("#case16").css("color","red");
}
else if($("#case16").val()=="A"){
$("#case16").css("color","black");	
}
if($("#case17").val()!="I"){
$("#case17").css("color","red");
}
else if($("#case17").val()=="I"){
$("#case17").css("color","black");	
}
if($("#case18").val()!="L"){
$("#case18").css("color","red");
}
else if($("#case18").val()=="L"){
$("#case18").css("color","black");	
}
if($("#case19").val()!="P"){
$("#case19").css("color","red");
}
else if($("#case19").val()=="P"){
$("#case19").css("color","black");	
}
if($("#case20").val()!="S"){
$("#case20").css("color","red");
}
else if($("#case20").val()=="S"){
$("#case20").css("color","black");	
}
if($("#case21").val()!="N"){
$("#case21").css("color","red");
}
else if($("#case21").val()=="N"){
$("#case21").css("color","black");	
}
if($("#case22").val()!="K"){
$("#case22").css("color","red");
}
else if($("#case22").val()=="K"){
$("#case22").css("color","black");	
}
if($("#case23").val()!="A"){
$("#case23").css("color","red");
}
else if($("#case23").val()=="A"){
$("#case23").css("color","black");	
}
if($("#case24").val()!="T"){
$("#case24").css("color","red");
}
else if($("#case24").val()=="T"){
$("#case24").css("color","black");	
}
if($("#case25").val()!="E"){
$("#case25").css("color","red");
}
else if($("#case25").val()=="E"){
$("#case25").css("color","black");	
}
if($("#case26").val()!="M"){
$("#case26").css("color","red");
}
else if($("#case26").val()=="M"){
$("#case26").css("color","black");	
}
if($("#case27").val()!="L"){
$("#case27").css("color","red");
}
else if($("#case27").val()=="L"){
$("#case27").css("color","black");	
}
if($("#case28").val()!="S"){
$("#case28").css("color","red");
}
else if($("#case28").val()=="S"){
$("#case28").css("color","black");	
}
});
$("#Resolve").click(function(){
$("#case1").val("G");
$("#case2").val("R");
$("#case3").val("N");
$("#case4").val("D");
$("#case5").val("I");
$("#case6").val("E");
$("#case7").val("L");
$("#case8").val("L");
$("#case9").val("O");
$("#case10").val("F");
$("#case11").val("I");
$("#case12").val("M");
$("#case13").val("A");
$("#case14").val("R");
$("#case15").val("P");
$("#case16").val("A");
$("#case17").val("I");
$("#case18").val("L");
$("#case19").val("P");
$("#case20").val("S");
$("#case21").val("N");
$("#case22").val("K");
$("#case23").val("A");
$("#case24").val("T");
$("#case25").val("E");
$("#case26").val("M");
$("#case27").val("L");
$("#case28").val("S");
$("input").css("color","black");
});
$("#solution").click(function(){
if(($("#case1").val()=="G")&&($("#case2").val()=="R")&&($("#case3").val()=="N")&&($("#case4").val()=="D")&&($("#case5").val()=="I")&&($("#case6").val()=="E")&&($("#case7").val()=="L")&&($("#case8").val()=="L")&&($("#case9").val()=="O")&&($("#case10").val()=="F")&&($("#case11").val()=="I")&&($("#case12").val()=="M")&&($("#case13").val()=="A")&&($("#case14").val()=="R")&&($("#case15").val()=="P")&&($("#case16").val()=="A")&&($("#case17").val()=="I")&&($("#case18").val()=="L")&&($("#case19").val()=="P")&&($("#case20").val()=="S")&&($("#case21").val()=="N")&&($("#case22").val()=="K")&&($("#case23").val()=="A")&&($("#case23").val()=="A")&&($("#case24").val()=="T")&&($("#case25").val()=="E")&&($("#case26").val()=="M")&&($("#case27").val()=="L")&&($("#case28").val()=="S")){
  $(".bravo").css("visibility","visible"); 
    $(".bravo").attr("id","bravo");
   }
});})
