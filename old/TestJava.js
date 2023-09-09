
function OnSubmitForm()
{
  // if(document.myform.operation[0].checked == true)
  // {
  //   window.alert(1);
  //   // document.myform.action ="insert.html";
  // }
  // else
  // if(document.myform.operation[1].checked == true)
  // {
  //   window.alert(2);
  //   // document.myform.action ="update.html";

  //   mybutton.style.display = "inline";
  //   // mybutton.style.color = "Red" ;

  // }else
   // if( document.myform.option[1].checked == true)
   if(document.getElementById('budget').value == 0)
  // if(document.myform.operation[1].checked == true)
  {
    window.alert(7);
    // document.myform.action ="update.html";

    // mybutton.style.display = "inline";
    // mybutton.style.color = "Red" ;

  }
  return true;
}

// function OnSubmitForm()
// {
//   if(document.myform.Destination[0].checked == true && object.budget[3].checked == true){
//     document.myform.action ="Tours.html#NI";
//   }
//   else if (document.myform.Destination[1].checked == true) {
//     document.myform.action ="Tours.html#SI";
//   }
//   else
//     document.myform.action ="Tours.html#BI"; 
// }


    function dynamicdropdown(listindex)
    {
        switch (listindex)
        {
    
        case "manual" :
        window.alert(5 + 6);
            document.getElementById("status").options[0]=new Option("Select status","");
            document.getElementById("status").options[1]=new Option("OPEN","open");
            document.getElementById("status").options[2]=new Option("DELIVERED","delivered");
            break;
        case "online" :
        window.alert(17);
            document.getElementById("status").options[0]=new Option("Select status","");
            document.getElementById("status").options[1]=new Option("OPEN","open");
            document.getElementById("status").options[2]=new Option("DELIVERED","delivered");
            document.getElementById("status").options[3]=new Option("SHIPPED","shipped");
            break;
        }
        return true;
    }

}