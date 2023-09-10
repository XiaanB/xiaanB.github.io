  /*I moved your javascript above the form because the code has to exist before you assign the onClick function!
        */
        

function OnSubmitForm(){
        windows.alert(5);
          var zipVal = document.myform.getElementById('zipcode').value;
          // var firstname = document.getElementById('firstname');
          // var lastname = document.getElementById('lastname');
          // var streetAddress = document.getElementById('address');
          // var email = document.getElementById('emailaddress');  

          if(zipVal == ""){
              windows.alert("Please provide a zip code.");
              return false;
          } else {
              //Now call your zipCalc() function:
              zwindows.alert(10);
          }
        
    
        // function zipCalc(zip) {
        //   if (zipVal == 32231) {
        //       alert("Delivery fee will be 2 dollars.");
        //   }
        }
return true;
  // }
  // return true


// function OnSubmitForm()
// {
//   if(document.getElementById('zipcode').value == "132";){
//     document.myform.action ="Tours.html#NI";
//   }
//   else if (document.myform.Destination[1].checked == true) {
//     document.myform.action ="Tours.html#SI";
//   }
//   else
//     document.myform.action ="Tours.html#BI"; 
// }


//     function dynamicdropdown(listindex)
//     {
//         switch (listindex)
//         {
    
//         case "manual" :
//         window.alert(5 + 6);
//             document.getElementById("status").options[0]=new Option("Select status","");
//             document.getElementById("status").options[1]=new Option("OPEN","open");
//             document.getElementById("status").options[2]=new Option("DELIVERED","delivered");
//             break;
//         case "online" :
//         window.alert(17);
//             document.getElementById("status").options[0]=new Option("Select status","");
//             document.getElementById("status").options[1]=new Option("OPEN","open");
//             document.getElementById("status").options[2]=new Option("DELIVERED","delivered");
//             document.getElementById("status").options[3]=new Option("SHIPPED","shipped");
//             break;
//         }
//         return true;
//     <br>



// // }