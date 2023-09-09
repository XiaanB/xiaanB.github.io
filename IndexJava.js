
function OnSubmitForm()
{
  if(document.myform.Destination[0].checked == true){
  	window.alert(5 + 6);
    document.myform.action ="Tours.html#NI";
  }
  else
  if(document.myform.Destination[1].checked == true)
  {
    document.myform.action ="Tours.html#SI";
  }
  else
  if(document.myform.Destination[2].checked == true)
  {
    document.myform.action ="Tours.html#BI";
  }
  return true;
}








// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}