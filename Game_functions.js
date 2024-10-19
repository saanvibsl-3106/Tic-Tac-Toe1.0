var a=1;
var b=0;
var S1=0;
var S2=0;
var B1=0;
var B2=0;
var B3=0; 
var B4=0;
var B5=0;
var B6=0;
var B7=0;
var B8=0;
var B9=0;
var Tie=0;
$(document).ready(function()
{
   $("#start").click(function(){
 
   var strA=prompt("Enter Name of Player-1:");
   var strB=prompt("Enter Name of Player-2:");
   $("#PN1").html(strA);
   $("#PN2").html(strB);
   $("#start").fadeOut(1000);
   $("#mainbx").fadeIn(1000);
   $("#Reselt").fadeOut(100);
   $("#Reset").fadeOut(100);
   });
//======================================================
   
   $("#box1").click(function(){
     if (B1==0)
     { 
      Box1();
      Tie++;
     }
   });
   //============================================================
   $("#box2").click(function(){
    if(B2==0)
    {
      Box2();
      Tie++;
    }
  });
//==================================================================================================================
$("#box3").click(function(){
   if(B3==0)
   {
     Box3();
     Tie++;
   }
 });
 //============================================================
 $("#box4").click(function(){
  if (B4==0)
  {
   Box4();
   Tie++;
  }
});
//============================================================================================================
$("#box5").click(function()
{
   if(B5==0)
   {
      Box5();
      Tie++;
   }
 });
 //============================================================
 $("#box6").click(function(){
  if(B6==0)
  {
   Box6();
   Tie++;
  }
});
//============================================================
$("#box7").click(function(){
   if(B7==0)
   {
      Box7();
      Tie++;
   }
 });
 //============================================================
 $("#box8").click(function(){
   if (B8==0)
   {
      Box8();
      Tie++;
   }
 });
//============================================================
$("#box9").click(function(){
   if (B9==0)
   {
      Box9();
      Tie++;
   }
});
//===================================================================================================
$("#PlayAgain").click(function(){
   B1=0;
   B2=0;
   B3=0;
   B4=0;
   B5=0;
   B6=0;
   B7=0;
   B8=0;
   B9=0;
   Tie=0;
   $("#winp1").html("");
   $("#winp2").html("");
   $("#turn1").html("Your Turn");
   a=1;
   $("#box1").html("");
   $("#box2").html("");
   $("#box3").html("");
   $("#box4").html("");
   $("#box5").html("");
   $("#box6").html("");
   $("#box7").html("");
   $("#box8").html("");
   $("#box9").html("");
   $("#box1").css("background-color","");
$("#box2").css("background-color","");
$("#box3").css("background-color","");
$("#box4").css("background-color","");
$("#box5").css("background-color","");
$("#box6").css("background-color","");
$("#box7").css("background-color","");
$("#box8").css("background-color","");
$("#box9").css("background-color","");
$("#Reselt").fadeOut(1000);


});
//================================================================================================
$("#Reset").click(function(){
Tie=0;
   B1=0;
   B2=0;
   B3=0;
   B4=0;
   B5=0;
   B6=0;
   B7=0;
   B8=0;
   B9=0;
   $("#winp1").html("");
   $("#winp2").html("");
   $("#turn1").html("Your Turn");
   a=1;
   $("#box1").html("");
   $("#box2").html("");
   $("#box3").html("");
   $("#box4").html("");
   $("#box5").html("");
   $("#box6").html("");
   $("#box7").html("");
   $("#box8").html("");
   $("#box9").html("");
a=1;
$("#scorep1").html("0");
$("#scorep2").html("0");
$("#PlayAgain").fadeOut(100);
$("#box1").css("background-color","");
$("#box2").css("background-color","");
$("#box3").css("background-color","");
$("#box4").css("background-color","");
$("#box5").css("background-color","");
$("#box6").css("background-color","");
$("#box7").css("background-color","");
$("#box8").css("background-color","");
$("#box9").css("background-color","");
});
//==========================================================================
$("#Reselt").click(function(){
  var Value1 = $("#scorep1").html();
  var Value2 = $("#scorep2").html();
var Pl1 = $("#PN1").html();
var Pl2 = $("#PN2").html();

if(Value1>Value2)
{
   alert("Congratulations "+Pl1+" is Winner");
}
else if(Value2>Value1)
{
   alert("Congratulations "+Pl2+" is Winner");

}
else{
   alert("It's a Tie");
}
});
 });
