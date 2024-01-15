function clearDisplay()
{
var display=document.getElementById("displaybar");
display.value="";
}

function appendToDisplay(value)
{
var display=document.getElementById("displaybar");
display.value+=value;
}


document.getElementById("displaybar").addEventListener("keydown",function(event)
{
if(event.key==='Enter')
{
displayResult();
}
});

function displayResult()
{
const displayValue=document.getElementById("displaybar").value;
try
{
   const result=eval(displayValue);
   document.getElementById("displaybar").value=result;
}
catch(err)
{
    document.getElementById("displaybar").value='error';
}
}