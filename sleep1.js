  document.getElementById("sleepbutt").addEventListener("click",changeText);
  function changeText()
  {
    document.getElementById("para").innerHTML="";
    document.querySelectorAll("button")[0].style.display="none";
    document.querySelectorAll("button")[1].style.display="inline";
    document.getElementById("head").style.padding="100px";
    document.getElementById("frm1").style.display="block";
}
var selectedvalue; var selectedvalue1; var selectedvalue2;
function getfirstvalue()
{
  selectedvalue= document.getElementById("hours").value;
  console.log(selectedvalue);
}
function getsecondvalue()
{
  selectedvalue1= document.getElementById("mins").value;
  console.log(selectedvalue1);
}
function getthirdvalue()
{
  selectedvalue2= document.getElementById("am").value;
  console.log(selectedvalue2);
}
document.getElementById("sleep1butt").addEventListener("click",all);

var add; var j=0; var add=0; var hr1=0; var total=0; var newhr=0; var newmin=0;
var str=["hi","beauty","hello"];

//var k1 =parseFloat( selectedvalue);
function all()
{

  // if(selectedvalue=="Hrs" || selectedvalue1=="mins" || selectedvalue2=="Am/Pm")
  //   {
  //     console.log("chutiya pa ");
  //     alert("Please fill all the fields");
  //    }
  //  else{


      if(selectedvalue2=="am")
      {
        for(var i=3;i<=5; i++)
        {
          add= 6*15*i;
          hr1= selectedvalue*60;
          total= Number(hr1)+ Number(selectedvalue1) +Number(add);
          newhr= Math.floor(total/60);
          newmin= total %60;
          if(newmin==0){
            newmin=newmin+"0";
          }
          if(newhr>12)
          {
            newhr= newhr-12;
            selectedvalue2 = "pm";
          }
          str[j++]= newhr+":"+newmin+" "+selectedvalue2;
        }
      }
      else
      {
        for(var i=3;i<=5; i++)
        {
          add= 6*15*i;
          hr1= selectedvalue*60;
          total= Number(hr1)+ Number(selectedvalue1) +Number(add);
          newhr= Math.floor( total/60 );
          newmin= total %60;
          if(newhr>12)
          {
            newhr= newhr-12;
            selectedvalue2 = "am";
          }
          str[j++]= newhr+":"+newmin+" "+selectedvalue2;
          //console.log(str);
      }
    }
  // }
  }                       //end of funtion all



  document.getElementById("sleep1butt").addEventListener("click",display);
  function display()
  {
    if(selectedvalue==undefined || selectedvalue1==undefined || selectedvalue2==undefined){
    alert("Pls fill all the Details");
  }
    else{
    document.getElementById("head").innerHTML="You can Wake up At " +" "+ str[0]+ " , "+str[1]+ " and "+str[2]+ "  ";
    document.getElementById("head").style.color="wheat";
  }
}
