 function getRandomColor() {
     var letters = '0123456789ABCDEF';
      var color = '#';
          for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
           }
      return color;
  }

  function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
  }
  var clickTime;
  var createdTime;
  var howFast;

  function showBox(){

    var time=Math.random();
    time=time*1200;
    setTimeout(function() {
      if(Math.random()>0.5){
        document.getElementById("box").style.borderRadius="50px";
      } else {
        document.getElementById("box").style.borderRadius="0px";
      }
      var top=Math.random();
      top=top*600;
      var left=Math.random();
      left=left*800;
      document.getElementById("box").style.top=top+"px";
      document.getElementById("box").style.left=left+"px";
      document.getElementById("box").style.backgroundColor=getRandomColor();
            document.getElementById("box").style.display="block";
      createdTime=Date.now();
      }, time);

  }

      document.getElementById("box").onclick=function(){
            clickTime=Date.now();
            howFast=(clickTime-createdTime)/1000; /*it's divided by 1000 to turn from miliseconds to seconds. HarunHasic */
            document.getElementById("time").innerHTML=howFast;

            this.style.display="none";
            showBox();
      }

    showBox();