//==============================================================
function doCheck()
{
  if($("#box1").html()=='X' && $("#box2").html()=='X' && $("#box3").html()=='X' )
  {
   b=1;
   $("#box1").css("background-color","red");
   $("#box2").css("background-color","red");
   $("#box3").css("background-color","red");

  }
  else if($("#box4").html()=='X' && $("#box5").html()=='X' && $("#box6").html()=='X' )
  {
   b=1;
   $("#box4").css("background-color","red");
   $("#box5").css("background-color","red");
   $("#box6").css("background-color","red");

  }
  else if($("#box7").html()=='X' && $("#box8").html()=='X' && $("#box9").html()=='X' )
  {
   b=1;
   $("#box7").css("background-color","red");
   $("#box8").css("background-color","red");
   $("#box9").css("background-color","red");
  }
  else if($("#box1").html()=='X' && $("#box4").html()=='X' && $("#box7").html()=='X' )
  {
   b=1;
   $("#box1").css("background-color","red");
   $("#box4").css("background-color","red");
   $("#box7").css("background-color","red");
  }
  else if($("#box2").html()=='X' && $("#box5").html()=='X' && $("#box8").html()=='X' )
  {
   b=1;
   $("#box2").css("background-color","red");
   $("#box5").css("background-color","red");
   $("#box8").css("background-color","red");
  }
  else if($("#box3").html()=='X' && $("#box6").html()=='X' && $("#box9").html()=='X' )
  {
   b=1;
   $("#box3").css("background-color","red");
   $("#box6").css("background-color","red");
   $("#box9").css("background-color","red");
  }
  else if($("#box1").html()=='X' && $("#box5").html()=='X' && $("#box9").html()=='X' )
  {
   b=1;
   $("#box1").css("background-color","red");
   $("#box5").css("background-color","red");
   $("#box9").css("background-color","red");
  }
  else if($("#box7").html()=='X' && $("#box5").html()=='X' && $("#box3").html()=='X' )
  {
   b=1;
   $("#box7").css("background-color","red");
   $("#box5").css("background-color","red");
   $("#box3").css("background-color","red");
  }
  else if($("#box1").html()=='O' && $("#box2").html()=='O'  && $("#box3").html()=='O'  )
  {
   b=2;
   $("#box1").css("background-color","red");
   $("#box2").css("background-color","red");
   $("#box3").css("background-color","red");

  }
  else if($("#box4").html()=='O'  && $("#box5").html()=='O'  && $("#box6").html()=='O'  )
  {
   b=2;
   $("#box4").css("background-color","red");
   $("#box5").css("background-color","red");
   $("#box6").css("background-color","red");
  }
  else if($("#box7").html()=='O'  && $("#box8").html()=='O'  && $("#box9").html()=='O'  )
  {
   b=2;
   $("#box7").css("background-color","red");
   $("#box8").css("background-color","red");
   $("#box9").css("background-color","red");
  }
  else if($("#box1").html()=='O'  && $("#box4").html()=='O'  && $("#box7").val()=='O'  )
  {
   b=2;
   $("#box1").css("background-color","red");
   $("#box4").css("background-color","red");
   $("#box7").css("background-color","red");
  }
  else if($("#box2").html()=='O'  && $("#box5").html()=='O'  && $("#box8").html()=='O'  )
  {
   b=2;
   $("#box2").css("background-color","red");
   $("#box5").css("background-color","red");
   $("#box8").css("background-color","red");
  }
  else if($("#box3").html()=='O'  && $("#box6").html()=='O'  && $("#box9").html()=='O'  )
  {
   b=2;
   $("#box3").css("background-color","red");
   $("#box6").css("background-color","red");
   $("#box9").css("background-color","red");
  }
  else if($("#box1").html()=='O'  && $("#box5").html()=='O'  && $("#box9").html()=='O'  )
  {
   b=2;
   $("#box1").css("background-color","red");
   $("#box5").css("background-color","red");
   $("#box9").css("background-color","red");
  }
  else if($("#box7").html()=='O'  && $("#box5").html()=='O'  && $("#box3").html()=='O'  )
  {
   b=2;
   $("#box7").css("background-color","red");
   $("#box5").css("background-color","red");
   $("#box3").css("background-color","red");
  }
  else{
   b=5;
  }
  if(b==5 && Tie==8)
  {
   $("#winp1").html("Its's a Tie").css("color","Red");
   $("#winp2").html("Its's a Tie").css("color","Red");
   $("#turn1").html("");
   $("#turn2").html("");
   Tie=-1;
   doUncheck();
  }
}
//===========================================================================================
function doUnbind(){
  B1=1;
  B2=1;
  B3=1;
  B4=1;
  B5=1;
  B6=1;
  B7=1;
  B8=1;
  B9=1;
   $("#PlayAgain").fadeIn(1000);
   $("#Reset").fadeIn(1000);
   $("#Reselt").fadeIn(1000);
}
//========================================================================
function Box1()
{
   B1=1;
   if(a==1)
     {
        $("#box1").html("X").css("color","orange");
        a=2;
        $("#turn1").html(" ");
        $("#turn2").html("Your Turn");
     }
     else
     {
        $("#box1").html("O").css("color","green");
        a=1;
        $("#turn2").html("");
        $("#turn1").html("Your Turn");    }
        doCheck();
    if(b==1)
    {
       $("#winp1").html("You Won").css("color","green");
       b=0;
       $("#scorep1").html(++S1);
       $("#turn2").html("");
      $("#turn1").html("");
      doUnbind();
       $("#winp2").html("You Loose").css("color","Red");
    }
    else if(b==2)
    {
       $("#winp2").html("You Won").css("color","green");
       b=0;
       $("#scorep2").html(++S2);
       $("#turn2").html("");
       doUnbind();
      $("#turn1").html("");
       $("#winp1").html("You Loose").css("color","Red");
    }
}
//=====================================================
function Box2()
{
   B2=1;
   if(a==1)
    {
       $("#box2").html("X").css("color","orange");
       a=2;
       $("#turn1").html("");
       $("#turn2").html("Your Turn");
    }
    else
    {
       $("#box2").html("O").css("color","green");
       a=1;
       $("#turn2").html("");
       $("#turn1").html("Your Turn");
    }
    doCheck();
   if(b==1)
   {
      $("#winp1").html("You Won").css("color","green");
      b=0;
      $("#scorep1").html(++S1);
      $("#turn2").html("");
      $("#turn1").html("");
      doUnbind();
      $("#winp2").html("You Loose").css("color","Red");
   }
   else if(b==2)
   {
      $("#winp2").html("You Won").css("color","green");
      b=0;
      $("#scorep2").html(++S2);
      $("#turn2").html("");
      doUnbind();
      $("#turn1").html("");
      $("#winp1").html("You Loose").css("color","Red");
   }
}
function Box3()
{
   B3=1;
   if(a==1)
   {
      $("#box3").html("X").css("color","orange");
      a=2;
      $("#turn1").html(" ");
      $("#turn2").html("Your Turn");
   }
   else
   {
      $("#box3").html("O").css("color","green");
      a=1;
      $("#turn2").html("");
      $("#turn1").html("Your Turn");
  }
  doCheck();
   if(b==1)
   {
      $("#winp1").html("You Won").css("color","green");
      b=0;
      $("#scorep1").html(++S1);
      $("#turn2").html("");
      $("#turn1").html("");
      doUnbind();
      $("#winp2").html("You Loose").css("color","Red");
   }
   else if(b==2)
   {
      $("#winp2").html("You Won").css("color","green");
      b=0;
      $("#scorep2").html(++S2);
      $("#turn2").html("");
      doUnbind();
      $("#turn1").html("");
      $("#winp1").html("You Loose").css("color","Red");
   }
}
function Box4()
{
   B4=1;
   if(a==1)
  {
     $("#box4").html("X").css("color","orange");
     a=2;
     $("#turn1").html("");
     $("#turn2").html("Your Turn");
  }
  else
  {
     $("#box4").html("O").css("color","green");
     a=1;
     $("#turn2").html("");
     $("#turn1").html("Your Turn");
  }
  doCheck();
   if(b==1)
   {
      $("#winp1").html("You Won").css("color","green");
      b=0;
      $("#scorep1").html(++S1);
      $("#turn2").html("");
      $("#turn1").html("");
      doUnbind();
      $("#winp2").html("You Loose").css("color","Red");
   }
   else if(b==2)
   {
      $("#winp2").html("You Won").css("color","green");
      b=0;
      $("#scorep2").html(++S2);
      $("#turn2").html("");
      $("#turn1").html("");
      doUnbind();
      $("#winp1").html("You Loose").css("color","Red");
   }
}
function Box5()
{
   B5=1;
   if(a==1)
   {
      $("#box5").html("X").css("color","orange");
      a=2;
      $("#turn1").html(" ");
      $("#turn2").html("Your Turn");
   }
   else
   {
      $("#box5").html("O").css("color","green");
      a=1;
      $("#turn2").html("");
      $("#turn1").html("Your Turn");
  }
  doCheck();
   if(b==1)
   {
      $("#winp1").html("You Won").css("color","green");
      b=0;
      $("#scorep1").html(++S1);
      $("#turn2").html("");
      $("#turn1").html("");
      doUnbind();
      $("#winp2").html("You Loose").css("color","Red");
   }
   else if(b==2)
   {
      $("#winp2").html("You Won").css("color","green");
      b=0;
      $("#scorep2").html(++S2);
      $("#turn2").html("");
      $("#turn1").html("");
      doUnbind();
      $("#winp1").html("You Loose").css("color","Red");
   }
}
function Box6()
{
   B6=1;
   if(a==1)
  {
     $("#box6").html("X").css("color","orange");
        a=2;
     $("#turn1").html("");
     $("#turn2").html("Your Turn");
  }
  else
  {
     $("#box6").html("O").css("color","green");
     a=1;
     $("#turn2").html("");
     $("#turn1").html("Your Turn");
  }
  doCheck();
   if(b==1)
   {
      $("#winp1").html("You Won").css("color","green");
      b=0;
      $("#scorep1").html(++S1);
      $("#turn2").html("");
      $("#turn1").html("");
      doUnbind();
      $("#winp2").html("You Loose").css("color","Red");
   }
   else if(b==2)
   {
      $("#winp2").html("You Won").css("color","green");
      b=0;
      $("#scorep2").html(++S2);
      $("#turn2").html("");
      $("#turn1").html("");
      doUnbind();
      $("#winp1").html("You Loose").css("color","Red");
   }
}
function Box7()
{
   B7=1;
   if(a==1)
   {
      $("#box7").html("X").css("color","orange");
         a=2;
      $("#turn1").html("");
      $("#turn2").html("Your Turn");
   }
   else
   {
      $("#box7").html("O").css("color","green");
      a=1;
      $("#turn2").html("");
      $("#turn1").html("Your Turn");
   }
   doCheck();
   if(b==1)
   {
      $("#winp1").html("You Won").css("color","green");
      b=0;
      $("#scorep1").html(++S1);
      $("#turn2").html("");
      doUnbind();
      $("#turn1").html("");
      $("#winp2").html("You Loose").css("color","Red");
   }
   else if(b==2)
   {
      $("#winp2").html("You Won").css("color","green");
      b=0;
      $("#scorep2").html(++S2);
      $("#turn2").html("");
      doUnbind();
      $("#turn1").html("");
      $("#winp1").html("You Loose").css("color","Red");
   }
}
function Box8()
{
   B8=1;
   if(a==1)
   {
      $("#box8").html("X").css("color","orange");
         a=2;
      $("#turn1").html("");
      $("#turn2").html("Your Turn");
   }
   else
   {
      $("#box8").html("O").css("color","green");
      a=1;
      $("#turn2").html("");
      $("#turn1").html("Your Turn");
   }
   doCheck();
   if(b==1)
   {
      $("#winp1").html("You Won").css("color","green");
      b=0;
      $("#scorep1").html(++S1);
      $("#turn2").html("");
      $("#turn1").html("");
      doUnbind();
      $("#winp2").html("You Loose").css("color","Red");
   }
   else if(b==2)
   {
      $("#winp2").html("You Won").css("color","green");
      b=0;
      $("#scorep2").html(++S2);
      $("#turn2").html("");
      $("#turn1").html("");
      doUnbind();
      $("#winp1").html("You Loose").css("color","Red");
   }
}
function Box9()
{
   B9=1;
   if(a==1)
   {
      $("#box9").html("X").css("color","orange");
         a=2;
      $("#turn1").html("");
      $("#turn2").html("Your Turn");
   }
   else
   {
      $("#box9").html("O").css("color","green");
      a=1;
      $("#turn2").html("");
      $("#turn1").html("Your Turn");
   }
   doCheck();
   if(b==1)
   {
      $("#winp1").html("You Won").css("color","green");
      b=0;
      $("#scorep1").html(++S1);
      $("#turn2").html("");
      doUnbind();
      $("#turn1").html("");
      $("#winp2").html("You Loose").css("color","Red");
   }
   else if(b==2)
   {
      $("#winp2").html("You Won").css("color","green");
      b=0;
      $("#scorep2").html(++S2);
      $("#turn2").html("");
      doUnbind();
      $("#turn1").html("");
      $("#winp1").html("You Loose").css("color","Red");
   }
}
function doUncheck()
{
   $("#PlayAgain").fadeIn(1000);
}

