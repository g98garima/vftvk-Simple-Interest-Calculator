function Calculate()
    {
        let p=document.getElementById('amount').value;
        let t=document.getElementById('time').value;
        let r=document.getElementById('textInput').value;

        let  SI=(p*t*r)/100;
        if (p>=0) {
  alert("enter a positive number!")
}

        document.getElementById('si').innerHTML="If you deposit "+p+"<br>at an interest rate of "+r+"<br>You will receive an amount of " +SI;
    }
    function updateTextInput(val) {
        document.getElementById('textInput').value=val; 
      }
