
function OnSubmitForm()
{
  if(document.myform.operation[0].checked == true)
  {
    window.alert(5 + 6);
    document.myform.action ="insert.html";
  }
  else
  if(document.myform.operation[1].checked == true)
  {
    document.myform.action ="update.html";

    mybutton.style.display = "inline";
    // mybutton.style.color = "Red" ;

  }
  return true;
}



