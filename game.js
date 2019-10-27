newcolor();
var x;
var y;
var z;
function newcolor(){
      let arr = document.getElementsByClassName('common')
       x = Math.floor(Math.random()*255);
       y = Math.floor(Math.random()*255);
       z = Math.floor(Math.random()*255);
       var change= document.getElementById('change')
       change.innerHTML= "("+x+","+y+","+z+")";
      for(i=0;i<arr.length;i++){
        arr[i].style.backgroundColor="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
      }
      if(arr.length==6){
        var o1 = Math.floor(Math.random()*6+1);
      }
      else{
          var o2 = Math.floor(Math.random()*3+1);
      }
      if(o1){
          if(o1==7)
          o1=6
          arr[o1-1].style.backgroundColor="rgb("+x+","+y+","+z+")"
      }
      if(o2){
        if(o2==4)
        o2=3
        arr[o2-1].style.backgroundColor="rgb("+x+","+y+","+z+")"
    }  
}
var ctr =0;
function hardfunc(event){
       if(ctr==0){
       elem= document.getElementById('rowy')
       var box1 = "<div class='common' id='row_4' onclick= 'myfunc(event)'> </div> "
       var box2 = "<div class='common' id='row_5' onclick= 'myfunc(event)'> </div> "
       var box3 = "<div class='common' id='row_6' onclick= 'myfunc(event)'> </div> " 
       elem.innerHTML =box1+box2+box3;
       newcolor();
       ctr++;
    }
       else{

       }
}
function easyfunc(event){
    if(ctr>0){
        elem= document.getElementById('rowy')
        elem.innerHTML = '';
        newcolor();
        ctr=0;
    }
   else{

   }
}
function myfunc(event){
    console.log(event.target.style.backgroundColor);
    if(event.target.style.backgroundColor=="rgb("+x+", "+y+", "+z+")"){
        alert('Well Done')
        newcolor();
    }
    else{
        event.target.style.backgroundColor="#232323"
        alert('Ah! Try again')
    }
}